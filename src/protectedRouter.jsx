import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    const token = useMemo(() => {
        return localStorage.setItem("token")
    }, [])
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!token) {
         navigate("/singin")
     }
    }, [])
    return <Outlet/>
}