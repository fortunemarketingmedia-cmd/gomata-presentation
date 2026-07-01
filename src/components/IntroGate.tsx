"use client";

import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type IntroPhase = "playing" | "transitioning" | "finished";

interface IntroGateProps {
  children: ReactNode;
}

const TRANSITION_DURATION = 1700;
const TRANSITION_BEFORE_END = 1.7;

export default function IntroGate({
  children,
}: IntroGateProps) {
  const [phase, setPhase] = useState<IntroPhase>("playing");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const transitionTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasStartedTransition = useRef(false);

  const startTransition = useCallback(() => {
    if (hasStartedTransition.current) return;

    hasStartedTransition.current = true;
    setPhase("transitioning");

    transitionTimerRef.current = setTimeout(() => {
      setPhase("finished");
    }, TRANSITION_DURATION);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) return;

    const remainingTime = video.duration - video.currentTime;

    /*
     * Start revealing the map before the video ends.
     * This allows both visuals to overlap smoothly.
     */
    if (remainingTime <= TRANSITION_BEFORE_END) {
      startTransition();
    }
  }, [startTransition]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const isPlaying = phase === "playing";
  const isTransitioning = phase === "transitioning";

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Map page stays loaded behind the intro video */}
      <div
        className={[
          "h-full w-full",
          "transform-gpu",
          "will-change-[opacity,transform,filter]",
          "backface-hidden",
          "transition-[opacity,transform,filter]",
          "duration-[1700ms]",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          isPlaying
            ? "scale-[1.025] opacity-0 blur-[2px]"
            : "scale-100 opacity-100 blur-0",
        ].join(" ")}
      >
        {children}
      </div>

      {/* Intro video */}
      {phase !== "finished" && (
        <div
          className={[
            "fixed inset-0 z-[9999]",
            "overflow-hidden bg-black",
            "transform-gpu",
            "will-change-[opacity,transform,filter]",
            "backface-hidden",
            "transition-[opacity,transform,filter]",
            "duration-[1700ms]",
            "ease-[cubic-bezier(0.22,1,0.36,1)]",
            isTransitioning
              ? "pointer-events-none scale-[1.035] opacity-0 blur-[1px]"
              : "scale-100 opacity-100 blur-0",
          ].join(" ")}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onTimeUpdate={handleTimeUpdate}
            onEnded={startTransition}
            onError={startTransition}
            className="h-full w-full object-cover"
            aria-label="Gomata introduction animation"
          >
            <source
              src="/videos/gomata-intro.mp4"
              type="video/mp4"
            />
          </video>

          {/* Soft blending layer */}
          <div
            className={[
              "pointer-events-none absolute inset-0",
              "bg-white",
              "transition-opacity",
              "duration-[1700ms]",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              isTransitioning ? "opacity-[0.08]" : "opacity-0",
            ].join(" ")}
          />
        </div>
      )}
    </div>
  );
}