import { Route, Switch } from "react-router-dom";
import MagicItemPage from "./MagicItemPage";
import MagicItemsTable from "./MagicItemsTable";
const MagicItemsRouter = () => (
  <Switch>
    <Route exact path="/magic-item" component={MagicItemsTable}></Route>
    <Route path={`/magic-item/:id`} component={MagicItemPage}></Route>
  </Switch>
);

export default MagicItemsRouter;
