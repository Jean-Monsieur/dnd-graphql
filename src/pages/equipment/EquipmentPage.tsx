import CurrencyIcon from '../../components/CurrencyIcon';
import { convertgQLCurrency, GqlCurrencies } from '../../types/gqlCurrency';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { EquipmentCost, useGetEquipmentsQuery } from '../../generated/graphql';
import { FunctionComponent, useState } from 'react';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

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
          <span style={{ marginRight: "0.25rem" }}>
            {params.value.quantity}
          </span>
          <CurrencyIcon
            currency={convertgQLCurrency(params.value.unit as GqlCurrencies)}
          />
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
              fontWeight: 100,
            }}
          >
            {params.value.unit}
          </Typography>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rowsPerPageOptions={[5, 15, 25, 50, 100, 200]}
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
