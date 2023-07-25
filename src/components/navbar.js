import { useState } from "react";
import profile from "../asset/profile2.png";
import { useActive } from "../utilities/useActive";
import { Link } from "react-router-dom";

export default function NavBar() {
  const currentUser = {
    id: 1,
    userName: "Mitra",
    isSeller: true,
  };

  const [open, setOpen] = useState(false);

  const isActive = useActive();

  return (
    <div
      className={
        !isActive
          ? "flex flex-col justify-center sticky top-0 z-10 transition-all ease-linear duration-500 text-xl  bg-[#013914] text-white "
          : "flex flex-col justify-center sticky top-0 z-10 transition-all ease-linear duration-500 text-xl bg-white text-black"
      }
    >
      <div className="flex flex-row justify-between py-6 px-24">
        <Link to='/' className="text-2xl">
          Fiverr<span className="text-[#1dbf73]">.</span>
        </Link>
        <div className="flex flex-row justify-center gap-x-8 ">
          <Link to='/'>Fiverr Business</Link>
          <Link to='/'>Explor</Link>
          <Link to='/'>English</Link>
          <Link to='/register'>Sign in</Link>
          {!currentUser?.isSeller && <p>Become a Seller</p>}
          {!currentUser && (
            <button
              className={
                !isActive
                  ? "border border-white rounded-md px-4 py-1 text-white hover:bg-[#1dbf73] hover:border-[#1dbf73] cursor-pointer"
                  : "border border-[#1dbf73] rounded-md px-4 py-1 text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white hover:border-[#1dbf73] cursor-pointer"
              }
            >
              Join
            </button>
          )}
          {currentUser && (
            <div className="relative flex flex-row gap-x-2 cursor-pointer">
              <img
                src={profile}
                alt="user profile"
                className="w-10 rounded-full object-cover"
              />
              <p
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {currentUser.userName}
              </p>
              {open && (
                <div className="absolute top-14 right-0 flex flex-col justify-center gap-y-3 w-32 p-2 text-gray-500 text-sm  bg-white rounded-md shadow-md ">
                  {currentUser?.isSeller && (
                    <>
                      <Link to='/gigs'>Gigs</Link>
                      <Link to='/add'>Add New Gig</Link>
                    </>
                  )}
                  <Link to='/orders'>Orders</Link>
                  <Link to='/messages'>Messages</Link>
                  <Link to='/'>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <>
          <hr className="text-gray-800  border-gray-300 border-1" />
          <div className="flex flex-row justify-center gap-x-10 text-gray-800 py-2 text-base">
            <Link to='/'>Graphics & Design</Link>
            <Link to='/'>Digital Marketing</Link>
            <Link to='/'>Writing & Translation</Link>
            <Link to='/'>Video & Animation</Link>
            <Link to='/'>Music & Audio</Link>
            <Link to='/'>Programming & Tech</Link>
            <Link to='/'>Pothography</Link>
            <Link to='/'>Business</Link>
            <Link to='/'>AI Services</Link>
          </div>
        </>
      )}
    </div>
  );
}
