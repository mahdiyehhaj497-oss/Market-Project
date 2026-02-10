import { ShoppingBasket } from "lucide-react";


export default function Carts({ price,title,description,category,image}) {
    return (
      <>
        <div className=" group  w-full max-w-70 h-90  relative  mx-4 my-6 ">
          <img
            className="w-full h-90 object-contain bg-white rounded-2xl "
            src={image}
          />
          <div
            className="bg-[#031E4260] absolute top-0 left-0 h-full w-full hidden 
           group-hover:flex flex-wrap justify-center items-center text-white p-3 rounded-2xl "
          >
            <button className="absolute top-1 right-2 bg-[#FF514B] w-16 h-10 rounded-2xl border border-white">
              {Math.floor(Math.random() * 100)}%
            </button>
            <span className="text-2xl text-[#F9FBF8] ">{category}</span>
            <span className="text-white text-lg">{title}</span>
            <div>
              <button className="w-32 h-8 rounded-4xl bg-[#031E42] border border-white mt-6 mb-2 text-xl">
                {price}$
              </button>
              <button className="flex justify-center items-center w-32 h-8 rounded-4xl bg-[#031E42] border border-white ">
                <h1 className="text-2xl">+</h1>
                <div className="mx-3 p-3">
                  <ShoppingBasket />
                </div>
                <h1 className="text-3xl">-</h1>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}