import Image from "next/image";
import { Inter } from "next/font/google";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const inter = Inter({ subsets: ["latin"] });
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      let elems = document.getElementsByClassName("fadeIn1");
      for (let i in elems) {
        gsap.from(elems[i], {
          y: 400,
          ease: "power4.inOut",
          duration: 2,
        });
      }
      gsap.from(document.getElementById("title"), {
        opacity: 0,
        duration: 2
      })
    },
    { scope: container }
  );
  // const { scroll } = useLocomotiveScroll()
  return (
    <div className="flex py-8 overflow-hidden h-[200vh]" data-scroll-container>
      <div
        id="background"
        className="w-screen -z-50 h-screen left-0 top-0 absolute bg-black"
      ></div>
      <div data-scroll-section  className="mt-40 relative h-min min-h-max mx-auto flex flex-col text-center">
      <div className="-z-10">
      <Image data-scroll data-scroll-speed="2" width={1000} height={1000} className="-top-32 rounded-md opacity-25 -left-32 h-72 absolute w-auto" alt="" src={"/assets/coding.png"}></Image>
      <Image data-scroll data-scroll-speed="3" width={1000} height={1000} className="top-36 rounded-md opacity-[0.9] -right-40 h-64 absolute w-auto" alt="" src={"/assets/stucoSurveys.png"}></Image>
      <Image data-scroll data-scroll-speed="3" width={1000} height={1000} className="-top-16 rounded-md opacity-50 -right-80 h-64 absolute w-auto" alt="" src={"/assets/githubOrg.png"}></Image>
      <Image data-scroll data-scroll-speed="2" width={1000} height={1000} className="top-40 rounded-md opacity-50 left-20 h-64 absolute w-auto" alt="" src={"/assets/techCommittee.jpeg"}></Image>
      </div>
      <div data-scroll data-scrolls-peed="2" id="title">
        <div className="overflow-hidden">
        <span className="fadeIn1 text-7xl px-8 flex w-min min-w-max mx-auto border-red-600/50 border-b-8 pb-4 text-white font-bold">
          Tech Committee
          <Image width={1000} height={1000} className="h-20 rounded-md w-auto ml-4 align-middle" alt="" src={"/assets/techCommitteeRocket.png"}></Image>
        </span>
        </div>
        <div className="overflow-hidden w-3/4 mt-4 mx-auto">
        <span className="fadeIn1 text-3xl font-bold text-red-500">
          Creating next-gen solutions for Phillips Exeter Academy
        </span>
        </div>
      </div>
      </div>
    </div>
  );
}
