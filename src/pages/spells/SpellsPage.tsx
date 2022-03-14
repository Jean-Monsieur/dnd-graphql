import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { PageContainer } from "../../components/page";
import { SpellClasses, useGetSpellsQuery } from "../../generated/graphql";
import SpellPage from "./SpellPage";

const SpellsPage: FunctionComponent = () => {
  const { data, error, loading } = useGetSpellsQuery();

  const location = useLocation();

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
      headerName: "Name",
      renderCell: (params: GridRenderCellParams<string>) => (
        <>
          <Link to={`/spells/${params.id}`} key={params.id}>
            {params.value}
          </Link>
        </>
      ),
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
      renderCell: (params: GridRenderCellParams<SpellClasses[]>) => (
        <>
          {params.value.map((c, index) => (
            <>
              {c.name}
              {index + 1 !== params.value.length ? ", " : ""}
            </>
          ))}
        </>
      ),
    },
  ];
  console.log(location);
  if (location.search === "") {
    return (
      <PageContainer>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rowsPerPageOptions={[5, 15, 25, 50, 100]}
              autoHeight
              rows={data.spells.map((m) => ({ ...m, id: m.index }))}
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
  }
  return <SpellPage />;
};

export default SpellsPage;
