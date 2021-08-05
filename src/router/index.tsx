import { Suspense } from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen';
import NotFound from '../pages/NotFound';
import history from '../utils/history';
import routes from './routes';

const Router = () => {
  return (
    <ReactRouter history={history}>
      <Suspense fallback={<SplashScreen />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} exact={route.exact ?? true} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ReactRouter>
  );
};

export default Router;
