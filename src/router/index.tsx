import { Suspense } from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import PageTransition from 'components/PageTransition'
import ContextProviders from 'context'
import NotFound from 'pages/NotFound'
import theme from 'theme/theme'
import history from 'utils/history'
import routes from './routes'

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReactRouter history={history}>
        <Suspense fallback={<PageTransition />}>
          <ContextProviders>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  {...route}
                  exact={route.exact ?? true}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </ContextProviders>
        </Suspense>
      </ReactRouter>
    </ThemeProvider>
  )
}

export default Router
