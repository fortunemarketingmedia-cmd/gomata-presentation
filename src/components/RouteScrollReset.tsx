"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollReset() {
  const pathname = usePathname();

  /*
   * Prevent the browser from automatically restoring
   * the previous page's scroll position.
   */
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousScrollRestoration =
      window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration =
        previousScrollRestoration;
    };
  }, []);

  /*
   * Reset the scroll position before the new route
   * becomes visible.
   */
  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();

    /*
     * Run once more on the next frame in case the new
     * page changes the document height while rendering.
     */
    const animationFrame = window.requestAnimationFrame(() => {
      scrollToTop();
      html.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname]);

  return null;
}