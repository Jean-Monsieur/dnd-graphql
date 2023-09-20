import ErrorPage from '../../components/error-page/ErrorPage';
import { FunctionComponent } from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { MuiTable } from '../../components/table';
import { PageContainer } from '../../components/page';
import { Skeleton } from '@mui/material';
import { useGetMagicalItemsQuery } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';

const MagicItemsTable: FunctionComponent = () => {
  const { data, error, loading } = useGetMagicalItemsQuery();
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
          <MuiTable
            autoHeight={true}
            columns={columns}
            onRowDoubleClick={({ id }) => history.push(`/magic-item/${id}`)}
            rows={data?.magicItems?.map((m) => ({ ...m, id: m.index }))??[]}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default MagicItemsTable;
