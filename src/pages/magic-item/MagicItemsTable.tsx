import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "../../components/page";
import { useGetMagicalItemsQuery } from "../../generated/graphql";
const MagicItemsTable: FunctionComponent = () => {
  const { data, error, loading } = useGetMagicalItemsQuery();
  const history = useHistory();
  const [pageSize, setPageSize] = useState(15);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      flex: 1,
      headerName: "name",
    },
    {
      field: "equipment_category",
      flex: 1,
      headerName: "Category",
      renderCell: (params: GridRenderCellParams) => <>{params.value.name}</>,
    },
  ];

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rowsPerPageOptions={[5, 15, 25, 50, 100]}
            autoHeight
            rows={data.magicItems.map((m) => ({ ...m, id: m.index }))}
            columns={columns}
            pagination
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onRowDoubleClick={({ id }) => history.push(`/magic-item/${id}`)}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default MagicItemsTable;
