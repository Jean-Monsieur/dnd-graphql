import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomeIcon from "@mui/icons-material/Home";

import { Breadcrumbs } from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";
import Link, { LinkProps } from "@mui/material/Link";

import { breadcrumbNameMap } from "./utils";
import { getPathIcon } from "../../../theme/getPathIcon";

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

  return (
    <Breadcrumbs aria-label="breadcrumb" maxItems={2} sx={{ flexGrow: 1 }}>
      <LinkRouter variant="h6" underline="hover" color="white" to="/">
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
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
