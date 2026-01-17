import { useEffect, useState, useRef, type RefObject } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isInView: boolean;
  entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook for detecting when an element is in viewport
 * Uses Intersection Observer API for performance
 *
 * @param options - Intersection Observer options
 * @returns Object with ref, isInView state, and entry
 *
 * @example
 * const { ref, isInView } = useInView({ threshold: 0.5 })
 *
 * <div ref={ref}>
 *   {isInView && <ExpensiveComponent />}
 * </div>
 */
export const useInView = <T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): UseInViewReturn<T> => {
  const {
    triggerOnce = false,
    threshold = 0,
    root = null,
    rootMargin = "0px",
  } = options;

  const ref = useRef<T | null>(null);

  // Initialize with fallback check for IntersectionObserver support
  const [isInView, setIsInView] = useState(() => {
    return !("IntersectionObserver" in window);
  });
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If IntersectionObserver is not supported, state is already set to true
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        const inView = entry.isIntersecting;

        if (inView) {
          setIsInView(true);

          // If triggerOnce, disconnect after first intersection
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, isInView, entry };
};
