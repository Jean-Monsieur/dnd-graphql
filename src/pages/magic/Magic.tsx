import { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";
import MonsterTableContainer from "../../components/monster";
import { PageContainer } from "../../components/page";
import { PathCategory, rootStruct } from "../../rootStruct";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getPathIcon } from "../../theme/getPathIcon";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Magic: FunctionComponent = () => {
  const style = {
    "&:hover": {
      color: "red",
      textDecoration: "none",
    },
    "&:visited": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:active": {
      color: "inherit",
      textDecoration: "none",
    },
  };

  return (
    <PageContainer>
      <>
        <List>
          {rootStruct.map(({ id, name, iconName, path }) => (
            <ListItem key={id} component={Link} to={path} sx={style}>
              <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
              <ListItemText color="white" primary={name} />
            </ListItem>
          ))}
        </List>
      </>
    </PageContainer>
  );
};

export default Magic;
