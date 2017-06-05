import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GridOptions } from 'ag-grid';

import { EventMediatorService } from 'app/common/core-services/event-mediation';
import { SessionFact, Session, FactSelectEntry } from '../../../../models';
import { FactSelectService, FactSelectMediatorService } from '../../../fact';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-session-edit-facts',
  templateUrl: './session-edit-facts.component.html',
  styleUrls: ['./session-edit-facts.component.scss']
})
export class SessionEditFactsComponent implements OnInit, AfterViewInit {
  private _session: Session;
  private _factSelectEntries: FactSelectEntry[];
  public gridOptions: GridOptions;

  private get factSelectEntries(): FactSelectEntry[] {
    return this._factSelectEntries;
  }

  private set factSelectEntries(data: FactSelectEntry[]) {
    this._factSelectEntries = data;
  }

  @Input() public set session(value: Session) {
    this._session = value;
    this.mapAndSetSessionFactsFromParent(value.sessionFacts);
  }

  constructor(
    private eventMediatorService: EventMediatorService,
    private router: Router,
    private route: ActivatedRoute,
    private factSelectService: FactSelectService,
    private factSelectMediatorService: FactSelectMediatorService) {
  }

  ngAfterViewInit(): void {
    this.bindToGridIfReady();
  }

  ngOnInit() {
    this.factSelectEntries = [];
    this.initializeGrid();
    this.setSessionFactsFromSelect();
    // this.eventMediatorService.registerListener('editDataRequested', this.editDataRequested.bind(this));
  }

  public addFactsButtonClicked(): void {
    this.router.navigate(['/facts/select'], { queryParams: { sessionId: this._session.id } });
  }

  public removeFactsButtonClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    selectedNodes.forEach(d => {
      const entry = <FactSelectEntry>d.data;
      const index = this.factSelectEntries.indexOf(entry);
      this.factSelectEntries.splice(index, 1);
    });

    this.bindToGridIfReady();
  }

  public editDataRequested(sender: any, data: any): void {
    const session = <Session>data;

    const sessionFacts = this.factSelectEntries.map(se => {
      const sf = new SessionFact();
      sf.factId = se.factId;
      return sf;
    });

    ;
    session.sessionFacts = sessionFacts;
  }

  private initializeGrid(): void {
    this.gridOptions = GridBuilder.createGridOptions();
    this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
    this.bindToGridIfReady();
  }

  private sizeColumnsIfReady() {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  private setSessionFactsFromSelect(): void {
    const selectedEntries = this.factSelectMediatorService.getSelectedEntries();
    if (selectedEntries) {
      selectedEntries.forEach(fs => {
        if (this.factSelectEntries.indexOf(fs) === -1) {
          this.factSelectEntries.push(fs);
        }
      });
    }
  }

  private mapAndSetSessionFactsFromParent(sessionFacts: SessionFact[]): void {
    if (sessionFacts.length > 0) {
      this.factSelectService.getFactSelectEntries().then(entries => {
        const sessionFactIds = sessionFacts.map(f => {
          return f.factId;
        });

        const factSelectEntries = entries.filter(f => {
          return sessionFactIds.includes(f.factId);
        });

        factSelectEntries.forEach(fs => {
          if (this.factSelectEntries.indexOf(fs) === -1) {
            this.factSelectEntries.push(fs);
          }
        });

        this.bindToGridIfReady();
      });
    }

  }

  private bindToGridIfReady(): void {
    if (this.gridOptions && this.gridOptions.api && this.factSelectEntries) {
      this.gridOptions.api.setRowData(this.factSelectEntries);
    }
  }
}
