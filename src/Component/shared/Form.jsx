import { CircleUser } from "lucide-react";


export default function Form() {
    return (
      <>
        <div>
          <div className="flext justify-center mt-auto ml-9">
            <CircleUser size={172} color="#fafafa" strokeWidth={0.5} />
          </div>
          <div className=" text-white  mb-1 ">
            <h1 className="text-2xl ml-2"> Name</h1>
            <input
              className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className=" text-white mt-3 mb-2">
            <h1 className="text-2xl ml-2">Last Name</h1>
            <input
              className="mt-1 p-1.5  pl-5 rounded-2xl w-60 border border-white"
              type="text"
              placeholder=" last Name"
            />
          </div>
          <div className=" text-white mt-4 mb-2">
            <h1 className="text-2xl ml-2"> Email</h1>
            <input
              className="mt-1 p-1.5  pl-5 rounded-2xl w-60 border border-white"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className=" text-white mt-4 mb-2">
            <h1 className="text-2xl ml-2"> Password</h1>
            <input
              className="mt-1 p-1.5  pl-5 rounded-2xl w-60 border border-white"
              type="number"
              placeholder="Password"
            />
          </div>
        </div>
      </>
    );
}
   