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
    color: "#7506f4",
    weight: 7,
    description:
      "• Represents the actual route of NH 66 (Mumbai–Goa Highway) relative to TPS-11\n" +
      "• Runs vertically from Palaspe Phata directly through the project layout corridor\n" +
      "• Crucial transit route connecting Panvel and Navi Mumbai to the Konkan and Goa regions",
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
    color: "#061ef4",
    weight: 7,
    description:
      "• Represents the actual route of the Old Mumbai–Pune Highway (NH 48) relative to TPS-11\n" +
      "• Starts from Palaspe Phata and curves southeast along the orange road corridor east of the project\n" +
      "• Acts as a major regional transit highway connecting Panvel to Pune and other districts",
    images: ["/images/palaspe_phata.webp"]
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
    color: "#e100ff",
    weight: 7,
    description:
      "• Represents the actual main route of the Mumbai–Pune Expressway (MPE) relative to TPS-11\n" +
      "• Positioned on the pink expressway road running southeast, just east of the Konkan Railway line\n" +
      "• Provides ultra-fast expressway access between Navi Mumbai, Panvel, and Pune",
    images: ["/images/palaspe_phata.webp"]
  }
];