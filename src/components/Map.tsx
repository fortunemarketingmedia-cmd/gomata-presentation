"use client";

import { useMemo, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  useMapEvents
} from "react-leaflet";

import { divIcon } from "leaflet";

import type { LatLngBoundsExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

import { locations } from "@/data/locations";

import { projectBoundary } from "@/data/projectBoundary";

import { highwayRoutes } from "@/data/highways";


// ZOOM HANDLER

function ZoomHandler({
  setZoomLevel
}: any) {

  useMapEvents({

    zoomend: (e) => {

      setZoomLevel(
        e.target.getZoom()
      );

    }

  });

  return null;

}


export default function Map({
  setSelectedLocation
}: any) {

  // MAP ZOOM STATE

  const [zoomLevel,
    setZoomLevel] = useState(11);

  // SIMPLE MARKER ICON

  const simpleMarkerIcon = useMemo(
    () =>
      divIcon({
        className: "",
        html: `
          <div style="
            width: 16px;
            height: 16px;
            background: #dc2626;
            border: 2px solid white;
            border-radius: 9999px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.25);
          "></div>
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

      zoomControl={false}

      attributionControl={false}

      style={{
        height: "100%",
        width: "100%"
      }}
    >

      {/* MAP TILE */}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* TRACK MAP ZOOM */}

      <ZoomHandler
        setZoomLevel={setZoomLevel}
      />

      {/* LOCATION MARKERS */}

      {
        locations.map((location) => (

          <Marker
            key={location.id}

            icon={simpleMarkerIcon}

            position={
              location.position as [number, number]
            }

            eventHandlers={{

              click: () => {

                setSelectedLocation(location);

              }

            }}
          >

            {/* LOCATION LABEL */}

            {
              zoomLevel >= 11 && (

                <Tooltip
  permanent
  direction="top"
  offset={[0, -12]}
  interactive
  opacity={1}
  className="location-tooltip !border-0 !shadow-none !p-0 !opacity-100 !bg-transparent !backdrop-blur-none"
>
  <div
    onClick={() => setSelectedLocation(location)}
    className="
      text-[13px]
      font-semibold
      text-white
      px-3
      py-1
      rounded-full
      !bg-[#6105A3]
      !bg-opacity-100
      !opacity-100
      !backdrop-blur-none
      border
      border-[#C8A2C8]
      shadow-lg
      whitespace-nowrap
      cursor-pointer
      pointer-events-auto
      hover:scale-105
      transition-transform
    "
  >
    {location.name}
  </div>
</Tooltip>

              )
            }

          </Marker>

        ))
      }

      {/* HIGHWAY CORRIDORS */}
      {
        highwayRoutes.map((route) => (
          <Polyline
            key={route.id}
            positions={route.positions}
            pathOptions={{
              color: route.color,
              weight: route.weight,
              opacity: 0.85,
              dashArray: route.dashArray
            }}
            eventHandlers={{
              click: () => {
                setSelectedLocation({
                  name: route.name,
                  description: route.description,
                  images: route.images
                });
              }
            }}
          >
            <Tooltip sticky>
              <span className="font-semibold text-[#6105A3]">{route.name}</span>
            </Tooltip>
          </Polyline>
        ))
      }

      {/* PROJECT BOUNDARY */}

      <Polyline

        positions={projectBoundary}

        pathOptions={{

          color: "#dc2626",

          weight: 4,

          opacity: 1

        }}

        eventHandlers={{

          click: () => {

            setSelectedLocation({

              name: "Gomata Project Boundary",

              description:
                "• Spans a highly strategic layout sector in the heart of NAINA's Town Planning Scheme 11 (TPS-11).\n" +
                "• Located less than 5 kilometers from the upcoming Navi Mumbai International Airport (NMIA) terminals.\n" +
                "• Positioned directly adjacent to the 16-Lane Virar-Alibaug Multimodal Corridor and the proposed Metro Line.\n" +
                "• Connects seamlessly to the 6-Lane highway leading directly to the Atal Setu (MTHL) Sea Bridge.\n" +
                "• Sits within the high-value commercial influence zone of the proposed Aero City and Edu City hubs.\n" +
                "• Aggregated under the transparent land pooling scheme led by CIDCO and the Government of Maharashtra.\n" +
                "• Assures direct ownership with investor names printed on official 7/12 land records.\n" +
                "• Facilitated and managed by Gomata Vision LLP, led by former NHAI Project Director Vikas Koli.",

              images: [
                "/images/gomataboundary.webp"
              ]

            });

          }

        }}
      />

    </MapContainer>

  );
}