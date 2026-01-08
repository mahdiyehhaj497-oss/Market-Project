import { CloudAlert } from "lucide-react";

export default function Error() {
    return (
      <>
        <div className=" flex justify-center items-center">
          <div>
            <CloudAlert size={188} color="#af0e0e" strokeWidth={1} />
            <h1>Oops! Something went wrong </h1>
          </div>
        </div>
      </>
    );
}