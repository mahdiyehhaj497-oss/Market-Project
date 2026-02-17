
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
export default function Layout({children}) {
    return (
        <>
            <Outlet/>
            {children}
        </>
    )
}