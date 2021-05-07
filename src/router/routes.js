const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout'),
    children: [
      {path: '', name: 'home', component: () => import('pages/Dashboard')},
      {path: '/help', name: 'help', component: () => import('pages/Help')}
    ]
  },
  {
    path: '/inventory',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'inventory_list', component: () => import('pages/inventory/List')},
      {path: 'add', name: 'inventory_add', component: () => import('pages/inventory/Add')},
      {path: 'alert', name: 'inventory_alert', component: () => import('pages/inventory/Alert')},
      {path: 'quantity', name: 'inventory_quantity', component: () => import('pages/inventory/Quantity')},
      {path: 'transaction', name: 'inventory_transaction', component: () => import('pages/inventory/Transaction')},
      {path: 'transaction-history', name: 'inventory_history', component: () => import('pages/inventory/TransactionHistory')},
      {path: 'add-record', name: 'inventory_add_record', component: () => import('pages/inventory/AddHistory')},
      {path: 'transfer', name: 'inventory_transfer', component: () => import('pages/inventory/Transfer')},
    ],
  },
  {
    path: '/locations',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'location_list', component: () => import('pages/locations/List')},
      {path: 'add', name: 'location_add', component: () => import('pages/locations/Add')},
      {path: 'edit', name: 'location_edit', component: () => import('pages/locations/Edit')},
      {path: 'history', name: 'location_history', component: () => import('pages/locations/History')},
    ],
  },
  {
    path: '/products',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'product_list', component: () => import('pages/products/List')},
      {path: 'add', name: 'product_add', component: () => import('pages/products/Add')},
      {path: 'show', name: 'product_show', component: () => import('pages/products/Show')},
      {path: 'edit', name: 'product_edit', component: () => import('pages/products/Edit')},
      {path: 'history', name: 'product_history', component: () => import('pages/products/History')},
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
