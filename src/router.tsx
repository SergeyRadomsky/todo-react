// import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import UnderList from './components/UnderList/UnderList';
// import { SVGComponent } from './components/SvgComp';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home/Home';
import Antdpage from './pages/antd-page/Antdpage';

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
          path: '/local-todos',
          element: <TodoList />,
        },
        {
          path: '/api-todos',
          element: <UnderList />,
        },
        {
          path: '/page-antd',
          element: <Antdpage />,
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
