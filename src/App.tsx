import { RouterProvider } from 'react-router';
import { APP_ROUTES } from './commons/ui/routes';

function App() {
  return (
    <>
      <RouterProvider router={APP_ROUTES} />
    </>
  );
}

export default App;
