import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridOptions } from 'ag-grid';

import { ToastService } from 'app/common/core-services/toast';

import { SessionsOverviewService, SessionEditService } from '../../services';
import { SessionOverviewEntry } from '../../models';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-sessions-overview',
  templateUrl: './sessions-overview.component.html',
  styleUrls: ['./sessions-overview.component.scss']
})
export class SessionsOverviewComponent implements OnInit {
  public gridOptions: GridOptions;

  constructor(
    private router: Router,
    private sessionsOverviewService: SessionsOverviewService,
    private sessionEditService: SessionEditService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.initializeGrid();
    this.loadOverview();
  }

  public deleteSessionClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    this.toastService.showInfoToast('Deleting Sessions...');
    selectedNodes.forEach(d => {
      const selectedSession = <SessionOverviewEntry>d.data;

      this.sessionEditService.deleteSession(selectedSession.sessionId!);
      this.toastService.showSuccessToast('Sessions deleted.');
    });

    this.gridOptions.api!.removeItems(selectedNodes);
  }

  public openSessionClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <SessionOverviewEntry>selectedNodes[0].data;
      this.navigateToDetails(entry.sessionId!);
    }
  }

  public runTestSessionClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <SessionOverviewEntry>selectedNodes[0].data;
      this.router.navigate(['/sessions', entry.sessionId, 'run']);
    }
  }

  public runLearningSessionClicked(): void {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <SessionOverviewEntry>selectedNodes[0].data;
      this.router.navigate(['/sessions', entry.sessionId, 'run']);
    }
  }

  public createSessionClicked(): void {
    this.navigateToDetails('-1');
  }

  private loadOverview(): void {
    this.toastService.showInfoToast('Loading Overview...');
    this.sessionsOverviewService.loadOverview().then(data => {
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
    const entry = <SessionOverviewEntry>$event.data;
    this.navigateToDetails(entry.sessionId!);
  }

  private navigateToDetails(sessionId: string): void {
    this.router.navigate(['/sessions', sessionId]);
  }
}
