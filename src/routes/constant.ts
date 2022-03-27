import { PathRouteProps } from 'react-router-dom';

import Home from '@components/Home';

const routes: PathRouteProps[] = [
  {
    path: '/home',
    element: Home()
  }
];

export default routes;
