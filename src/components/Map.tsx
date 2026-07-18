"use client";

import { useMemo, useState } from "react";

import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  Tooltip,
  useMapEvents
} from "react-leaflet";

import { divIcon } from "leaflet";

import "leaflet/dist/leaflet.css";

import { locations } from "@/data/locations";
import { projectBoundary } from "@/data/projectBoundary";
import { highwayRoutes } from "@/data/highways";

/* =========================================
   MAP PROPS
========================================= */

type MapProps = {
  setSelectedLocation: (location: any) => void;
};

/* =========================================
   ZOOM HANDLER
========================================= */

function ZoomHandler({
  setZoomLevel
}: {
  setZoomLevel: React.Dispatch<
    React.SetStateAction<number>
  >;
}) {
  useMapEvents({
    zoomend: (event) => {
      const currentZoom =
        event.target.getZoom();

      setZoomLevel(currentZoom);
    }
  });

  return null;
}

/* =========================================
   MAP COMPONENT
========================================= */

export default function Map({
  setSelectedLocation
}: MapProps) {
  const [zoomLevel, setZoomLevel] =
    useState(12);

  /* =======================================
     CUSTOM LOCATION MARKER
  ======================================= */

  const simpleMarkerIcon = useMemo(
    () =>
      divIcon({
        className: "custom-location-marker",

        html: `
          <div
            style="
              width: 16px;
              height: 16px;
              background-color: #dc2626;
              border: 2px solid #ffffff;
              border-radius: 50%;
              box-shadow:
                0 2px 8px rgba(0, 0, 0, 0.45),
                0 0 0 3px rgba(220, 38, 38, 0.22);
            "
          ></div>
        `,

        iconSize: [16, 16],
        iconAnchor: [8, 8]
      }),
    []
  );

  return (
    <MapContainer
      center={[18.9942, 73.0745]}
      zoom={12}
      minZoom={8}
      maxZoom={20}
      zoomControl={false}
      attributionControl={true}
      preferCanvas={true}
      className="satellite-map"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#101010"
      }}
    >
      {/* ===================================
          SATELLITE MAP LAYER
      =================================== */}

      <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community"
        maxNativeZoom={19}
        maxZoom={20}
        zIndex={1}
      />

      {/* ===================================
          PLACE AND BOUNDARY LABELS
      =================================== */}

      <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        attribution="Labels &copy; Esri"
        maxNativeZoom={19}
        maxZoom={20}
        zIndex={2}
      />

      {/* ===================================
          MAP ZOOM TRACKING
      =================================== */}

      <ZoomHandler
        setZoomLevel={setZoomLevel}
      />

      {/* ===================================
          LOCATION MARKERS
      =================================== */}

      {locations.map((location) => (
        <Marker
          key={location.id}
          icon={simpleMarkerIcon}
          position={
            location.position as [
              number,
              number
            ]
          }
          riseOnHover={true}
          eventHandlers={{
            click: () => {
              setSelectedLocation(location);
            }
          }}
        >
          {zoomLevel >= 11 && (
            <Tooltip
              permanent={true}
              interactive={true}
              direction="top"
              offset={[0, -12]}
              opacity={1}
              className="location-tooltip"
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();

                  setSelectedLocation(
                    location
                  );
                }}
                className="
                  cursor-pointer
                  whitespace-nowrap
                  rounded-full
                  border
                  border-[#C8A2C8]
                  bg-[#6105A3]
                  px-3
                  py-1
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-lg
                  transition-transform
                  duration-200
                  hover:scale-105
                "
              >
                {location.name}
              </button>
            </Tooltip>
          )}
        </Marker>
      ))}

      {/* ===================================
          HIGHWAY ROUTES
      =================================== */}

      {highwayRoutes.map((route) => (
        <Polyline
          key={route.id}
          positions={route.positions}
          pathOptions={{
            color: route.color,
            weight: route.weight,
            opacity: 0.95,
            dashArray:
              route.dashArray || undefined,
            lineCap: "round",
            lineJoin: "round"
          }}
          eventHandlers={{
            click: () => {
              setSelectedLocation({
                name: route.name,
                description:
                  route.description,
                images: route.images
              });
            }
          }}
        >
          <Tooltip
            sticky={true}
            direction="top"
            offset={[0, -8]}
            opacity={1}
            className="highway-tooltip"
          >
            <span
              className="
                whitespace-nowrap
                text-sm
                font-semibold
                text-[#6105A3]
              "
            >
              {route.name}
            </span>
          </Tooltip>
        </Polyline>
      ))}

      {/* ===================================
          GOMATA PROJECT BOUNDARY
      =================================== */}

      <Polyline
        positions={projectBoundary}
        pathOptions={{
          color: "#dc2626",
          weight: 5,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round"
        }}
        eventHandlers={{
          click: () => {
            setSelectedLocation({
              name:
                "Gomata Project Boundary",

              description:
                "• Spans a highly strategic layout sector in the heart of NAINA's Town Planning Scheme 11 (TPS-11).\n" +
                "• Located less than 5 kilometers from the upcoming Navi Mumbai International Airport terminals.\n" +
                "• Positioned directly adjacent to the Virar-Alibaug Multimodal Corridor and the proposed Metro Line.\n" +
                "• Connects seamlessly to the highway leading directly to the Atal Setu Sea Bridge.\n" +
                "• Sits within the commercial influence zone of the proposed Aero City and Edu City hubs.\n" +
                "• Aggregated under the land pooling scheme led by CIDCO and the Government of Maharashtra.\n" +
                "• Assures direct ownership with investor names printed on official 7/12 land records.\n" +
                "• Facilitated and managed by Gomata Vision LLP.",

              images: [
                "/images/gomataboundary.webp"
              ]
            });
          }
        }}
      >
        <Tooltip
          sticky={true}
          direction="top"
          offset={[0, -8]}
          opacity={1}
          className="project-boundary-tooltip"
        >
          <span
            className="
              whitespace-nowrap
              text-sm
              font-semibold
              text-red-600
            "
          >
            Gomata Project Boundary
          </span>
        </Tooltip>
      </Polyline>
    </MapContainer>
  );
}