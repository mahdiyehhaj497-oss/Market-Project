import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import SeePro from "./pages/SeePro";
import SinglePage from "./pages/SinglePage";
import SingIn from "./pages/Sing In";
import { createContext, useReducer, useState } from "react";
import Settelment from "./pages/Settelment";
import CartReducer from "./reducer/CartReducer";

 export const CartContext=createContext()

export default function App() {
  
  const [cart,cartDispatch]=useReducer(CartReducer,[])
  
  return (
    <>
      <BrowserRouter>
        <Layout>
          <CartContext.Provider value={{ cart, cartDispatch }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<SingIn />} />
              <Route path="/product" element={<SeePro />} />
              <Route path="/product/:id" element={<SinglePage />} />
              <Route path="/Settelment" element={<Settelment />} />
            </Routes>
          </CartContext.Provider>
        </Layout>
      </BrowserRouter>
    </>
  );
}
