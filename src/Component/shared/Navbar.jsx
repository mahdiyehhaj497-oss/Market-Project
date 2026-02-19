
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
export default function Navbar() {

  const {cart} = useContext(CartContext)
  
  
  
    return (
      <>
        <div className=" flex bg-fifth-100 w-260 items-center rounded-2xl mt-4 pb-1 relative border-b-2">
          <div>
            <Link to="/">
              <img
                src="src/assets/easy shop (1).svg"
                className="w-16 h-14 ml-5 mt-2"
              />
            </Link>
          </div>
          <div className="flex ml-auto items-center">
            <ul className="flex text-redd-100 font-bold text-lg gap-4">
              <Link to="/singin">
                <li className=" text-sixth-100 hover:text-xl">Sing In</li>
              </Link>
              <li className=" text-sixth-100 hover:text-2xl"> Contact Us</li>

              <Link to="/product:id">
                <li className=" text-sixth-100 hover:text-2xl">Single Page</li>
              </Link>
              <Link to="/Settelment" className="relative">
                <img
                  className="items-center mr-5 h-8 w-8  hover:text-xl"
                  src="src/assets/iconcart.png"
                />
                <span className="px-2  absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2 rounded-2xl">
                  {cart.length}
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </>
    );
}