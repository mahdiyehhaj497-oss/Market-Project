import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "../Component/shared/Is Loading";
import Error from "../Component/shared/Error";


export default function SinglePage() {

    const params = useParams()
    const { data, isLoading, isError } = useFetch(
      "https://fakestoreapi.com/products/20"
    );
 
    return (
      <>
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className=" bg-[#A4B1B0] h-screen relative ">
          <div className="flex justify-center items-center">
            <h1 className="mb-auto mt-6 text-2xl font-medium font-serif text-[#4C636D] ">
              {data?.title}
            </h1>
          </div>

          <div className="flex justify-center items-center ">
            <img src={data?.image} className="w-70 mt-6 mb-auto h-auto " />
            <h3 className="w-60 ml-4 text-lg text-white mt-3">
              {data?.description}
            </h3>
          </div>
          <div className="flex justify-center items-center ml-50 ">
            <button className="w-32 h-8 rounded-4xl bg-[#415A76] border border-white  text-xl text-white">
              {data?.price}$
            </button>
            <button className="absolute top-4 right-2 bg-[#FF514B] w-20 h-8 rounded-2xl border border-white text-xl">
              {Math.floor(Math.random() * 100)}%
            </button>
          </div>
        </div>
      </>
    );
}