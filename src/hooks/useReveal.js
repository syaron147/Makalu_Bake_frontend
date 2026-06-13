import { useEffect, useRef } from 'react';

function useReveal(threshold = 150) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight - threshold)
        el.classList.add('active');
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [threshold]);
  return ref;
}

export default useReveal;
export { useReveal };