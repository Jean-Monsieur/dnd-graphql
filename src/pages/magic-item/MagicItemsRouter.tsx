import MagicItemPage from './MagicItemPage';
import MagicItemsTable from './MagicItemsTable';
import { Route, Switch } from 'react-router-dom';
const MagicItemsRouter = () => (
  <Switch>
    <Route exact path="/magic-item" component={MagicItemsTable}></Route>
    <Route path={`/magic-item/:id`} component={MagicItemPage}></Route>
  </Switch>
);

export default MagicItemsRouter;
