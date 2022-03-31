import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";

import { EquipmentCost, useGetEquipmentsQuery } from "../../generated/graphql";

const EquipmentPage: FunctionComponent = () => {
  const { data, error, loading } = useGetEquipmentsQuery();

  const history = useHistory();

  const [pageSize, setPageSize] = useState(100);

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
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rowsPerPageOptions={[5, 15, 25, 50, 100]}
          autoHeight
          rows={data.equipments.map((m) => ({ ...m, id: m.index }))}
          columns={columns}
          pagination
          pageSize={pageSize}
          onRowDoubleClick={({ id }) => history.push(`/equipment/${id}`)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </div>
    </div>
  );
};

export default EquipmentPage;
