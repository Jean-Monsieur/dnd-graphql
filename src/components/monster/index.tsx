import MonsterList from "./MonsterList";
import React from "react";
import { useGetMonstersListQuery } from "../../generated/graphql";
import { Skeleton } from "@mui/material";

const MonsterTableContainer = () => {
  const { data, error, loading } = useGetMonstersListQuery();

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

  return <MonsterList data={data} />;
};

export default MonsterTableContainer;
