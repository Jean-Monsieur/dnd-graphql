import SpellPage from './SpellPage';
import SpellsPage from './SpellsPage';
import { Route, Switch } from 'react-router-dom';
const SpellsRouter = () => (
  <Switch>
    <Route exact path="/spells" component={SpellsPage}></Route>
    <Route path={`/spells/:id`} component={SpellPage}></Route>
  </Switch>
);

export default SpellsRouter;
