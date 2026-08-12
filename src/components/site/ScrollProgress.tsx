"use client";

import { useEffect, useRef } from "react";

/** Thin yellow reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bar.current) return;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.current.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="progress" aria-hidden="true" ref={bar} />;
}
