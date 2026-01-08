import { useEffect, useState } from "react";
import Carts from "./Carts";
import Loading from "./shared/Is Loading";


let tmo;
export default function Products() {
  const [searchVal, setSearchVal] = useState("")
  const [filteredPost, setFilteredPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setISError] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setAllPost(data))
      .catch((error) => {
        setISError(true);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  
  useEffect(() => {
    if (tmo) {
      clearTimeout(tmo);
    }
    tmo = setTimeout(() => {
      setFilteredPost(allPost.filter((item) => item.title.includes(searchVal)));
    }, 1000);
  }, [searchVal, allPost]);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <h1> is loading</h1>}
      <div className="  bg-[#2b3c4a] w-screen">
        <div className="flex justify-center items-center">
          <input
            type="text"
            className=" w-96 h-10 rounded-3xl bg-[#C0C0C0] hover:bg-[#D7D7D7]  mt-8 pl-3 border-[#C0C0C8] border-2  text-[#2b3c4a]"
            value={searchVal}
            placeholder="Enter your term"
            onChange={(evt) => setSearchVal(evt.target.value)}
          />
        </div>

        <div className="grid grid-cols-5 gap-4  m-4 ">
          {filteredPost.map((item) => (
            <Carts
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
