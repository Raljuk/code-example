import { EXPLORE, FAQ, HOME } from 'defaults';
import Home from 'pages/Home';
import Explore from 'pages/Explore';
import Faq from 'pages/FAQ';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: HOME,
  },
  {
    path: '/index',
    component: Home,
    exact: true,
    name: HOME,
  },
  {
    path: '/explore/:page?',
    component: Explore,
    exact: true,
    name: EXPLORE,
  },
  {
    path: '/faq',
    component: Faq,
    exact: true,
    name: FAQ,
  },
];

export default routes;
