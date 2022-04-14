import HomeIcon from '@mui/icons-material/Home';
import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { breadcrumbNameMap } from './utils';
import { Breadcrumbs } from '@mui/material';
import { getPathIcon } from '../../../theme/getPathIcon';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [{ isMobile }] = useDeviceSelectors(window.navigator.userAgent);

  return (
    <Breadcrumbs aria-label="breadcrumb" maxItems={2} sx={{ flexGrow: 1 }}>
      {!isMobile && (
        <LinkRouter variant="h6" underline="hover" color="white" to="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home
        </LinkRouter>
      )}
      {pathnames.map((value, index) => {
        const last: boolean = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography variant="h6" color="white" key={to}>
            {getPathIcon(to)} {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter
            variant="h6"
            underline="hover"
            color="white"
            to={to}
            key={to}
          >
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
