import { useEffect, useMemo } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Cookies from "js-cookie";

export default function ProtectedRoute() {
    const token = useMemo(() => {
      return  Cookies.get("token");
    },[]) 
    const navigate = useNavigate()
 
    useEffect(() => {
       if (!token) {
         navigate("/singin");
       } 
    },[])
    
    return <Outlet/>
}