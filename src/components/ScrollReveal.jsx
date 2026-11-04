import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children }) {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -64px 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scroll-reveal${isVisible ? " is-visible" : ""}`}
      ref={revealRef}
    >
      {children}
    </div>
  );
}
