import type { RouteObject } from 'react-router';

import Schedule from './schedule';

export const BAND_ROUTES: RouteObject = {
  path: '/band',
  children: [
    {
      index: true,
      element: <Schedule />,
    },
  ],
};
