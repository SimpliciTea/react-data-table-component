import React from 'react';
import { Alignment, Direction } from './constants';
export declare const defaultProps: {
    columns: never[];
    data: never[];
    title: string;
    keyField: string;
    selectableRows: boolean;
    selectableRowsHighlight: boolean;
    selectableRowsNoSelectAll: boolean;
    selectableRowSelected: null;
    selectableRowDisabled: null;
    selectableRowsComponent: "input";
    selectableRowsComponentProps: {};
    selectableRowsVisibleOnly: boolean;
    selectableRowsSingle: boolean;
    clearSelectedRows: boolean;
    expandableRows: boolean;
    expandableRowDisabled: null;
    expandableRowExpanded: null;
    expandOnRowClicked: boolean;
    expandableRowsHideExpander: boolean;
    expandOnRowDoubleClicked: boolean;
    expandableInheritConditionalStyles: boolean;
    expandableRowsComponent: () => JSX.Element;
    expandableIcon: {
        collapsed: React.JSX.Element;
        expanded: React.JSX.Element;
    };
    expandableRowsComponentProps: {};
    progressPending: boolean;
    progressComponent: React.JSX.Element;
    persistTableHead: boolean;
    sortIcon: null;
    sortFunction: null;
    sortServer: boolean;
    striped: boolean;
    highlightOnHover: boolean;
    pointerOnHover: boolean;
    noContextMenu: boolean;
    contextMessage: {
        singular: string;
        plural: string;
        message: string;
    };
    actions: null;
    contextActions: null;
    contextComponent: null;
    defaultSortFieldId: null;
    defaultSortAsc: boolean;
    responsive: boolean;
    noDataComponent: React.JSX.Element;
    disabled: boolean;
    noTableHead: boolean;
    noHeader: boolean;
    subHeader: boolean;
    subHeaderAlign: Alignment;
    subHeaderWrap: boolean;
    subHeaderComponent: null;
    fixedHeader: boolean;
    fixedHeaderScrollHeight: string;
    pagination: boolean;
    paginationServer: boolean;
    paginationServerOptions: {
        persistSelectedOnSort: boolean;
        persistSelectedOnPageChange: boolean;
    };
    paginationDefaultPage: number;
    paginationResetDefaultPage: boolean;
    paginationTotalRows: number;
    paginationPerPage: number;
    paginationRowsPerPageOptions: number[];
    paginationComponent: null;
    paginationComponentOptions: {};
    paginationIconFirstPage: React.JSX.Element;
    paginationIconLastPage: React.JSX.Element;
    paginationIconNext: React.JSX.Element;
    paginationIconPrevious: React.JSX.Element;
    dense: boolean;
    conditionalRowStyles: never[];
    theme: "default";
    customStyles: {};
    direction: Direction;
    onChangePage: () => null;
    onChangeRowsPerPage: () => null;
    onRowClicked: () => null;
    onRowDoubleClicked: () => null;
    onRowMouseEnter: () => null;
    onRowMouseLeave: () => null;
    onRowExpandToggled: () => null;
    onSelectedRowsChange: () => null;
    onSort: () => null;
    onColumnOrderChange: () => null;
};
