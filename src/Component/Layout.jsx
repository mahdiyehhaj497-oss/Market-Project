
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
export default function Layout({children}) {
    return (
        <>
            
        <Outlet />
       {children}
    
      </>
    );
}