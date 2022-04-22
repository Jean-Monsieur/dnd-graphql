import convertWeightUnit from '../../utils/convertWeightUnit';
import { convertgQLCurrency } from '../../utils/convertGqlCurrency';
import { CurrencyIcon } from '../../components/currency-icon';
import { EquipmentCost, useGetEquipmentsQuery } from '../../generated/graphql';
import { FunctionComponent } from 'react';
import { GqlCurrencies } from '../../types/gqlCurrency';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { MuiTable } from '../../components/table';
import { Skeleton, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { WeightUnit } from '../../types';

const EquipmentPage: FunctionComponent = () => {
  const { data, error, loading } = useGetEquipmentsQuery();

  const history = useHistory();

  const unitStyle = {
    display: "flex",
    alignItems: "center",
    fontStyle: "italic",
    fontSize: "small",
    fontWeight: 100,
    ml: ".5rem",
    mr: "1rem",
  };

  if (loading) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="rectangular" width={"100%"} sx={{ my: "1rem" }} />
        <Skeleton variant="rectangular" width={"100%"} sx={{ my: "1rem" }} />
        <Skeleton
          variant="rectangular"
          height={"50%"}
          width={"100%"}
          sx={{ my: "1rem" }}
        />
      </div>
    );
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      flex: 1,
      headerName: "Name",
    },
    {
      field: "weight",
      flex: 1,
      headerName: "Weight",
      renderCell: (params) => (
        <>
          {params.value} <Typography sx={unitStyle}>Lbs.</Typography>
          {convertWeightUnit(params.value, WeightUnit.LBS, WeightUnit.KG)}{" "}
          <Typography sx={unitStyle}>Kg.</Typography>
        </>
      ),
    },
    {
      field: "cost",
      flex: 1,
      headerName: "Cost",
      renderCell: (params: GridRenderCellParams<EquipmentCost>) => (
        <>
          <span style={{ marginRight: "0.25rem" }}>
            {params.value.quantity}
          </span>
          <CurrencyIcon
            currency={convertgQLCurrency(params.value.unit as GqlCurrencies)}
          />
          <Typography sx={unitStyle}>{params.value.unit}</Typography>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <MuiTable
          autoHeight={true}
          columns={columns}
          rows={data.equipments.map((m) => ({ ...m, id: m.index }))}
          onRowDoubleClick={({ id }) => history.push(`/equipment/${id}`)}
        />
      </div>
    </div>
  );
};

export default EquipmentPage;
