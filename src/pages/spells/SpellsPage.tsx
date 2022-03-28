import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { PageContainer } from "../../components/page";
import { useGetSpellsQuery } from "../../generated/graphql";
import SpellPage from "./SpellPage";

const SpellsPage: FunctionComponent = () => {
  const { data, error, loading } = useGetSpellsQuery();

  const location = useLocation();

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
            <DataGrid
              rowsPerPageOptions={[5, 15, 25, 50, 100]}
              autoHeight
              rows={data.spells.map((m) => ({ ...m, id: m.index }))}
              columns={columns}
              pagination
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              disableSelectionOnClick
              isRowSelectable={() => false}
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
