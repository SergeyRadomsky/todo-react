// import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import UnderList from './components/UnderList/UnderList';
// import { SVGComponent } from './components/SvgComp';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home/Home';
// import Antdpage from './pages/antd-page/Antdpage';
import LoginComp from './components/LoginComp/LoginComp';
import RequireAuth from './hoc/RequireAuth';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/Home',
          element: <Home />,
        },
        {
          path: '/api-todos',
          element: <UnderList />,
        },
        {
          path: '/local-todos',
          element: (
            <RequireAuth >
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

  // const useRouter = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         {/* <Route path="logoSVG/:logoSVG" element={<SVGComponent />} /> */}
  //         <Route path="/" element={<App />} />
  //         <Route path="/local-todos" element={<TodoList />} />
  //         <Route path="/api-todos" element={<UnderList />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // };

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
//           path: '/local-todos',
//           element: <TodoList />,
//         },
//         {
//           path: '/api-todos',
//           element: <UnderList />,
//         },
//         // {
//         //   path: '/page-antd',
//         //   element: <Antdpage />,
//         // },
//         // {
//         //   path: '/login',
//         //   element: <LoginComp />,
//         // },

//       ],
//     },
//   ]);

// // const useRouter = () => {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* <Route path="logoSVG/:logoSVG" element={<SVGComponent />} /> */}
// //         <Route path="/" element={<App />} />
// //         <Route path="/local-todos" element={<TodoList />} />
// //         <Route path="/api-todos" element={<UnderList />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // };

// return router;
// };
// export default useRouter;
