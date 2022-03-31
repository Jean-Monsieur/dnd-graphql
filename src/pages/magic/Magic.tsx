import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { PageContainer } from "../../components/page";
import { rootStruct } from "../../rootStruct";

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
