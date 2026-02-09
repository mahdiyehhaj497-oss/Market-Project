import { CircleUser } from "lucide-react";


export default function Form() {
    return (
      <>
        <div>
          <div className="flext justify-center mt-auto ml-9">
            <CircleUser size={172} color="#fafafa" strokeWidth={0.5} />
          </div>
          <form action="">

          </form>
          <div className=" text-white  mb-1 ">
            <label className="text-2xl ml-2"> Name</label>
            <input
              className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
              type="text"
              placeholder="Name"
            />
          </div>
          
        </div>
      </>
    );
}
   