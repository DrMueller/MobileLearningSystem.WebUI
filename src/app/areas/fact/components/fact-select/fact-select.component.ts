import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid';

import { FactSelectentry } from '../../models';
import { FactSelectService } from '../../services';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-fact-select',
  templateUrl: './fact-select.component.html',
  styleUrls: ['./fact-select.component.scss']
})
export class FactSelectComponent implements OnInit {
  public gridOptions: GridOptions;

  constructor(private activeModal: NgbActiveModal, private factSelectService: FactSelectService) { }

  ngOnInit() {
    this.initializeGrid();
    this.loadData();
  }

  private loadData(): void {
    this.factSelectService.loadSelectEntries().then(data => {
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
    const entry = <FactSelectentry>$event.data;
  }

  private sizeColumnsIfReady() {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

}
