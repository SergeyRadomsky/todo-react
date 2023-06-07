import { FC } from 'react';
import useRouter from './router';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => {
  const router = useRouter();

  return (
      <RouterProvider router={router} />
  );
};
export default App;
