import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid';

import { FactSelectEntry } from '../../../../models';
import { ToastService } from '../../../../common/core-services/toast';

import { FactSelectService, FactSelectMediatorService } from '../../services';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-fact-select',
  templateUrl: './fact-select.component.html',
  styleUrls: ['./fact-select.component.scss']
})
export class FactSelectComponent implements OnInit {
  public gridOptions: GridOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private factSelectService: FactSelectService,
    private factSelectMediatorService: FactSelectMediatorService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.initializeGrid();
    this.loadData();
    this.factSelectMediatorService.initialize();
  }

  public goToSessionButtenClicked(): void {
    const sessionId = this.activatedRoute.snapshot.queryParamMap.get('sessionId');
    this.router.navigate(['/sessions', sessionId]);
  }

  private loadData(): void {
    this.factSelectService.getFactSelectEntries().then(data => {
      this.gridOptions.api!.setRowData(data);
    });
  }

  private initializeGrid(): void {
    this.gridOptions = GridBuilder.createGridOptions();
    this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onCellDoubleClicked = this.cellDoubleClicked.bind(this);
  }

  private cellDoubleClicked($event: any): void {
    const entry = <FactSelectEntry>$event.data;
    if (this.factSelectMediatorService.addSelection(entry)) {
      this.toastService.showInfoToast('Fact added.');
    }
  }

  private sizeColumnsIfReady() {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

}
