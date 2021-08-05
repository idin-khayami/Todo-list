import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import history from '../utils/history';
import routes from './routes';

const Router = () => {
  return (
    <ReactRouter history={history}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} exact={route.exact ?? true} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </ReactRouter>
  );
};

export default Router;
