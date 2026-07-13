const HIGHWAY_POINTER_COLOR = "#8E4585";

export const locations = [
  {
    id: 1,
    name: "Navi Mumbai Airport",
    position: [18.9942, 73.0745],
    description:
      "• Navi Mumbai International Airport (NMIA) is a world-class greenfield airport slated to start operations by late 2026.\n" +
      "• The project spans over 1,160 hectares of high-value land in the core of the Navi Mumbai influence zone.\n" +
      "• Phase 1 is designed to handle over 20 million (2 Crore) passenger movements annually, easing major load off Mumbai's CSIA.\n" +
      "• The ultimate design capacity stands at over 90 million (9 Crore) passengers per year with parallel dual runways.\n" +
      "• The airport passenger terminal layout takes design inspiration from the Lotus flower, symbolizing Indian heritage.\n" +
      "• Strategically connected via upcoming high-speed metro lines, coastal highways, and water transport channels.\n" +
      "• Serves as the primary catalyst for rapid commercial appreciation, residential demand, and hotel infrastructure growth.\n" +
      "• Features massive dedicated cargo handling zones designed to manage over 2.5 million tonnes of freight annually.",
    images: [
      "/images/airport/airport1.webp",
      "/images/airport/airport2.webp",
    ],
  },
  {
    id: 2,
    name: "Edu City",
    position: [18.970198, 73.040171],
    description:
      "• India's first conceptual 'EduCity' township, located near the upcoming Navi Mumbai International Airport (NMIA).\n" +
      "• Spanning approximately 100 hectares (250 acres) of dedicated zone in the Karanjade-Panvel educational corridor.\n" +
      "• A flagship CIDCO project designed to attract premier global institutions, research campuses, and skilling facilities.\n" +
      "• Focusing on professional higher education, global research collaborations, tech incubations, and executive training.\n" +
      "• Built to host over 50,000 students with state-of-the-art academic blocks, student hostels, libraries, and sports centers.\n" +
      "• MoUs and collaborations signed with global leaders like the University of York, University of Aberdeen, and Illinois Institute of Tech.\n" +
      "• Hosts a central R&D park specializing in Artificial Intelligence, biotechnology, sustainable logistics, and clean energy systems.\n" +
      "• Connects seamlessly to the regional expressway grid, national highways, and the proposed Metro Line M-24.",
    images: [
      "/images/educity/educity1.webp",
      "/images/educity/educity2.webp",
    ],
  },
  {
    id: 3,
    name: "Medi City",
    position: [18.973154, 73.048807],
    description:
      "• Upcoming Navi Mumbai International Medicity (NMIMC) project spread over a massive 250-acre wellness zone.\n" +
      "• Super-specialty health hubs specializing in cardiology, oncology, organ transplants, pediatrics, and robotic surgery.\n" +
      "• Supported by a massive capital investment of $1.2 Billion (approx. ₹10,000 Cr), creating over 10,000 high-value healthcare jobs.\n" +
      "• State partnerships signed in 2026 with global icons Cleveland Clinic, Brookfield, and Arodhan Health City (AHC).\n" +
      "• Incorporates multi-specialty hospitals, research campuses, nursing colleges, diagnostic facilities, and genomics labs.\n" +
      "• Integrates wellness retreats, physical rehabilitation centers, and AYUSH alternative medicine campuses.\n" +
      "• Promotes the 'Heal in India' initiative, creating a global destination for medical tourism right next to the airport.\n" +
      "• Features dedicated transit corridors for fast international patient transfers direct from the airport terminals.",
    images: [
      "/images/medicity/medicity1.webp",
      "/images/medicity/medicity2.webp",
    ],
  },
  {
    id: 4,
    name: "Aerocity",
    position: [18.974006, 73.056277],
    description:
      "• Planned world-class 'Aerotropolis' commercial core spanning 667 acres adjacent to the new international airport.\n" +
      "• Structured cluster-based zoning managed by transaction advisors and planners Nippon Koei India.\n" +
      "• Allocates balanced zones: 123 acres residential, 123 acres retail and high-streets, and 123 acres commercial offices.\n" +
      "• Features premium international business hubs, convention centers, airline offices, and luxury hospitality districts.\n" +
      "• Expected to host over 5,000 rooms in premium hotels (ranging from 3-star to 7-star) to support business travel.\n" +
      "• Fully integrated with the Atal Setu (MTHL) sea bridge, upcoming metro lines, and the Sion-Panvel Highway corridor.\n" +
      "• Features a state-of-the-art logistics cargo city connected to the airport freight terminal and JNPT port routes.\n" +
      "• Eases density in traditional business districts (BKC, Nariman Point) by creating a modern, high-value alternative.",
    images: [
      "/images/airocity/airocity1.webp",
      "/images/airocity/airocity2.webp",
    ],
  },
  {
    id: 5,
    name: "Sai World City",
    position: [18.967620953336617, 73.12485649313783],
    pricing: [
      {
        type: "2 BHK",
        area: "878 - 931 sq.ft.",
        price: "₹ 1.57 Cr - ₹ 1.66 Cr",
      },
      {
        type: "3 BHK",
        area: "1153 - 1373 sq.ft.",
        price: "₹ 2.04 Cr - ₹ 2.43 Cr",
      },
    ],
    images: [
      "/images/saiworld/saiworld1.webp",
      "/images/saiworld/saiworld2.webp",
    ],
  },
  {
    id: 6,
    name: "Marathon Nexzone",
    position: [18.965138252481747, 73.1264023439982],
    pricing: [
      {
        type: "1 BHK",
        area: "459 sq.ft.",
        price: "₹ 62.88 Lac",
      },
      {
        type: "2 BHK",
        area: "577 - 913 sq.ft.",
        price: "₹ 79 Lac - ₹ 1.24 Cr",
      },
      {
        type: "3 BHK",
        area: "922 sq.ft.",
        price: "₹ 1.25 Cr",
      },
    ],
    images: [
      "/images/marathon/marathon1.webp",
      "/images/marathon/marathon2.webp",
    ],
  },
  {
    id: 7,
    name: "Arihant Aspire",
    position: [18.962805898732505, 73.13132676130923],
    pricing: [
      {
        type: "1 BHK",
        area: "332 - 365 sq.ft.",
        price: "₹ 40.92 Lac - ₹ 44.93 Lac",
      },
      {
        type: "2 BHK",
        area: "482 - 732 sq.ft.",
        price: "₹ 50.32 Lac - ₹ 86.38 Lac",
      },
      {
        type: "3 BHK",
        area: "950 sq.ft.",
        price: "₹ 1.17 Cr",
      },
    ],
    images: [
      "/images/arihant/arihant1.webp",
      "/images/arihant/arihant2.webp",
    ],
  },
  {
    id: 8,
    name: "Gomata Office",
    position: [19.0184, 73.039],
    description:
      "• Corporate office of Gomata Vision LLP, located in CBD Belapur, the financial hub of Navi Mumbai.\n" +
      "• Serves as the central administration, client relations, and project management headquarters.\n" +
      "• Spearheads land acquisition and strategic development across the NAINA region (TPS-11).\n" +
      "• Mr. Vikas Koli Founder of Gomata Vision LLP, to be India's leading real estate partner.\n" +
      "• Focused on offering high-return investment options through transparent land banking and layout schemes.\n" +
      "• Direct connection to Belapur Railway Station, Sion-Panvel Expressway, and major financial institutions.\n" +
      "• Specializes in managing farmer negotiations, land aggregation, and planning town development schemes.\n" +
      "• Hosts investor consultation programs to educate clients on CIDCO land pooling and NAINA master plan progress.",
    images: [
      "/images/gomata/gomata1.webp",
      "/images/gomata/gomata2.webp",
    ],
  },
  {
    id: 9,
    name: "Atal Setu (MTHL) - Chirle Interchange",
    position: [18.9508, 73.0232],
    description:
      "• Shri Atal Bihari Vajpayee Sewri-Nhava Sheva Atal Setu (Mumbai Trans Harbour Link) is India's longest sea bridge.\n" +
      "• Spanning 21.8 km, it connects Sewri in South Mumbai directly to Nhava Sheva and Chirle in Navi Mumbai.\n" +
      "• Drastically cuts travel times between the island city and Navi Mumbai from 2 hours to just 20 minutes.\n" +
      "• Connects directly to the project corridor via the Chirle interchange, bringing South Mumbai closer to TPS-11.\n" +
      "• Built using advanced engineering, noise barriers, and eco-friendly construction to protect local flamingos.\n" +
      "• Promotes seamless freight movement between South Mumbai, Navi Mumbai, Pune, and the JNPT port.\n" +
      "• Acts as a major driver for commercial growth, logistics setups, and real estate appreciation in NAINA.\n" +
      "• Equipped with state-of-the-art electronic toll collection systems and 24/7 intelligent traffic monitoring.",
    images: ["/images/atal_setu.webp"],
  },
  {
    id: 10,
    name: "Lonavala",
    position: [18.7481, 73.4074],
    description:
      "• Celebrated hill station nestled in the Sahyadri ranges of the Western Ghats along the Expressway corridor.\n" +
      "• Located approximately 45 km from the project boundary, offering a scenic getaway within a 35-minute drive.\n" +
      "• Famed for its lush valleys, historic forts, viewpoints, caves, and pleasant climate throughout the year.\n" +
      "• Represents a major tourism, hospitality, luxury second-home, and villa real estate investment market.\n" +
      "• Convenient transit hub with robust rail connectivity on the central Mumbai-Pune railway route.\n" +
      "• Features adventure theme parks, luxury resorts, health sanatoriums, and educational boarding academies.\n" +
      "• Famous for local culinary treats like Chikki and fudge, attracting thousands of weekly tourists.\n" +
      "• Surrounded by critical water reservoirs and hydro-power installations that feed the Mumbai metropolitan grid.",
    images: ["/images/lonavala.webp"],
  },
  {
    id: 11,
    name: "Palaspe Phata Junction",
    position: [18.968282, 73.131683],
    description:
      "• Prominent multi-highway traffic intersection located in Panvel, connecting key regions of Maharashtra.\n" +
      "• Links the Mumbai-Pune Expressway (NH 48), Mumbai-Goa Highway (NH 66), and the JNPT Port road network.\n" +
      "• Located just 3.5 km northwest of the project boundary, serving as the primary regional transit gateway.\n" +
      "• Features massive commercial setups, container freight stations, logistics depots, and retail hubs.\n" +
      "• Acts as the primary collection point for passenger buses and commercial transport between Goa, Pune, and Mumbai.\n" +
      "• Surrounded by premium residential developments due to high connectivity and transport options.\n" +
      "• Currently undergoing infrastructure upgrades to ease local traffic and accommodate future airport traffic.\n" +
      "• Serves as the key landmark mapping highway travel times to and from the TPS-11 project site.",
    images: ["/images/palaspe_phata.webp"],
  },
  {
    id: 12,
    name: "D-Mart",
    position: [18.967779, 73.134592],
    description:
      "• Landmark shopping hypermarket located in Sector 5, New Panvel East, serving the local population.\n" +
      "• Positioned 4 km from the project boundary, highlighting the availability of modern retail amenities.\n" +
      "• Generates high daily footfall, reflecting the established commercial and residential ecosystem nearby.\n" +
      "• Provides groceries, daily essentials, home products, apparel, and electronics at discounted pricing.\n" +
      "• Surrounded by established high-street markets, clinics, banks, and popular dining outlets.\n" +
      "• Accessible via local auto-rickshaw networks and Panvel municipal bus routes.\n" +
      "• Highlights the urban readiness of the micro-market surrounding the TPS-11 investment zones.\n" +
      "• Serves as a primary commercial anchor and real estate landmark in the Panvel East corridor.",
    images: ["/images/dmart.webp"],
  },
  {
    id: 13,
    name: "Indian Model School (IMS) - Ulwe",

    // Exact location for X2FG+8Q, Wahal, Maharashtra
    position: [18.9733125, 73.0269375],

    description:
      "• Prominent co-educational CBSE academy located in Sector 19, Ulwe, Navi Mumbai.\n" +
      "• Offers premium primary and secondary education with modern labs, libraries, and play arenas.\n" +
      "• Strategically situated within the rapidly growing Ulwe node, close to the upcoming NMIA airport.\n" +
      "• Part of the educational network directed by elite coaches, ensuring high academic standards.\n" +
      "• Focuses on holistic development, sports programs, art workshops, and science exhibitions.\n" +
      "• Highly connected to the local railway network and upcoming coastal roads for easy transport.\n" +
      "• Serves as a major educational landmark, supporting the residential family growth in the region.\n" +
      "• Equipped with modern smart classrooms, security monitoring, and bus shuttle services.",
    images: ["/images/ims_school.webp"],
  },
  {
    id: 14,
    name: "NH 66 (Mumbai-Goa Highway)",
    position: [18.952, 73.1308],
    description:
      "• Major coast-hugging national highway linking Mumbai and Panvel to Konkan, Goa, and Southern India.\n" +
      "• Runs vertically directly through the middle of the TPS-11 project layout corridor, offering frontage.\n" +
      "• Undergoing 4-lane concrete expansion and widening to drastically reduce travel times and improve safety.\n" +
      "• Key driver for commercial showrooms, fuel stations, logistics depots, and warehouse parks along its route.\n" +
      "• Directly intersects with NH 48 and MTHL corridors at Palaspe Phata, offering robust regional outreach.\n" +
      "• Boosts regional tourism and industrial logistics, carrying heavy commercial cargo from JNPT port.\n" +
      "• Increases capital appreciation for layout properties sitting adjacent to the highway frontage.\n" +
      "• Equipped with modern smart highway toll systems, safety barriers, and roadside service plazas.",
    images: ["/images/highway.webp"],
  },
  {
    id: 15,
    name: "Panvel Bus Stand",
    position: [18.9912, 73.1168],
    description:
      "• Panvel Central Bus Stand is the primary state transport (MSRDC) bus terminal in the Panvel region.\n" +
      "• Located approximately 4.5 km from the TPS-11 boundary, offering direct regional commuter transit.\n" +
      "• Connects Panvel to all major districts in Maharashtra, including Pune, Thane, Solapur, and the Konkan coast.\n" +
      "• Features high daily frequency of public and private buses, serving as a vital mobility node.\n" +
      "• Currently slated for infrastructure redevelopment to support modern premium transit amenities.\n" +
      "• Integrates local municipal bus shuttles (NMMT) connecting New Panvel directly to the upcoming airport.\n" +
      "• Provides direct transit links for corporate staff, logistics workers, and commercial developers in NAINA.\n" +
      "• Surrounded by dense retail high-streets, restaurants, commercial offices, and medical clinics.",
    images: ["/images/panvel_bus_stand.webp"],
  },
  {
    id: 16,
    name: "Panvel Railway Station",
    position: [18.9898, 73.1206],
    description:
      "• Panvel Junction is one of the busiest railway terminals in Navi Mumbai, handling both suburban and long-distance trains.\n" +
      "• Positioned 4.2 km from the TPS-11 layout, acting as the primary rail transport backbone for the project area.\n" +
      "• Serves as a major halt on the Central Railway line and the harbor line connecting directly to Mumbai CST.\n" +
      "• Connects Navi Mumbai to Western India via the Konkan Railway and Central Railway corridors to Pune and Southern India.\n" +
      "• Directly linked to the upcoming Navi Mumbai International Airport (NMIA) via a proposed high-speed metro corridor.\n" +
      "• Part of the massive station commercial development project aimed at creating office spaces and retail complexes.\n" +
      "• Acts as a major driver for local residential housing demand, keeping capital appreciation rates high in Panvel East.\n" +
      "• Equipped with state-of-the-art security, multiple platforms, parking lots, and integrated auto-rickshaw hubs.",
    images: ["/images/panvel_railway_station.webp"],
  },
  {
    id: 17,
    name: "Mumbai International Airport (CSIA)",
    position: [19.0896, 72.8656],
    description:
      "• Chhatrapati Shivaji Maharaj International Airport (CSIA) is India's second-busiest international aviation hub.\n" +
      "• Located in Santacruz/Sahar, Mumbai, acting as the primary air gateway for the Mumbai Metropolitan Region.\n" +
      "• Handled over 50 million (5 Crore) passengers in 2025, operating at near maximum structural capacity.\n" +
      "• Connected directly to Navi Mumbai and TPS-11 via the Atal Setu (MTHL) Sea Bridge, cutting transit times to 40 mins.\n" +
      "• Features the award-winning Terminal 2 (T2), celebrated for its iconic architecture and Indian cultural exhibits.\n" +
      "• Serves as the central operations hub for Air India, IndiGo, and major international airline networks.\n" +
      "• Handles over 1 million tonnes of international air cargo annually, driving trade across Maharashtra.\n" +
      "• The load from CSIA is slated to be shared with the upcoming NMIA airport, boosting NAINA's growth.",
    images: ["/images/mumbai_airport.webp"],
  },
  {
    id: 18,
    name: "Karnala Bird Sanctuary",
    position: [18.896, 73.12],
    description:
      "• Spans a lush, protected forest reserve along the Mumbai-Goa Highway (NH 66) south of Panvel.\n" +
      "• Centered around the historic 12th-century Karnala Fort (Funnel Hill), a popular trekking destination.\n" +
      "• Sanctuary hosts over 222 species of resident and migratory birds, including rare vultures and eagles.\n" +
      "• Located approximately 12 kilometers from the TPS-11 project boundary, serving as a primary nature getaway.\n" +
      "• Offers scenic nature trails, a walk-through aviary, and government-managed environment briefing centers.\n" +
      "• A critical biodiversity hotspot and eco-tourism driver for the Navi Mumbai and NAINA development zones.\n" +
      "• Surrounded by pristine deciduous forests, natural water springs, and rich wildlife habitats.\n" +
      "• Easily accessible by road transit, making it a favorite weekend destination for MMR residents.",
    images: ["/images/karnala_sanctuary.webp"],
  },
];

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
      [18.968739, 73.13196],
      [18.967261, 73.131884],
      [18.963672, 73.130868],
      [18.960573, 73.131081],
      [18.958076, 73.130708],
      [18.955581, 73.130985],
      [18.951667, 73.130732],
      [18.941929, 73.129799],
      [18.934683, 73.128831],
      [18.93075, 73.127131],
      [18.923546, 73.125553],
      [18.920235, 73.125192],
      [18.918289, 73.123568],
    ],
    color: HIGHWAY_POINTER_COLOR,
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
    images: ["/images/palaspe_phata.webp"],
  },
  {
    id: "nh48",
    name: "NH 48 Old Mumbai–Pune Highway",
    positions: [
      [18.967391, 73.12023],
      [18.966693, 73.125885],
      [18.968938, 73.134025],
      [18.962036, 73.144334],
      [18.959333, 73.149744],
      [18.953686, 73.170566],
    ],
    color: HIGHWAY_POINTER_COLOR,
    weight: 7,
    description:
      "• Starts from Palaspe Phata and curves southeast along the orange road corridor east of the project boundary.\n" +
      "• Crucial regional highway connecting Panvel and Navi Mumbai to Pune, Satara, Kolhapur, and Bangalore.\n" +
      "• Serves as the primary alternate route for two-wheelers, heavy industrial goods, and commercial tractors.\n" +
      "• Lined with premier residential developments, educational institutions, logistics zones, and dining dhabas.\n" +
      "• Connects directly to Shedung junction, offering fast entry and exit to the main Expressway.\n" +
      "• Maintained by MSRDC with automated tolling, wide shoulders, and modern road safety markings.\n" +
      "• Passes through major commercial hubs in Panvel East and Somatne, driving real estate values.",
    images: ["/images/palaspe_phata.webp"],
  },
  {
    id: "mumbai-pune-expressway",
    name: "Mumbai–Pune Expressway",
    positions: [
      [18.965887, 73.159647],
      [18.95185, 73.154788],
      [18.950578, 73.154698],
      [18.93576, 73.158639],
    ],
    color: HIGHWAY_POINTER_COLOR,
    weight: 7,
    description:
      "• India's first six-lane concrete, high-speed, access-controlled toll expressway spanning 93 km.\n" +
      "• Starts at Kalamboli in Navi Mumbai and ends at Kiwale in Pune, cutting travel times to 2 hours.\n" +
      "• Positioned on the pink expressway road running southeast, just east of the Konkan Railway line.\n" +
      "• Connects seamlessly to the MTHL (Atal Setu) and the upcoming Navi Mumbai International Airport.\n" +
      "• Built using advanced mountain tunneling, safety nets, and modern surveillance systems.\n" +
      "• Features food malls, fuel stations, vehicle maintenance yards, and emergency trauma centers.\n" +
      "• Crucial commercial and passenger transport backbone driving real estate growth along the corridor.",
    images: ["/images/palaspe_phata.webp"],
  },
];