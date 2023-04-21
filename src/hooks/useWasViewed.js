import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useWasViewed = () => {
  const [wasViewed, setWasViewed] = useState(false);
  const { ref: setRef, inView: isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      setWasViewed(true);
    }
  }, [isInView]);

  return { setRef, wasViewed, isInView };
};