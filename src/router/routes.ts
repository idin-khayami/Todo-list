import paths from './paths';
import TaskList from '../pages/TaskList';
import TaskDetail from '../pages/TaskDetail';
import NotFound from '../pages/NotFound';

const routes = [
  {
    component: TaskList,
    path: paths.taskList,
    exact: true,
  },
  {
    component: NotFound,
    path: paths.notFound,
  },
  {
    component: TaskDetail,
    path: paths.taskDetail(0),
    exact: true,
  },
];

export default routes;
