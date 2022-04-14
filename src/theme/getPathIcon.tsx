import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BackpackIcon from '@mui/icons-material/Backpack';
import BookIcon from '@mui/icons-material/Book';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import Icon from '@mdi/react';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import PendingIcon from '@mui/icons-material/Pending';
import SchoolIcon from '@mui/icons-material/School';
import { mdiGhost } from '@mdi/js';
import { PathIcons } from '../rootStruct';

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
    case PathIcons.TOOLS:
      return <BuildIcon />;
    default:
      return <PendingIcon />;
  }
};
