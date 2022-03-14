import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SpellPage from "./SpellPage";
import SpellsPage from "./SpellsPage";
const SpellsRouter = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Switch>
        <Route exact path="/spells" component={SpellsPage}></Route>
        <Route path={`/spells/:id`} component={SpellPage}></Route>
        {/* <Route path={`${location.pathname}`} element={<SpellsPage />} /> */}
      </Switch>
    </>
  );
};

export default SpellsRouter;
