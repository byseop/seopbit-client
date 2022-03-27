import { PathRouteProps } from 'react-router-dom';

import DefaultLayout from '@components/Layouts/DefaultLayout';
import Home from '@components/Home';

const routes: PathRouteProps[] = [
  {
    path: '/home',
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    )
  },
  {
    path: '/exchange'
  }
];

export default routes;
