import { useState, useCallback } from "react";

interface UseCopyToClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
  error: Error | null;
}

/**
 * Custom hook for copying text to clipboard with feedback
 *
 * @param resetDelay - Time in ms before resetting copied state (default: 2000)
 * @returns Object with copied state, copy function, and error
 *
 * @example
 * const { copied, copy } = useCopyToClipboard()
 *
 * <button onClick={() => copy('Hello World')}>
 *   {copied ? 'Copied!' : 'Copy'}
 * </button>
 */
export const useCopyToClipboard = (
  resetDelay = 2000,
): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        const err = new Error("Clipboard API not supported");
        setError(err);
        console.warn("Clipboard API not supported");
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);

        // Reset copied state after delay
        setTimeout(() => {
          setCopied(false);
        }, resetDelay);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Failed to copy");
        setError(error);
        console.error("Failed to copy text:", error);
      }
    },
    [resetDelay],
  );

  return { copied, copy, error };
};
