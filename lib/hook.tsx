import { useActiveSectionContext } from "@/context-provider/active-section";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { sectionName } from "@/lib/types";

export function useHooks(threshold = 0.5, place: sectionName) {
  const { setActiveSelection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSelection(place);
    }
  }, [inView, setActiveSelection, timeOfLastClick, place]);
  return ref;
}
