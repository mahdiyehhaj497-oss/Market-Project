export default function Footer() { 
    return (
      <>
        <div className="w-full h-30 flex justify-center items-center bg-black text-white">
          <div className="my-4">
            <ul>
              <h1 className="text-xl font-semibold">Get to Know Us</h1>
              <li>Caree</li>
              <li>Blog</li>
              <li>Easy Service</li>
            </ul>
          </div>
          <div className="my-4">
            <ul>
              <h1 className="text-xl font-semibold my-1 bg-r">
                Make Money with Us
              </h1>
              <li>Become an Affiliate</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
            </ul>
          </div>
          <div className="my-4">
            <ul>
              <h1 className="text-xl font-semibold">Let Us Help You</h1>
              <li>Your Orders</li>
              <li>Your Account</li>
              <li>Returns & Replacements</li>
            </ul>
          </div>
        </div>
      </>
    );
}