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
    path: '/customers',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'customer_list', component: () => import('pages/customers/List')},
      {path: 'add', name: 'customer_add', component: () => import('pages/customers/Add')},
      {path: 'show', name: 'customer_show', component: () => import('pages/customers/Show')},
      {path: 'edit', name: 'customer_edit', component: () => import('pages/customers/Edit')},
      {path: 'history', name: 'customer_history', component: () => import('pages/customers/History')},
    ],
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
  {
    path: '/purchases',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'purchase_list', component: () => import('pages/purchases/List')},
      {path: 'add', name: 'purchase_add', component: () => import('pages/purchases/Add')},
      {path: 'show', name: 'purchase_show', component: () => import('pages/purchases/Show')},
      {path: 'edit', name: 'purchase_edit', component: () => import('pages/purchases/Edit')},
      {path: 'history', name: 'purchase_history', component: () => import('pages/purchases/History')},
    ],
  },
  {
    path: '/sales',
    component: () => import('layouts/MasterLayout'),
    children: [
      {path: '', name: 'sale_list', component: () => import('pages/sales/List')},
      {path: 'add', name: 'sale_add', component: () => import('pages/sales/Add')},
      {path: 'show', name: 'sale_show', component: () => import('pages/sales/Show')},
      {path: 'edit', name: 'sale_edit', component: () => import('pages/sales/Edit')},
      {path: 'history', name: 'sale_history', component: () => import('pages/sales/History')},
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
