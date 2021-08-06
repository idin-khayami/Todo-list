import EditTask from '../pages/edit-task';
import Home from '../pages/home/home';
import NotFound from '../pages/not-found';
import paths from './paths';

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
