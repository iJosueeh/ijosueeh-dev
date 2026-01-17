import { useCallback } from "react";

interface ScrollToSectionOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

/**
 * Custom hook for smooth scrolling to sections
 *
 * @param options - Scroll behavior options
 * @returns Function to scroll to a section by ID
 *
 * @example
 * const scrollToSection = useScrollToSection()
 *
 * <button onClick={() => scrollToSection('about-section')}>
 *   Go to About
 * </button>
 */
export const useScrollToSection = (options: ScrollToSectionOptions = {}) => {
  const { behavior = "smooth", block = "start", inline = "nearest" } = options;

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);

      if (!element) {
        console.warn(`Section with id "${sectionId}" not found`);
        return;
      }

      element.scrollIntoView({
        behavior,
        block,
        inline,
      });
    },
    [behavior, block, inline],
  );

  return scrollToSection;
};
