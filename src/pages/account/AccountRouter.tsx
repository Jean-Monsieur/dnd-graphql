import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../../components/error-page/ErrorPage";
import ProfilePage from "./ProfilePage";
const AccountRouter = () => (
  <Switch>
    <Route exact path="/profile" component={ProfilePage}></Route>
    <Route exact path={`*`}>
      <ErrorPage errorCode={404} />
    </Route>
  </Switch>
);

export default AccountRouter;
