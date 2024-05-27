"use client";
import Image from "next/image";
import Logo from "../../public/elliceLogo.png"; // 로고 이미지 경로

export default function signin() {
  return (
    <div className="w-100% mw-21rem mx-auto">
      <div className="w-24 h-9 m-2 relative">
        <Image
          src={Logo}
          alt="page logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
