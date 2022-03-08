import { mdiGhost } from "@mdi/js";
import { PathIcons } from "../rootStruct";
import HomeIcon from "@mui/icons-material/Home";
import Icon from "@mdi/react";
import PendingIcon from "@mui/icons-material/Pending";

export const getPathIcon = (icon: PathIcons | string) => {
  switch (icon) {
    case PathIcons.HOME:
      return <HomeIcon />;
    case PathIcons.MONSTERS:
      return <Icon path={mdiGhost} size={1} horizontal vertical rotate={180} />;
    default:
      return <PendingIcon />;
  }
};
