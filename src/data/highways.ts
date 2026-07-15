export interface HighwayRoute {
  id: string;
  name: string;
  positions: [number, number][];
  color: string;
  weight: number;
  dashArray?: string;
  description: string;
  images: string[];
}

export const highwayRoutes: HighwayRoute[] = [
  {
    id: "nh66",
    name: "NH 66 Mumbai–Goa Highway",
    positions: [
      [18.972581, 73.129564],
      [18.970385, 73.132159],
      [18.970023, 73.132235],
      [18.968739, 73.131960],
      [18.967261, 73.131884],
      [18.963672, 73.130868],
      [18.960573, 73.131081],
      [18.958076, 73.130708],
      [18.955581, 73.130985],
      [18.951667, 73.130732],
      [18.941929, 73.129799],
      [18.934683, 73.128831],
      [18.930750, 73.127131],
      [18.923546, 73.125553],
      [18.920235, 73.125192],
      [18.918289, 73.123568]
    ],
    color: "#9f00de",
    weight: 7,
    description:
      "• Major coast-hugging national highway linking Mumbai and Panvel to Konkan, Goa, and Southern India.\n" +
      "• Runs vertically directly through the middle of the TPS-11 project layout corridor, offering frontage.\n" +
      "• Undergoing 4-lane concrete expansion and widening to drastically reduce travel times and improve safety.\n" +
      "• Key driver for commercial showrooms, fuel stations, logistics depots, and warehouse parks along its route.\n" +
      "• Directly intersects with NH 48 and MTHL corridors at Palaspe Phata, offering robust regional outreach.\n" +
      "• Boosts regional tourism and industrial logistics, carrying heavy commercial cargo from JNPT port.\n" +
      "• Increases capital appreciation for layout properties sitting adjacent to the highway frontage.\n" +
      "• Equipped with modern smart highway toll systems, safety barriers, and roadside service plazas.",
    images: ["/images/palaspe_phata.webp"]
  },
  {
    id: "nh48",
    name: "NH 48 Old Mumbai–Pune Highway",
    positions: [
      [18.967391, 73.120230],
      [18.966693, 73.125885],
      [18.968938, 73.134025],
      [18.962036, 73.144334],
      [18.959333, 73.149744],
      [18.953686, 73.170566]
    ],
    color: "#061af1",
    weight: 7,
    description:
      "• Starts from Palaspe Phata and curves southeast along the orange road corridor east of the project boundary.\n" +
      "• Crucial regional highway connecting Panvel and Navi Mumbai to Pune, Satara, Kolhapur, and Bangalore.\n" +
      "• Serves as the primary alternate route for two-wheelers, heavy industrial goods, and commercial tractors.\n" +
      "• Lined with premier residential developments, educational institutions, logistics zones, and dining dhabas.\n" +
      "• Connects directly to Shedung junction, offering fast entry and exit to the main Expressway.\n" +
      "• Maintained by MSRDC with automated tolling, wide shoulders, and modern road safety markings.\n" +
      "• Passes through major commercial hubs in Panvel East and Somatne, driving real estate values.",
    images: ["/images/oldhighway.webp"]
  },
  {
    id: "mumbai-pune-expressway",
    name: "Mumbai–Pune Expressway",
    positions: [
      [18.965887, 73.159647],
      [18.951850, 73.154788],
      [18.950578, 73.154698],
      [18.935760, 73.158639]
    ],
    color: "#00ef14",
    weight: 7,
    description:
      "• India's first six-lane concrete, high-speed, access-controlled toll expressway spanning 93 km.\n" +
      "• Starts at Kalamboli in Navi Mumbai and ends at Kiwale in Pune, cutting travel times to 2 hours.\n" +
      "• Positioned on the pink expressway road running southeast, just east of the Konkan Railway line.\n" +
      "• Connects seamlessly to the MTHL (Atal Setu) and the upcoming Navi Mumbai International Airport.\n" +
      "• Built using advanced mountain tunneling, safety nets, and modern surveillance systems.\n" +
      "• Features food malls, fuel stations, vehicle maintenance yards, and emergency trauma centers.\n" +
      "• Crucial commercial and passenger transport backbone driving real estate growth along the corridor.",
    images: ["/images/expressway.webp"]
  }
];