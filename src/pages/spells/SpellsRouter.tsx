import { Route, Switch } from "react-router-dom";
import SpellPage from "./SpellPage";
import SpellsPage from "./SpellsPage";
const SpellsRouter = () => (
  <Switch>
    <Route exact path="/spells" component={SpellsPage}></Route>
    <Route path={`/spells/:id`} component={SpellPage}></Route>
  </Switch>
);

export default SpellsRouter;
