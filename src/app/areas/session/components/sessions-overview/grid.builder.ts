import { GridOptions, ColDef } from 'ag-grid';

export class GridBuilder {
  public static COL_ID_TOTAL = 'colIdTotal';

  public static createGridOptions(): GridOptions {
    const colDefs = this.createColDefs();

    const gridOptions = <GridOptions>{
      animateRows: true,
      enableFilter: true,
      rowSelection: 'single',
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
        field: 'sessionName',
        width: 60,
        filter: 'text',
        cellStyle: { 'border-style': 'none' },
        sortingOrder: ['desc', 'asc'],
      },
      {
        headerName: 'Facts Count',
        field: 'sessionFactsCount',
        width: 500,
        filter: 'text',
        cellStyle: { 'border-style': 'none' }
      },
      {
        headerName: 'Runs Count',
        field: 'sessionRunsCount',
        width: 75,
        filter: 'number',
        cellStyle: { 'border-style': 'none' }
      }
    ];

    return result;
  }
}
