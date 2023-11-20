import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const HomeView = () => import('@/views/HomeView.vue');
const ArticleView = () => import('@/views/ArticleView.vue');
const NotFoundView = () => import('@/views/NotFoundView.vue');

export const enum RouteName {
  Home = 'home',
  Article = 'article',
  NotFound = '404'
}

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: RouteName.Home,
    component: HomeView
  },
  {
    path: '/article/:id(\\d+)',
    name: RouteName.Article,
    component: ArticleView
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NotFound,
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '',
  linkExactActiveClass: '',
  routes
});

export default router;
