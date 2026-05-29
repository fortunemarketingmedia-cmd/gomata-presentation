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
              zoomLevel >= 13 && (

                <Tooltip
                    permanent
                    direction="top"
                    offset={[0, -12]}
                    interactive={true}
                    className="!bg-transparent !border-0 !shadow-none"
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

                        bg-[#4A2567]
                        backdrop-blur-md

                        border border-[#4A2567]

                        shadow-lg

                        whitespace-nowrap

                        cursor-pointer
                        pointer-events-auto

                        hover:scale-105
                        transition-all
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
                "Infrastructure project boundary visualization across the Navi Mumbai development corridor.",

              images: [
                "/images/project.jpg"
              ]

            });

          }

        }}
      />

    </MapContainer>

  );
}