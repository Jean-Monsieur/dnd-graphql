import MagicItemPage from "./MagicItemPage";
import MagicItemsTable from "./MagicItemsTable";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../../components/error-page/ErrorPage";
const MagicItemsRouter = () => (
  <Switch>
    <Route exact path="/magic-item" component={MagicItemsTable}></Route>
    <Route exact path={`/magic-item/:id`} component={MagicItemPage}></Route>
    <Route exact path={`*`}>
      <ErrorPage errorCode={404} />
    </Route>
  </Switch>
);

export default MagicItemsRouter;
