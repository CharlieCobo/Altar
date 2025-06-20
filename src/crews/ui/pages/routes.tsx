import type { RouteObject } from 'react-router';

import CrewsList from './crews-list';

export const CREWS_ROUTES: RouteObject = 
{
  path: "/crews",
  children: [
    {
      path: "/crews/list",
      element: <CrewsList />,
    },
  ]
};
