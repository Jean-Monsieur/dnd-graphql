import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SpellsPage from "./SpellsPage";
const SpellsRouter = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Switch>
        <Route exact path={`/:id`}>
          <>
            homehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehome
          </>
        </Route>
        <Route path="/" component={SpellsPage}></Route>
        {/* <Route path={`${location.pathname}`} element={<SpellsPage />} /> */}
      </Switch>
    </>
  );
};

export default SpellsRouter;
