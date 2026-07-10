// Sidebar.tsx - Modern premium sidebar UI with proper bullet points
"use client";

import { useEffect, useRef } from "react";

interface PricingItem {
  type: string;
  area: string;
  price: string;
}

interface Location {
  id: string;
  name: string;
  description?: string;
  images: string[];
  pricing?: PricingItem[];
  region?: string;
  category?: string;
  projectType?: string;
}

export default function Sidebar({
  selectedLocation,
  onClose,
}: {
  selectedLocation: Location | null;
  onClose: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (selectedLocation) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLocation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedLocation) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLocation, onClose]);

  // Helper function to parse bullet points from description
  const parseBulletPoints = (description: string): string[] => {
    if (!description) return [];
    // Split by newline and filter out empty lines
    const lines = description.split("\n");
    // Extract bullet points (lines starting with • or -)
    const bulletPoints = lines.filter(line => line.trim().startsWith("•") || line.trim().startsWith("-"));
    
    // If no bullet points found, return the whole description as a single item
    if (bulletPoints.length === 0) {
      return [description];
    }
    
    // Clean up each bullet point (remove leading • or - and trim)
    return bulletPoints.map(point => point.replace(/^[•\-]\s*/, "").trim());
  };

   const bulletPoints =
  selectedLocation?.description
    ? parseBulletPoints(selectedLocation.description)
    : [];

  if (!selectedLocation) return null;

  return (
    <div
      className="sidebar-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5000,
        background: "rgba(10,10,20,0.65)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "IBM Plex Sans, sans-serif",
      }}
    >
      <div
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details: ${selectedLocation.name}`}
        style={{
          width: "100%",
          maxWidth: "1380px",
          height: "92vh",
          background: "#ffffff",
          borderRadius: "32px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
          border: "1px solid rgba(142, 69, 133, 0.22)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "42px 48px 30px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            background:
              "linear-gradient(to bottom, rgba(248,248,255,0.9), rgba(255,255,255,1))",
          }}
        >
          <div style={{ paddingRight: "20px" }}>
            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#18181b",
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              {selectedLocation.name}
            </h2>
          </div>

          {/* PURPLE CLOSE BUTTON */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close details panel"
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              border: "none",
              background: "#6105A3",
              color: "#ffffff",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.background = "#75386E";
              e.currentTarget.style.boxShadow =
                "0 14px 35px rgba(142,69,133,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#6105A3";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(142,69,133,0.22)";
            }}
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "42px 48px 60px",
          }}
        >
          {/* IMAGE GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "52px",
            }}
          >
            {selectedLocation.images.map((image, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                  background: "#f5f5f5",
                  height: "340px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={image}
                  alt={`${selectedLocation.name} ${idx + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>

          {/* PRICING SECTION */}
{selectedLocation.pricing && selectedLocation.pricing.length > 0 && (
  <div
    style={{
      marginBottom: "52px",
    }}
  >
    <h3
      style={{
        fontSize: "30px",
        fontWeight: 700,
        marginBottom: "24px",
        color: "#111827",
        letterSpacing: "-0.5px",
      }}
    >
      Pricing
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {selectedLocation.pricing.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#ffffff",
            border: "1px solid rgba(142, 69, 133, 0.22)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#C8A2C8",
              color: "#241F24",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "18px",
            }}
          >
            {item.type}
          </div>

          <div style={{ marginBottom: "12px" }}>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "4px",
                marginTop: 0,
              }}
            >
              Area
            </p>

            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#111827",
                margin: 0,
              }}
            >
              {item.area}
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "4px",
                marginTop: 0,
              }}
            >
              Price
            </p>

            <p
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#6105A3",
                margin: 0,
              }}
            >
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          {/* OVERVIEW WITH PROPER BULLET POINTS */}
{selectedLocation.description && (
          <div
            style={{
              maxWidth: "950px",
            }}
          >
            <h3
              style={{
                fontSize: "30px",
                fontWeight: 700,
                marginBottom: "20px",
                color: "#111827",
                letterSpacing: "-0.5px",
              }}
            >
              Project Overview
            </h3>

            {/* Bullet Points List */}
            <ul
              style={{
                margin: 0,
                paddingLeft: "24px",
                listStyle: "none",
              }}
            >
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "#4b5563",
                    marginBottom: "14px",
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      background: "#6105A3",
                      borderRadius: "50%",
                      marginTop: "10px",
                      flexShrink: 0,
                    }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* If no bullet points were parsed, show as paragraph */}
            {bulletPoints.length === 1 && bulletPoints[0] === selectedLocation.description && (
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  color: "#4b5563",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {selectedLocation.description}
              </p>
            )}
          </div>
          )}
        </div>
        
      </div>
    </div>
  );
}