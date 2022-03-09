import { BrowserRouter as Routerr, Route } from "react-router-dom";
import DiceSelector from "./components/diceSelector/DiceSelector";
import { EquipmentPage } from "./pages/equipment";
import { MonsterPage } from "./pages/monsters";
import { SpellsPage } from "./pages/spells";
import { PATHS } from "./rootStruct";

const Router = () => {
  return (
    <Routerr>
      <Route exact path="/" component={DiceSelector} />
      <Route exact path={PATHS.HOME}>
        <>home</>
      </Route>
      <Route exact path={PATHS.MONSTERS} component={MonsterPage} />
      <Route exact path={PATHS.EQUIPMENT} component={EquipmentPage} />
      <Route exact path={PATHS.SPELLS} component={SpellsPage} />
    </Routerr>
  );
};

export default Router;
