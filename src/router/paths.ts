const paths = {
  taskList: '/',
  notFound: '/not-found',
  editTask: (id: number): string => `/edit-task/${id || ':taskId'}`,
};

export default paths;
