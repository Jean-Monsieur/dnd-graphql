import EquipmentPage from './EquipmentPage';
import ItemPage from './ItemPage';
import { PageContainer } from '../../components/page';
import { Route, Switch } from 'react-router-dom';

const EquipmentRouter = () => (
  <PageContainer>
    <Switch>
      <Route exact path="/equipment" component={EquipmentPage}></Route>
      <Route path={`/equipment/:id`} component={ItemPage}></Route>
    </Switch>
  </PageContainer>
);

export default EquipmentRouter;
