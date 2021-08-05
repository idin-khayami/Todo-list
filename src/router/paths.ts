const paths = {
  taskList: '/',
  notFound: '/not-found',
  taskDetail: (id: number) => `/${id || ':taskId'}`,
};

export default paths;
