import ErrorPage from '../../components/error-page/ErrorPage';
import SpellPage from './SpellPage';
import { FunctionComponent } from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { MuiTable } from '../../components/table';
import { PageContainer } from '../../components/page';
import { Skeleton } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';


const SpellsPage: FunctionComponent = () => {

  // const { data, error, loading } = useGetSpellsQuery();
  const loading = false;
  const data: readonly any[] = [];
  const error = false;

  const location = useLocation();

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
      flex: 2,
      headerName: "Name",
    },
    {
      field: "level",
      flex: 1,
      headerName: "Lvl",
    },

    {
      field: "classes",
      flex: 1,
      headerName: "Classes",
      renderCell: (params: GridRenderCellParams) => (
        <>
          {params.value.map((c: any, index: number) => (
            <>
              {c?.name ?? ""}
              {index + 1 !== params.value.length ? ", " : ""}
            </>
          ))}
        </>
      ),
    },
  ];

  if (location.search === "") {
    return (
      <PageContainer>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <MuiTable
              autoHeight={true}
              columns={columns}
              rows={data}
              // rows={data.spells.map((m: { index: any; }) => ({ ...m, id: m.index }))}
              onRowDoubleClick={({ id }) => history.push(`/spells/${id}`)}
            />
          </div>
        </div>
      </PageContainer>
    );
  }
  return <SpellPage />;
};

export default SpellsPage;
