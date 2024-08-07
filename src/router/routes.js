const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'register', component: () => import('src/pages/RegisterPage.vue') },
      { path: 'login', component: () => import('src/pages/LoginPage.vue') },
      { path: 'registered', component: () => import('src/pages/Finished-Register.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
