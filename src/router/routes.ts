import NotFound from '../pages/NotFound';
import TaskDetail from '../pages/TaskDetail';
import TaskList from '../pages/TaskList';
import paths from './paths';

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
