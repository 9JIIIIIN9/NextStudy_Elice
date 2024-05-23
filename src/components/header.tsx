import React from "react";
import Image from "next/image";
import Logo from "../../public/elliceLogo.png"; // 로고 이미지 경로

export default function Home() {
  return (
    <div className="w-full h-16 bg-white justify-center items-center flex border-b border-solid border-gray-150 fixed top-0 left-0 z-10">
      <div className="w-[1280px] justify-between items-center flex border-none">
        <div className="w-[600px] flex flex-row items-center">
          <div className="w-24 h-9 m-2 relative">
            <Image
              src={Logo}
              alt="page logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="w-96 h-9 m-2 relative justify-between flex">
            <button className=" transition-colors duration-300 rounded hover:shadow-lg ">
              Products
            </button>
            <button className=" transition-colors duration-300 rounded hover:shadow-lg ">
              Solutions
            </button>
            <button className=" transition-colors duration-300 rounded hover:shadow-lg ">
              Resources
            </button>
            <button className=" transition-colors duration-300 rounded hover:shadow-lg ">
              Elice AI
            </button>
          </div>
          <div className="w-30 h-15 relative rounded-md">
            <button className="bg-[#F5F5F5] color-[#191F28]">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
