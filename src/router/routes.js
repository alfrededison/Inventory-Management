const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout'),
    children: [
      {path: '', component: () => import('pages/Dashboard')},
      {path: '/help', component: () => import('pages/Help')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
