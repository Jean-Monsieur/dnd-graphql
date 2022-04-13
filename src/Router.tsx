import { Fade } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { EquipmentPage } from "./pages/equipment";
import { MagicItemsPage } from "./pages/magic-item";
import Magic from "./pages/magic/Magic";
import { MonsterPage } from "./pages/monsters";
import { SpellsPage } from "./pages/spells";
import { ToolsPage } from "./pages/tools";
import { PATHS } from "./rootStruct";

const Router = () => {
  return (
    <Fade>
      <Switch>
        <Route path={PATHS.MONSTERS} component={MonsterPage} />
        <Route path={PATHS.EQUIPMENT} component={EquipmentPage} />
        <Route path={PATHS.MAGIC} component={Magic} />
        <Route path={PATHS.MAGIC_ITEMS} component={MagicItemsPage} />
        <Route path={PATHS.SPELLS} component={SpellsPage} />
        <Route path={PATHS.TOOLS} component={ToolsPage} />
        <Route path={PATHS.HOME}>
          <>home</>
        </Route>
      </Switch>
    </Fade>
  );
};

export default Router;
