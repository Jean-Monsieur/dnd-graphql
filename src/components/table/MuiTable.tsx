import {
  DataGrid,
  GridColumns,
  GridEventListener,
  GridEvents,
  GridRowsProp,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

import { useDeviceSelectors } from "react-device-detect";
import QuickSearchToolbar from "./QuickSearchToolbar";
type MuiTableProps = {
  columns: GridColumns;
  rows: GridRowsProp;
  onRowDoubleClick: GridEventListener<GridEvents.rowDoubleClick>;
  autoHeight?: boolean;
  rowsPerPageOptions?: number[];
  pagination?: true | undefined;
};
const MuiTable = ({
  columns,
  rows,
  onRowDoubleClick,
  autoHeight = false,
  rowsPerPageOptions = [5, 15, 25, 50, 100],
  pagination = undefined,
}: MuiTableProps) => {
  const [{ isMobile }] = useDeviceSelectors(window.navigator.userAgent);

  const [pageSize, setPageSize] = useState(25);

  const [searchText, setSearchText] = React.useState("");
  const [actualRows, setActualRows] = React.useState(rows);

  useEffect(() => {
    setActualRows(rows);
  }, [rows]);

  const escapeRegExp = (value: string): string => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setActualRows(filteredRows);
  };

  return (
    <DataGrid
      rowsPerPageOptions={rowsPerPageOptions}
      autoHeight={autoHeight}
      rows={actualRows}
      columns={columns}
      pagination={pagination}
      pageSize={pageSize}
      density={isMobile ? "comfortable" : "compact"}
      components={{
        Toolbar: QuickSearchToolbar,
      }}
      componentsProps={{
        toolbar: {
          value: searchText,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
            requestSearch(event.target.value),
          clearSearch: () => requestSearch(""),
        },
      }}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      onRowDoubleClick={onRowDoubleClick}
      disableSelectionOnClick
      isRowSelectable={() => false}
    />
  );
};

export default MuiTable;
