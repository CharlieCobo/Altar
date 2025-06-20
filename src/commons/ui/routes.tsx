import { createBrowserRouter } from 'react-router';

import AppLayout from './layouts/app';
import { BAND_ROUTES } from '../../band/ui/pages/routes';
import { CREWS_ROUTES } from '../../crews/ui/pages/routes';

export const ALL_ROUTES = [
  {
    path: '/',
    element: <AppLayout />,
    children: [CREWS_ROUTES, BAND_ROUTES],
  },
];

export const APP_ROUTES = createBrowserRouter(ALL_ROUTES);
