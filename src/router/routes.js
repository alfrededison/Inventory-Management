const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout'),
    children: [
      {path: '', component: () => import('pages/Dashboard')},
      {path: '/help', component: () => import('pages/Help')}
    ]
  },
  {
    path: '/customers',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/customers/List')},
      {path: 'add', component: () => import('pages/customers/Add')},
      {path: 'show', component: () => import('pages/customers/Show')},
      {path: 'edit', component: () => import('pages/customers/Edit')},
      {path: 'history', component: () => import('pages/customers/History')},
    ],
  },
  {
    path: '/inventory',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/inventory/List')},
      {path: 'add', component: () => import('pages/inventory/Add')},
      {path: 'alert', component: () => import('pages/inventory/Alert')},
      {path: 'quantity', component: () => import('pages/inventory/Quantity')},
      {path: 'transaction', component: () => import('pages/inventory/Transaction')},
      {path: 'transaction-history', component: () => import('pages/inventory/TransactionHistory')},
      {path: 'add-record', component: () => import('pages/inventory/AddHistory')},
      {path: 'transfer', component: () => import('pages/inventory/Transfer')},
    ],
  },
  {
    path: '/locations',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/locations/List')},
      {path: 'add', component: () => import('pages/locations/Add')},
      {path: 'edit', component: () => import('pages/locations/Edit')},
      {path: 'history', component: () => import('pages/locations/History')},
    ],
  },
  {
    path: '/products',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/products/List')},
      {path: 'add', component: () => import('pages/products/Add')},
      {path: 'show', component: () => import('pages/products/Show')},
      {path: 'edit', component: () => import('pages/products/Edit')},
      {path: 'history', component: () => import('pages/products/History')},
    ],
  },
  {
    path: '/purchases',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/purchases/List')},
      {path: 'add', component: () => import('pages/purchases/Add')},
      {path: 'show', component: () => import('pages/purchases/Show')},
      {path: 'edit', component: () => import('pages/purchases/Edit')},
      {path: 'history', component: () => import('pages/purchases/History')},
    ],
  },
  {
    path: '/sales',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', component: () => import('pages/sales/List')},
      {path: 'add', component: () => import('pages/sales/Add')},
      {path: 'show', component: () => import('pages/sales/Show')},
      {path: 'edit', component: () => import('pages/sales/Edit')},
      {path: 'history', component: () => import('pages/sales/History')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
