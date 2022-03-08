import { mdiGhost } from "@mdi/js";
import { PathIcons } from "../rootStruct";
import HomeIcon from "@mui/icons-material/Home";
import Icon from "@mdi/react";
import PendingIcon from "@mui/icons-material/Pending";
import BookIcon from "@mui/icons-material/Book";
import BackpackIcon from "@mui/icons-material/Backpack";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import SchoolIcon from "@mui/icons-material/School";

export const getPathIcon = (icon: PathIcons | string) => {
  switch (icon) {
    case PathIcons.HOME:
      return <HomeIcon />;
    case PathIcons.MONSTERS:
      return <Icon path={mdiGhost} size={1} horizontal vertical rotate={180} />;
    case PathIcons.EQUIPMENT:
      return <BackpackIcon />;
    case PathIcons.MAGIC:
      return <BookIcon></BookIcon>;
    case PathIcons.MAGIC_ITEMS:
      return <AutoFixHighIcon />;
    case PathIcons.SPELLS:
      return <OfflineBoltIcon />;
    case PathIcons.MAGIC_SCHOOL:
      return <SchoolIcon />;
    default:
      return <PendingIcon />;
  }
};
