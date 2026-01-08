
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <>
        <div className=" flex bg-[#F2EDE7] w-screen items-center">
          <div>
            <Link to="/">
              <img src="src/assets/logo.svg" className="w-16 h-14 ml-5" />
            </Link>
          </div>
          <div className="flex ml-auto items-center">
            <ul className="flex text- font-bold text-lg gap-4">
              <Link to="/about">
                <li className=" text-[#003057] hover:text-xl">Sing In</li>
              </Link>
              <li className=" text-[#003057] hover:text-2xl"> Contact Us</li>

              <Link to="/product/:productId">
                <li className=" text-[#003057] hover:text-2xl">Single Page</li>
              </Link>
              <img
                className="items-center mr-5 h-8 w-8 text-[#003057] hover:text-xl"
                src="src/assets/iconcart.png"
              />
            </ul>
          </div>
        </div>
      </>
    );
}