import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GridOptions } from 'ag-grid';

import { HttpService } from '../../../../common/core-services/http';
import { ToastService } from 'app/common/core-services/toast';

import { FactEditService, FactsOverviewService } from '../../services';
import { FactOverviewEntry } from '../../models';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-facts-overview',
  templateUrl: './facts-overview.component.html',
  styleUrls: ['./facts-overview.component.scss']
})
export class FactsOverviewComponent implements OnInit {

  public gridOptions: GridOptions;
  public sessionId: string | null;

  constructor(
    private router: Router,
    private factsOverviewService: FactsOverviewService,
    private factEditService: FactEditService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.initializeGrid();
    this.loadOverview();
  }

  public deleteFactsClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    this.toastService.showInfoToast('Deleting Facts...');
    selectedNodes.forEach(d => {
      const selectedFact = <FactOverviewEntry>d.data;
      this.factEditService.deleteFact(selectedFact.factId!);
      this.toastService.showSuccessToast('Facts deleted.');
    });

    this.gridOptions.api!.removeItems(selectedNodes);
  }

  public openFactClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <FactOverviewEntry>selectedNodes[0].data;
      this.navigateToDetails(entry.factId!);
    }
  }

  public createFactClicked(): void {
    this.navigateToDetails('-1');
  }

  private loadOverview(): void {
    this.toastService.showInfoToast('Loading Overview...');
    this.factsOverviewService.loadOverview().then(data => {
      this.gridOptions.api!.setRowData(data);
      this.toastService.showSuccessToast('Overview loaded.');
    });
  }

  private initializeGrid(): void {
    this.gridOptions = GridBuilder.createGridOptions();
    this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onCellDoubleClicked = this.cellDoubleClicked.bind(this);
  }

  private sizeColumnsIfReady() {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  private cellDoubleClicked($event: any): void {
    const entry = <FactOverviewEntry>$event.data;
    this.navigateToDetails(entry.factId!);
  }

  private navigateToDetails(factId: string): void {
    this.router.navigate(['/facts', factId]);
  }


}
