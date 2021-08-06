import { lazy } from 'react';
import paths from './paths';

const Home = lazy(() => import('../pages/home'));
const NotFound = lazy(() => import('../pages/not-found'));
const EditTask = lazy(() => import('../pages/edit-task'));

const routes = [
  {
    component: Home,
    path: paths.taskList,
  },
  {
    component: NotFound,
    path: paths.notFound,
    exact: false,
  },
  {
    component: EditTask,
    path: paths.editTask(0),
  },
];

export default routes;
