import TodoList from './components/TodoList/TodoList';
import UnderList from './components/UnderList/UnderList';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home/Home';
import LoginComp from './components/LoginComp/LoginComp';
import RequireAuth from './hoc/RequireAuth';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        {
          path: '/Home',
          element: <Home />,
          children: [
            {
              path: 'lists',
              element: <Home />,
            },
          ],
        },
        {
          path: '/api-todos',
          element: <UnderList />,
        },
        {
          path: '/local-todos',
          element: (
            <RequireAuth>
              <TodoList />
            </RequireAuth>
          ),
        },
        {
          path: '/login',
          element: <LoginComp />,
        },
      ],
    },
  ]);

  return router;
};
export default useRouter;

// // import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
// // import { BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom';
// import TodoList from './components/TodoList/TodoList';
// import UnderList from './components/UnderList/UnderList';
// // import { SVGComponent } from './components/SvgComp';
// import { createBrowserRouter } from 'react-router-dom';
// import Layout from './layout';
// import Home from './pages/Home/Home';
// // import Antdpage from './pages/antd-page/Antdpage';
// import LoginComp from './components/LoginComp/LoginComp';
// import RequireAuth from './hoc/RequireAuth';

// const useRouter = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '/Home',
//           element: <Home />,
//         },
//         {
//           path: '/api-todos',
//           element: <UnderList />,
//         },
//         {
//           path: '/local-todos',
//           element: (
//             <RequireAuth >
//               <TodoList />
//             </RequireAuth>
//           ),
//         },
//         {
//           path: '/login',
//           element: <LoginComp />,
//         },
//       ],
//     },
//   ]);

//   return router;
// };
// export default useRouter;
