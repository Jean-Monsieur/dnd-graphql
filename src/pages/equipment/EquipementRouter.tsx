import EquipmentPage from './EquipmentPage';
import ErrorPage from '../../components/error-page/ErrorPage';
import { PageContainer } from '../../components/page';
import { Route, Switch } from 'react-router-dom';
// import ItemPage from "./ItemPage";

const EquipmentRouter = () => (
  <PageContainer>
    <Switch>
      <Route exact path="/equipment" component={EquipmentPage}></Route>
      {/* <Route exact path={`/equipment/:id`} component={ItemPage}></Route> */}
      <Route exact path={`*`}>
        <ErrorPage errorCode={404} />
      </Route>
    </Switch>
  </PageContainer>
);

export default EquipmentRouter;
