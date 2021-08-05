const paths = {
  taskList: '/',
  notFound: '/not-found',
  taskDetail: (id: number): string => `/${id || ':taskId'}`,
};

export default paths;
