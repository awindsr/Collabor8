import React from "react";

export default function Header() {
  return (
    <div className="w-screen h-[7vh] flex justify-between items-center p-4 ">
      <div className="text-2xl font-poppins font-bold ml-5 cursor-pointer ">
        Collabor8
      </div>
      <div className="w-full  justify-end items-center relative hidden md:flex">
        <ul className="flex absolute left-1/2  transform -translate-x-[50%]">
          <li className="mx-3 cursor-pointer">How it works</li>
          <li className="mx-3 cursor-pointer">Community</li>
          <li className="mx-3 cursor-pointer">News</li>
        </ul>
        <div className="flex space-x-3">
          <button className="bg-green-600 border border-green-500 text-white px-3 py-1  rounded-md hover:bg-green-500 transition duration-200 ease-in-out flex items-center justify-center">
            Sign Up
          </button>
          <button className="bg-white text-green-600 border border-green-500 px-3 py-1  rounded-md hover:bg-green-500 hover:text-white transition duration-200 ease-in-out flex items-center justify-center">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
