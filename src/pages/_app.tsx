import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "@/styles/locomotive.css";

export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}
