import { useEffect, useRef, useState } from 'react';

function useObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    const observer = new IntersectionObserver(([entries]) => {
      setIsVisible(entries.isIntersecting)
    }, options)

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [observerRef])

  return [observerRef, isVisible]
}

export default useObserver