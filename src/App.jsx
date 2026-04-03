import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./components/Nav";
import { SlideWrapper } from "./components/SlideWrapper";
import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = slides.length;
  const canPrev = index > 0;
  const canNext = index < total - 1;

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i >= total - 1) return i;
      setDirection(1);
      return i + 1;
    });
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) return i;
      setDirection(-1);
      return i - 1;
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const Component = slides[index];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[var(--pres-bg)] text-[var(--pres-text)]">
      <AnimatePresence custom={direction} mode="wait">
        <SlideWrapper key={index} direction={direction}>
          <Component />
        </SlideWrapper>
      </AnimatePresence>

      <Nav
        current={index}
        total={total}
        onPrev={goPrev}
        onNext={goNext}
        canPrev={canPrev}
        canNext={canNext}
      />
    </div>
  );
}
