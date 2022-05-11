import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import CastleIcon from "@mui/icons-material/Castle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShieldIcon from "@mui/icons-material/Shield";
import { GetMonstersListQuery, MonsterSpeed } from "../../generated/graphql";
import "./styles.css";
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { MuiTable } from "../table";

interface Props {
  data: GetMonstersListQuery;
}

const MonsterList: React.FC<Props> = ({ data }) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      flex: 1,
      headerName: "name",
      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          <CastleIcon sx={{ mr: "1rem" }} />
          {"Name  "}
        </>
      ),
    },
    {
      field: "challenge_rating",
      flex: 0.3,
      resizable: false,
      headerName: "Challenge Rating",
      type: "number",
      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          {"Challenge Rating  "}
          <BarChartIcon sx={{ mr: "1rem" }} />
        </>
      ),
    },
    {
      field: "hit_dice",
      flex: 0.3,
      resizable: false,
      headerName: "Hit Dice",

      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          <FavoriteIcon sx={{ mr: "1rem" }} />
          {" Hit Dice "}
        </>
      ),
    },
    {
      field: "hit_points",
      flex: 0.3,
      resizable: false,
      headerName: "Hit points",
      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          <FavoriteIcon sx={{ mr: "1rem" }} />
          {" Hit Points "}
        </>
      ),
    },
    {
      field: "type",
      flex: 0.3,
      resizable: false,
      headerName: "Type",
    },
    {
      field: "speed",
      resizable: true,
      headerName: "Speed",
      renderHeader: () => <>{" Speed (🏃 Walk / ⛰️ Climb /🏊🏻Swim/ 🐤 Fly)"}</>,
      renderCell: (params: GridRenderCellParams<MonsterSpeed>) => (
        <>
          {params?.value?.walk}/{params?.value?.climb}/{params?.value?.swim}/
          {params?.value?.fly}
        </>
      ),
    },
    {
      field: "armor_class",
      flex: 0.3,
      resizable: false,
      headerName: "AC",
      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          <ShieldIcon sx={{ mr: "1rem" }} />
          {"AC"}
        </>
      ),
    },

    {
      field: "strength",
      flex: 0.3,
      resizable: false,
      headerName: "Str",
    },
    {
      field: "dexterity",
      flex: 0.3,
      resizable: false,
      headerName: "Dex",
    },
    {
      field: "constitution",
      flex: 0.3,
      resizable: false,
      headerName: "Con",
    },
    {
      field: "wisdom",
      flex: 0.3,
      resizable: false,
      headerName: "Wis",
    },
    {
      field: "intelligence",
      flex: 0.3,
      resizable: false,
      headerName: "Int",
    },
    {
      field: "charisma",
      flex: 0.3,
      resizable: false,
      headerName: "Cha",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <MuiTable
          autoHeight={true}
          columns={columns}
          rows={data.monsters.map((m) => ({ ...m, id: m.url }))}
          onRowDoubleClick={({ id }) => console.log(id)}
        />
      </div>
    </div>
  );
};

export default MonsterList;
