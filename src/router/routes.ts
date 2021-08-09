import { lazy } from 'react'
import paths from './paths'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const EditTask = lazy(() => import('../pages/EditTask'))

const routes = [
  {
    component: Home,
    path: paths.home,
  },
  {
    component: NotFound,
    path: paths.notFound,
    exact: false,
  },
  {
    component: EditTask,
    path: paths.editTask,
  },
]

export default routes
