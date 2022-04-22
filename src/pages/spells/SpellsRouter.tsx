import SpellPage from "./SpellPage";
import SpellsPage from "./SpellsPage";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../../components/error-page/ErrorPage";
const SpellsRouter = () => (
  <Switch>
    <Route exact path="/spells" component={SpellsPage}></Route>
    <Route exact path={`/spells/:id`} component={SpellPage}></Route>
    <Route exact path={`*`}>
      <ErrorPage errorCode={404} />
    </Route>
  </Switch>
);

export default SpellsRouter;
