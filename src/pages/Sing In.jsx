import Form from "../Component/shared/Form";

export default function SingIn() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-[#1B1F3A]  to-[#E1BF78] flex items-center justify-center mt-auto">
        <div className="mb-auto mt-4">
          <Form />
          <h1 className="text-white font-light ml-10 text-lg mt-10">Forget Password?</h1>
          <button className="w-60 h-10 rounded-3xl text-black bg-white  mt-4">Create new account</button>
        </div>
      </div>
    </>
  );
}
