import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import SeePro from "./pages/SeePro";
import SinglePage from "./Component/SinglePage";
import SingIn from "./pages/Sing In";
import { createContext, useReducer } from "react";
import Settelment from "./pages/Settelment";
import CartReducer from "./reducer/CartReducer";
import routes from "../router";

export const CartContext = createContext();

export default function App() {
  const [cart, cartDispatch] = useReducer(CartReducer, []);

  return (
    <>
      <Layout>
        <CartContext.Provider value={{ cart, cartDispatch }}>
          <RouterProvider router={routes} />
        </CartContext.Provider>
      </Layout>
    </>
  );
}

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/singin" element={<SingIn />} />
    <Route path="/product" element={<SeePro />} />
    <Route path="/product/:id" element={<SinglePage />} />
    <Route path="/Settelment" element={<Settelment />} />
  </Routes>
  ;
</BrowserRouter>;
