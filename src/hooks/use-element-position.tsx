import { RefObject, useEffect, useState } from "react";

export const useElementPosition = (elementRef: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current) {
        setPosition(elementRef.current.getBoundingClientRect());
      }
    };

    // Initial position
    updatePosition();

    // Update on scroll and resize
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [elementRef]);

  return position;
};
