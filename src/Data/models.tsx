import { useRef, useEffect } from "react";
export interface Movie {
  title: String;
  original_title: String;
  overview: String;
  backdrop_path: String;
  poster_path: String;
}

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement | null>(null); // Add type for HTML element

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}

class Constants {
  static apiKey = "6935dc2241b5a6643ce91a7504316079";
  static url = "https://api.themoviedb.org/3";
  static imageUrl = "https://image.tmdb.org/t/p/";
  static headers = {
    "Content-Type": "application/json",
  };
}
export default Constants;
