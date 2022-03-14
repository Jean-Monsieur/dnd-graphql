import { BrowserRouter as Routerr, Route, useLocation } from "react-router-dom";
import DiceSelector from "./components/diceSelector/DiceSelector";
import { EquipmentPage } from "./pages/equipment";
import { MonsterPage } from "./pages/monsters";
import { SpellsPage } from "./pages/spells";
import { PATHS } from "./rootStruct";

const getPath = (path: string) => path.replaceAll("/", "");
const Router = () => {
  const x = useLocation();

  console.log(x);
  return (
    <Routerr>
      <Route path={PATHS.MONSTERS} component={MonsterPage} />
      <Route path={PATHS.EQUIPMENT} component={EquipmentPage} />
      <Route path={PATHS.SPELLS} component={SpellsPage} />
      {/* <Route path="/" component={DiceSelector} /> */}
      <Route path={PATHS.HOME}>
        <>home</>
      </Route>
    </Routerr>
  );
};

export default Router;
