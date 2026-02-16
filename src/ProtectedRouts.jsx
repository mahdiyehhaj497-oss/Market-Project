import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute() {
    const token = useMemo(() => {
      return  localStorage.getItem("token");
    },[]) 
    const navigate = useNavigate()
 
    useEffect(() => {
       if (!token) {
         navigate("/singin");
       } 
    },[])
    
    return <Outlet/>
}