import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../App";


export default function Carts({ price, title, description, category, image ,id}) {
  
  const {cart,cartDispatch}= useContext(CartContext)
    return (
      <>
        <div className=" group  w-full max-w-70 h-90  relative  mx-4 my-6 ">
          <img
            className="w-full h-90 object-contain bg-white rounded-2xl "
            src={image}
          />
          <div
            className="bg-mountainblue-100 absolute top-0 left-0 h-full w-full hidden shadow-2xl shadow-darkg-100
           group-hover:flex flex-wrap justify-center items-center text-white p-3 rounded-2xl border-2"
          >
            <button className="absolute top-1 right-2 bg-lightred-100 w-16 h-10 rounded-2xl border border-white">
              {Math.floor(Math.random() * 100)}%
            </button>
            <span className="text-2xl text-[#F9FBF8] ">{category}</span>
            <span className="text-white text-lg">{title}</span>
            <div>
              <button className="w-32 h-8 rounded-4xl bg-mountainblue-100 border border-white mt-6 mb-2 text-xl">
                {price}$
              </button>

              <div className="flex items-center justify-center">
                {cart.find((item) => item.id === id) ? (
                  <button className="p-2 rounded-xl h-10 w-20 bg-redd-100">
                    remove
                  </button>
                ) : (
                  <button
                    onClick={() => cartDispatch({type :"add", payload : id})}
                    className="flex justify-center items-center bg-gren-100 rounded-xl h-10 w-20"
                  >
                    <ShoppingCart />
                    <span>Add</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
;