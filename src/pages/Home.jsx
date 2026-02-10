import { SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Component/shared/Button";
import Navbar from "../Component/shared/Navbar";

export default function Home() { 
 
    return (
      <>
        {/* <div className="bg-[url('src/assets/backgrond Gray.jpg')] rounded-3xl bg-no-repeat bg-cover bg-center w-screen h-screen mx-12px mb-40px absolute "> */}
          <div className="bg-third-100 w-screen h-screen">
          <div className=" flex flex-wrap items-center  justify-center">
            <Navbar />
            {/* <h1 className=" text-white text-9xl font-extrabold font-serif pt-10 mt-5 ">
              welcom !
            </h1> */}
          </div>
          <div className=" flex items-center justify-center mt-3.5 ">
            <Link to="/product">
              <Button>
                <div className="flex items-center justify-center space-x-1">
                  <SearchCheck className="w-5 h-5" />
                  <h1>Show Products</h1>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
}