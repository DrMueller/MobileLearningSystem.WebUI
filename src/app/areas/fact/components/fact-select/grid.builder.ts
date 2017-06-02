import { GridOptions, ColDef } from 'ag-grid';

export class GridBuilder {
  public static createGridOptions(): GridOptions {
    const colDefs = this.createColDefs();

    const gridOptions = <GridOptions>{
      animateRows: true,
      enableFilter: true,
      rowSelection: 'multiple',
      enableSorting: true,
      enableColResize: true,
      enableServerSideSorting: false,
      columnDefs: colDefs
    };

    return gridOptions;
  }

  private static createColDefs(): ColDef[] {
    const result = <ColDef[]>[
      {
        headerName: 'Name',
        field: 'factName',
        width: 60,
        filter: 'text',
        cellStyle: { 'border-style': 'none' },
        sortingOrder: ['desc', 'asc'],
      }
    ];

    return result;
  }
}
