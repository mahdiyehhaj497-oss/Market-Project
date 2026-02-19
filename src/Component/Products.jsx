import { useEffect, useState } from "react";
import Carts from "./Carts";
import Loading from "./shared/Is Loading";
import Navbar from "./shared/Navbar";

import useGetProduct from "../hooks/useGetProduct";
import { Button } from "../components/ui/button";
import BaseModal from "../core/baseModal";
import SmallForm from "./shared/smallForm";


let tmo;
export default function Products() {
  const [searchVal, setSearchVal] = useState("")
  const [filteredPost, setFilteredPost] = useState([]);
  // const [allPost, setAllPost] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setISError] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setAllPost(data))
  //     .catch((error) => {
  //       setISError(true);
  //       setError(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);
  const[modalOpen,setModalOpen]=useState(true)
  const{data,isLoading,isError}=useGetProduct()
  
  useEffect(() => { 
    if (data?.data) {
      setFilteredPost(data.data)
    }
  }, [data])
  useEffect(() => {
    if (tmo) {
      clearTimeout(tmo);
    }
    tmo = setTimeout(() => {
      setFilteredPost((data?.data || []).filter((item) => item.title.includes(searchVal)));
    }, 1000);
  }, [searchVal, data]);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <h1> error</h1>}
      <div className="  bg-cream-100 w-screen">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center items-center ">
          <input
            type="text"
            className=" w-96 h-10 rounded-3xl bg-graylight-100 hover:bg-[#D7D7D7]  mt-8 pl-3 border-[#C0C0C8] border-2  text-[#2b3c4a]"
            value={searchVal}
            placeholder="Enter your term"
            onChange={(evt) => setSearchVal(evt.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 gap-2    ">
          {filteredPost.map((item) => (
            <Carts
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}
