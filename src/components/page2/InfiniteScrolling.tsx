import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import NC from "../../../public/nc.webp";
import Posco from "../../../public/posco.webp";
import LG from "../../../public/lg_ensol.webp";
import KCC from "../../../public/kcc.webp";

export default function InfiniteScrolling() {
  const flowText = keyframes`
       0%{
     
     transform: translateX(100%);
   }
   100%{


     transform: translateX(-100%);
   }
    `;
  const flowTextReverse = keyframes`
      0%{
    
    transform: translateX(-100%);
  }
  100%{


    transform: translateX(100%);
  }
   `;
  const AnimatedText2 = styled.span`
    display: inline-block;
    animation: ${flowText} 8s linear infinite;
    color: #912626;
    font-size: 20px;
    white-space: nowrap;
  `;
  const AnimatedImgContainer = styled.div`
    display: flex;
    animation: ${flowText} 8s linear infinite;
    flex-direction: row;
  `;
  const AnimatedImgContainerR = styled.div`
    display: flex;
    animation: ${flowTextReverse} 8s linear infinite;
    flex-direction: row;
  `;
  const Container = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-top: 3rem;
    flex-direction: column;
  `;

  return (
    <div className="flex min-h-28 flex-col items-center justify-center">
      <text className="text-black text-3xl font-extrabold">
        엘리스와 함께한 고객
      </text>

      <Container>
        <AnimatedImgContainer>
          <Image src={KCC} alt="page logo" />
          <Image src={Posco} alt="page logo" />
          <Image src={LG} alt="page logo" />
          <Image src={NC} alt="page logo" />

          <Image src={KCC} alt="page logo" />
          <Image src={Posco} alt="page logo" />
          <Image src={LG} alt="page logo" />
          <Image src={NC} alt="page logo" />
        </AnimatedImgContainer>
        <AnimatedImgContainerR>
          <Image src={KCC} alt="page logo" />
          <Image src={Posco} alt="page logo" />
          <Image src={LG} alt="page logo" />
          <Image src={NC} alt="page logo" />

          <Image src={KCC} alt="page logo" />
          <Image src={Posco} alt="page logo" />
          <Image src={LG} alt="page logo" />
          <Image src={NC} alt="page logo" />
        </AnimatedImgContainerR>
        <AnimatedText2>Hellloooo</AnimatedText2>
      </Container>
    </div>
  );
}
