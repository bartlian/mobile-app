import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = () => import('@/view/Index');
const Scenery = () => import('@/view/Scenery');
const SceneryDetails = () => import('@/view/SceneryDetails');
const SceneryAlbum = () => import('@/view/SceneryAlbum');
const Mine = () => import('@/view/Mine');
const Login = () => import('@/view/Login');
const NotFoundView = () => import('@/view/NotFoundView');

const router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', component: Index },
    { path: '/mine', component: Mine },
    {
      path: '/scenery', component: Scenery,
    },
    {
      path: '/scenery/sceneryDetails', component: SceneryDetails
    },
    {
      path: '/scenery/sceneryAlbum', component: SceneryAlbum
    },
    {
      path: '/login', component: Login
    },
    {
      path: '*',
      component: NotFoundView,
    },
  ]
});

export default router;