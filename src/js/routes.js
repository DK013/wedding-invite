
import HomePage from '../pages/home.jsx';
import ContentPage from '../pages/content.jsx';
import SplashPage from '../pages/splash.jsx';

var routes = [
  {
    path: '/',
    component: SplashPage,
  },
  {
    path: '/home',
    component: HomePage,
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/inside',
    component: ContentPage,
    options: {
      transition: 'f7-circle',
    },
  }
];

export default routes;
