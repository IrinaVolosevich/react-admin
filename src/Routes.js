import React, {lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { WithLayoutRoute } from './routers';
import AdminLayout from './layouts/AdminLayout';

//Admin
const CinemaList = lazy(() => import('./pages/Admin/CinemaList'));
const AddCinema = lazy(() => import('./pages/Admin/AddCinema'));

const Routes = () => {
  return (
      <Suspense fallback={<h1>help</h1>}>
        <Router>
          <Switch>
            <WithLayoutRoute
                exact
                path="/admin/cinemas"
                layout={AdminLayout}
                component={CinemaList}
            />
            <WithLayoutRoute
                exact
                path="/admin/cinemas/add"
                layout={AdminLayout}
                component={AddCinema}
            />
            <Route path="*" component={() => '404 NOT FOUND'} />
          </Switch>
        </Router>
      </Suspense>
  );
};

export default Routes;