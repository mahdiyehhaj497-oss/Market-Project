import { createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout";
// import Home from "./pages/Home";
import SingIn from "./pages/Sing In";
// import SeePro from "./pages/SeePro";
import Settelment from "./pages/Settelment";
import SinglePage from "./pages/SinglePage";
import { lazy } from "react";
import ProtectedRoute from "./protectedRouter";
import AboutUsPage from "c:/Users/lenovo/Desktop/react/007/session-files/007/src/features/about/AboutUsPage";


const Home = lazy(() => import("./pages/Home"));
const SeePro = lazy(() => import("./pages/SeePro"))

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singin",
        element: <SingIn />,
        },
        {
            path: "/about",
            element: <ProtectedRoute />,
            children:[{
                index: true,
                element:<AboutUsPage/>
            }]
        },
      
      {
        path: "/product",
        element: <SeePro />,
        children: [
          {
            path: "id",
            element: <SinglePage />,
          },
        ],
      },
      {
        path: "/Settelment",
        element: <Settelment />,
      }
    ]
  }
]);
export default routes