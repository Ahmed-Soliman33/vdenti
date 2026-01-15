import { useEffect, useState } from "react";

/**
 * A custom React hook that tracks the state of a media query.
 * @param {string} query - The media query string to watch, e.g., `(min-width: 600px)`.
 * @returns {boolean} - `true` if the media query matches, otherwise `false`.
 */
function useMediaQuery(query: string): boolean {
  // Checks for window object to prevent errors during server-side rendering (SSR)
  const getMatch = (): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatch());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Type the event as MediaQueryListEvent
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set the initial state
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(mediaQuery.matches);

    // Use addEventListener for modern browsers, with a fallback to addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      // addListener is deprecated but included for backwards compatibility
      mediaQuery.addListener(handler);
    }

    // Cleanup function to remove the listener on component unmount
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [query]); // Re-run the effect if the query string changes

  return matches;
}

export default useMediaQuery;
