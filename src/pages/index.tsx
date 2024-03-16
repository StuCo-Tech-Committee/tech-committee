import Image from "next/image";
import { Inter } from "next/font/google";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { scroll } = useLocomotiveScroll()
  return (
    <div className="flex h-[200vh]" data-scroll-container>
      <div
        id="background"
        className="w-screen -z-50 h-screen left-0 top-0 absolute bg-black"
      ></div>
      <div data-scroll-section className="m-20 mx-auto">
        <p
          className="text-3xl mt-28 text-center text-white font-bold"
          data-scroll data-scroll-speed="4"
        >
          I AM BOLD
        </p>
        <p
          className="text-lg text-center text-white italic"
          data-scroll data-scroll-speed="5"
        >
          i am meek
        </p>
      </div>
    </div>
  );
}
