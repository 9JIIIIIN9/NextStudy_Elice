import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import DashBoardImg from "../../../public/favicon.webp";
import DashBoardImg2 from "../../../public/favicon2.webp";
import DashBoardImg3 from "../../../public/favicon3.webp";

export default function Page3() {
  return (
    <div>
      <div className="w-[1400px] h-[700px] p-t-[80px] p-b-[80px] m-l-auto m-r-auto grid-col-58fr flex flex-row mb-[20px]">
        <Image
          className="w-[600px] h-[700px] m-r-[20px] rounded-lg mr-[50px] "
          src={DashBoardImg}
          alt="첫 이미지"
        ></Image>
        <div className="w-[600px] min-h-10 flex flex-col ">
          <text
            className="w-[140px] px-3 py-2 rounded-lg inline-block"
            style={{ color: "##7353ea", backgroundColor: "#eeeafe" }}
          >
            학습 경험 플랫폼
          </text>
          <text className="font-bold text-4xl pt-12 ">
            학습의 몰입도를 높이는
            <br /> 올인원 교육 플랫폼
          </text>
          <text className=" text-xl pt-12 ">
            실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지, <br />
            학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요.
          </text>
          <div className="mt-[32px]"></div>
        </div>
      </div>

      <div className="w-[1400px] h-[700px] p-t-[80px] p-b-[80px] m-l-auto m-r-auto grid-col-58fr flex flex-row mb-[20px]">
        <div className="w-[600px] min-h-10 flex flex-col ">
          <text
            className="w-[140px] px-3 py-2 rounded-lg inline-block"
            style={{ color: "##039be5", backgroundColor: "#e1f5fe" }}
          >
            교육 콘텐츠 관리{" "}
          </text>
          <text className="font-bold text-4xl pt-12 ">
            학습의 몰입도를 높이는
            <br /> 올인원 교육 플랫폼
          </text>
          <text className=" text-xl pt-12 ">
            실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지, <br />
            학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요.
          </text>
          <div className="mt-[32px]"></div>
        </div>
        <Image
          className="w-[600px] h-[700px] m-r-[20px] rounded-lg mr-[50px] "
          src={DashBoardImg2}
          alt="첫 이미지"
        ></Image>
      </div>

      <div className="w-[1400px] h-[700px] p-t-[80px] p-b-[80px] m-l-auto m-r-auto grid-col-58fr flex flex-row">
        <Image
          className="w-[600px] h-[700px] m-r-[20px] rounded-lg mr-[50px] "
          src={DashBoardImg3}
          alt="첫 이미지"
        ></Image>
        <div className="w-[600px] min-h-10 flex flex-col ">
          <text
            className="w-[140px] px-3 py-2 rounded-lg inline-block"
            style={{ color: "#3539DF", backgroundColor: "#a6a6c9" }}
          >
            디지털 역량 평가{" "}
          </text>
          <text className="font-bold text-4xl pt-12 ">
            학습의 몰입도를 높이는
            <br /> 올인원 교육 플랫폼
          </text>
          <text className=" text-xl pt-12 ">
            실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지, <br />
            학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요.
          </text>
          <div className="mt-[32px]"></div>
        </div>
      </div>
    </div>
  );
}
