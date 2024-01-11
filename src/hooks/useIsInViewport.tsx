import { useState, useEffect, useMemo, RefObject } from "react";

function useIsInViewport<T extends HTMLElement>(ref: RefObject<T>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
