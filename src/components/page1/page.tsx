import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export default function Home() {
  return (
    <main className="w-[1920px] h-[492px] flex min-h-96 flex-col items-center justify-center mb-40 bg-[#eef8ff]">
      <div className="w-[1920px] flex-col flex justify-center items-center ">
        <section className="relative">
          <video
            className="w-[1920px]  h-[492px] "
            src="https://cdn-front-door.elice.io/landing/static/video/elice_landing_0120.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          ></video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
            <text className="font-extrabold text-6xl pt-12 ">
              디지털 전환을 위한
            </text>
            <br />
            <text className="font-extrabold text-6xl  text-transparent bg-clip-text bg-gradient-to-b from-[#6700E6] via-purple-500 to-purple-[#B67BFF]">
              올인원 솔루션
            </text>
            <br />
            <text className="text-black text-sm">
              엘리스에서는 교육,평가,데이터까지 DX에 필요한 모든 솔루션을
              제공합니다.
            </text>
            <br />
            <button className="h-[40px] w-[120px] bg-[#7353ea] text-white rounded-md">
              상담 요청하기
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
