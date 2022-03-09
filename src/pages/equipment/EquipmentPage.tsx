import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";

import { PageContainer } from "../../components/page";
import { EquipmentCost, useGetEquipmentsQuery } from "../../generated/graphql";

const EquipmentPage: FunctionComponent = () => {
  const { data, error, loading } = useGetEquipmentsQuery();

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
      field: "weight",
      flex: 1,
      headerName: "Weight",
    },
    {
      field: "cost",
      flex: 1,
      headerName: "cost",
      renderCell: (params: GridRenderCellParams<EquipmentCost>) => (
        <>
          {params.value.quantity} {params.value.unit}
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rowsPerPageOptions={[5, 15, 25, 50, 100]}
            autoHeight
            rows={data.equipments.map((m) => ({ ...m, id: m.name }))}
            columns={columns}
            pagination
            checkboxSelection
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default EquipmentPage;
