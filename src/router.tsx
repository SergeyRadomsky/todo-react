import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { SVGComponent } from './components/SvgComp';
import TodoList from './components/TodoList/TodoList';
import UnderList from './components/UnderList/UnderList';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: 'logoSVG/:logoSVG',
          element: <SVGComponent />,
        },
        {
          path: 'TodoList/:TodoList',
          element: <TodoList />,
        },
        {
          path: 'TodoListAPI/:TodoListAPI',
          element: <UnderList />,
        },
      ],
    },
  ]);

  return router;
};
export default useRouter;
