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
    id: "goapune",
    name: "Goa to Pune Road Connection",
    positions: [
      [18.9100, 73.0800], // Coming up from Goa (NH 66)
      [18.9400, 73.0900],
      [18.9600, 73.0980],
      [18.9750, 73.1050],
      [18.9892, 73.1118], // Junction at Palaspe Phata
      [18.9740, 73.1190], // Turn onto NH 48 heading to Pune
      [18.9650, 73.1250],
      [18.9550, 73.1290],
      [18.9400, 73.1360],
      [18.9300, 73.1420],
      [18.9100, 73.1650]  // Heading towards Pune
    ],
    color: "#f59e0b", // Amber/Yellow
    weight: 4,
    dashArray: "10, 10", // Glowing dotted transition
    description:
      "• Strategic transport link connecting the coastal Goa Highway (NH 66) to the Pune Expressway (NH 48)\n" +
      "• The primary transition corridor for cargo and passenger traffic flowing between Goa/Konkan and Pune/Solapur\n" +
      "• Passes right at the junction of the project boundary, offering unmatched logistical and transit access",
    images: [
      "/images/palaspe_phata.webp"
    ]
  }
];
