import React from "react";
import Image from "next/image";
import Logo from "../../public/elliceLogo.png"; // 로고 이미지 경로
import Arrow from "../../public/arrow.svg";
export default function Home() {
  return (
    <div className="w-full h-16 bg-white justify-center items-center flex fixed top-0 left-0 z-10 border-2 border-gray-100 ">
      <ul className="w-[1280px] px-15  items-center flex ">
        <div className="gap-1.5 flex flex-row items-center">
          <div className="w-24 h-9 m-2 relative">
            <Image
              src={Logo}
              alt="page logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <ul className="w-96 h-9 m-2 relative justify-between items-center  flex mr-60">
            <button className=" flex flex-row  transition-colors duration-300 rounded hover:bg-gray-100">
              Products
              <Image src={Arrow} alt="화살표" />
            </button>
            <button className=" flex flex-row transition-colors duration-300 rounded hover:bg-gray-100 ">
              Solutions
              <Image src={Arrow} alt="화살표" />
            </button>
            <button className=" flex flex-row transition-colors duration-300 rounded hover:bg-gray-100 ">
              Resources
              <Image src={Arrow} alt="화살표" />
            </button>
            <button className=" flex flex-row transition-colors duration-300 rounded hover:bg-gray-100 ">
              Elice AI
              <Image src={Arrow} alt="화살표" />
            </button>
          </ul>
          <div className=" h-15 relative">
            <button className="bg-[#7353ea] w-20 h-8  ml-96 rounded-md text-sm text-white">
              상담 요청
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
}
