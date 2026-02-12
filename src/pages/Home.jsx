import { SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Component/shared/Button";
import Navbar from "../Component/shared/Navbar";

export default function Home() { 
 
    return (
      <>
        {/* <div className="bg-[url('src/assets/backgrond Gray.jpg')] rounded-3xl bg-no-repeat bg-cover bg-center w-screen h-screen mx-12px mb-40px absolute "> */}
        <div className="bg-cream-100 w-screen h-screen ">
          <div className=" flex items-center  justify-center">
            <Navbar />
            {/* <h1 className=" text-white text-9xl font-extrabold font-serif pt-10 mt-5 ">
              welcom !
            </h1> */}
          </div>
          <div className=" flex justify-center  ">
            <div>
              <h1 className="mt-8 text-4xl font-bold font-serif">
                LET`S CREATE
                <br /> YOUR OWN STYLE
              </h1>
              <div className="flex justify-center items-center mt-8">
                <Link to="/product">
                  <button className="p-3 rounded-2xl bg-lightg-100 font-bold text-redd-100">show products</button>
                </Link>
              </div>
            </div>

            
              <img
                src="src/assets/MacBook Air - 1 (2).jpg"
                alt=""
                className=" mt-7 "
              />
            
          </div>
        </div>
      </>
    );
}