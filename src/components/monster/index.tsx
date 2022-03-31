import React from "react";
import { useGetMonstersListQuery } from "../../generated/graphql";
import MonsterList from "./MonsterList";

const MonsterTableContainer = () => {
  const { data, error, loading } = useGetMonstersListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <MonsterList data={data} />;
};

export default MonsterTableContainer;