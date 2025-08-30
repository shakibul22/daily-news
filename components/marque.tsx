"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const companyLogos = [
  {
    src: "/glamour-news.png",
    alt: "PureHaat",
  },
  {
    src: "/glamour-news.png",
    alt: "EYEDESHI",
  },
  {
    src: "/glamour-news.png",
    alt: "WOAFA",
  },
  {
    src: "/glamour-news.png",
    alt: "Nazsin Emporium",
  },
  {
    src: "/glamour-news.png",
    alt: "Drip Drop",
  },
  {
    src: "/glamour-news.png",
    alt: "Giftex",
  },
  

];

export default function Marquee() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.4;
      if (scrollPos >= el.scrollWidth / 3) scrollPos = 0;
      el.scrollLeft = scrollPos;
      animationIdRef.current = requestAnimationFrame(scroll);
    };

    // Start scrolling on mount
    animationIdRef.current = requestAnimationFrame(scroll);

    // Store scroll function globally for reuse on mouse leave
    const startScroll = () => {
      if (animationIdRef.current === null) {
        animationIdRef.current = requestAnimationFrame(scroll);
      }
    };

    // Save to window so handlers can access without redefining
    (window as any).__trustedScroll = startScroll;

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationIdRef.current !== null) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    const startScroll = (window as any).__trustedScroll;
    if (typeof startScroll === "function") {
      startScroll();
    }
  };

  return (
    <div className="relative">
  
        


            {/* Scrolling container */}
            <div
              className="w-full overflow-hidden"
              ref={scrollRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ whiteSpace: "nowrap", display: "flex" }}
            >
              {duplicatedLogos.map((aff, idx) => (
                <div
                  key={idx}
                  className="mx-1 flex shrink-0 items-center justify-center "
                  style={{ width: "auto", height: "auto" }}
                >
                  <Image src={aff.src} alt={aff.alt} width={100} height={50} />
                </div>
              ))}
            </div>
 

     
    </div>
  );
}