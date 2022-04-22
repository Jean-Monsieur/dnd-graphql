import { CurrencyIcon } from "../../components/currency-icon";
import { GqlCurrencies } from "../../types/gqlCurrency";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { EquipmentCost, useGetEquipmentsQuery } from "../../generated/graphql";
import { FunctionComponent } from "react";
import { Skeleton, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { convertgQLCurrency } from "../../utils/convertGqlCurrency";
import { MuiTable } from "../../components/table";
import ErrorPage from "../../components/error-page/ErrorPage";

const EquipmentPage: FunctionComponent = () => {
  const { data, error, loading } = useGetEquipmentsQuery();

  const history = useHistory();

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
    return <ErrorPage errorCode={500} />;
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
