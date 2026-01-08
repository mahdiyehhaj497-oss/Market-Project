import { SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Component/shared/Button";

export default function Home() { 
 
    return (
      <>
        <div className="bg-[url('src/assets/shoop.jpg')]  bg-no-repeat bg-cover bg-center w-screen h-screen ">
          <div className=" flex items-center  justify-center">
            <h1 className=" text-white text-9xl font-extrabold font-serif pt-10 ">
              welcom !
            </h1>
          </div>
          <div className=" flex items-center justify-center ">
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