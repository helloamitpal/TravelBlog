import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export function useScroll() {
  const [scrollXPos, setScrollXPos] = useState(0);
  const [scrollYPos, setScrollYPos] = useState(0);

  const getScrollPosition = () => {
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    return { scrollX: left, scrollY: top };
  };

  const listener = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { scrollX, scrollY } = getScrollPosition();

    setScrollXPos(scrollX);
    setScrollYPos(scrollY);
  };

  const delay = 50; // in miliseconds

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay), false);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollXPos,
    scrollYPos
  };
}
