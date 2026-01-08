import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import SeePro from "./pages/SeePro";
import SinglePage from "./pages/SinglePage";
import SingIn from "./pages/Sing In";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<SingIn />} />
            <Route path="/product" element={<SeePro />} />
            <Route path="/product/:id" element={<SinglePage/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
