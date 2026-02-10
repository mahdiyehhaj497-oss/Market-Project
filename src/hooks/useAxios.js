import axios from "axios";
import { useEffect, useState } from "react";
export default function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const[isError,setIsError]=useState(false)
    useEffect(() => {
//         async function callApi() {
//     const result=await axios.get(url)
// }

// callApi()
        axios.get(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch((error) => {
                setIsError(true)
                setError(error)
            })
        .finally(()=>setIsLoading(false))
},[url])
    return{data,isLoading,isError,error}
}