import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2, 
      easing: (t) => t * (2 - t), 
      smooth: true,
      orientation: 'vertical',
      wheel: {
        direction: 'vertical',
        normalized: true,
        smooth: true,
        factor: 0.5,
      },
    });

    const scroll = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;