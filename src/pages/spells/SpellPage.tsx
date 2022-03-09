import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";

import { PageContainer } from "../../components/page";
import {
  FilterFindOneSpellInput,
  GetSpellDocument,
  GetSpellQuery,
  SpellClasses,
  useGetSpellQuery,
} from "../../generated/graphql";

const SpellPage: FunctionComponent = () => {
  const x: FilterFindOneSpellInput = {
    index: "astral-projection",
  };
  const { data, error, loading } = useGetSpellQuery({
    variables: { filter: x },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>{data.spell?.desc}</div>
      </div>
    </PageContainer>
  );
};

export default SpellPage;
