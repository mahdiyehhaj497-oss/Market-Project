import { createBrowserRouter } from "react-router-dom";
// import Home from "./src/pages/Home";
import SingIn from "./src/pages/Sing In";
import SeePro from "./src/pages/SeePro";
import Settelment from "./src/pages/Settelment";
import Layout from "./src/Component/Layout";
import SinglePage from "./src/Component/SinglePage";
import ProtectedRoute from "./src/ProtectedRouts";
import AdminPage from "./src/Component/AdminPanel";
import { lazy } from "react";
import AdminPanel from "./src/Component/AdminPanel";

const Home = lazy(() => import("./src/pages/Home"));

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
        path: "/product",
        element: <SeePro />,
        children: [
          {
            path: ":id",
            element: <SinglePage />,
          },
        ],
      },
      {
        path: "/admin-panel",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <AdminPanel />,
          },
        ],
      },
      {
        path: "/Settelment",
        element: <Settelment />,
      },
    ],
  },
]);

export default routes;
