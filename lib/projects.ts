// Portfolio project data, shared by the portfolio grid and the project detail
// pages (app/portfolio/[slug]).

export const categories = [
  "All",
  "Character Home Renovations",
  "Designer Projects",
  "Complete Renovations",
  "Custom Builds",
  "Kitchens + Bathrooms",
  "You Spaces",
] as const;

export type Category = (typeof categories)[number];

type ProjectInput = {
  name: string;
  location: string;
  category: Exclude<Category, "All">;
  // Optional kicker label shown on the card; defaults to the filter category.
  label?: string;
  description: string;
  image: string;
  imageAlt: string;
  // Longer write-up for the project page; falls back to description.
  body?: string[];
  // Additional finished-work photos shown on the project page.
  gallery?: { src: string; alt: string }[];
};

export type Project = ProjectInput & { slug: string };

// Custom Design Concepts — concept studies shown under the Designer Projects
// filter. These are design concepts, not built projects.
const customDesignConcepts: ProjectInput[] = [
  {
    name: "Layered Primary Bedroom",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A warm primary suite built on natural materials. Walnut casegoods, a jute rug, and a woven gallery wall, grounded by soft terracotta accents.",
    image: "/photos/concept-bedroom.png",
    imageAlt:
      "Concept rendering of a warm bedroom with a walnut wardrobe, woven storage bench, framed gallery wall, and terracotta headboard.",
  },
  {
    name: "Spa-Inspired Ensuite",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A calm ensuite pairing vertical wood slats and marble with dual vessel basins, a black-framed glass shower, and fine speckled floor tile.",
    image: "/photos/concept-bathroom.png",
    imageAlt:
      "Concept rendering of an ensuite bathroom with wood-slat walls, a marble surround, dual vessel sinks, and a black-framed walk-in shower.",
  },
  {
    name: "Garden Lounge & Bar",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A sculptural lounge opening to the garden, with a curved sofa, a stone-topped bar, and floor-to-ceiling glazing that draws the planting indoors.",
    image: "/photos/concept-bar.png",
    imageAlt:
      "Concept rendering of a lounge with a curved green sofa, a stone bar counter, brass pendant, and full-height windows onto a garden.",
  },
  {
    name: "Arched Sitting Room",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A quiet sitting room framed by a plaster archway, finished in deep evergreen with panelled walls and a marble fireplace.",
    image: "/photos/concept-arch.png",
    imageAlt:
      "Concept rendering looking through a green archway into a deep-green panelled sitting room with a marble fireplace.",
  },
  {
    name: "Double-Height Living Room",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A double-height living room anchored by built-in shelving and an oversized abstract canvas, kept light with oak floors and a neutral palette.",
    image: "/photos/concept-living-room.png",
    imageAlt:
      "Concept rendering of a double-height living room with built-in bookshelves, a large abstract painting, and a fireplace.",
  },
  {
    name: "Open-Plan Library",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "An open-plan living library wrapped in full-height oak shelving, lit warmly and opening through to a sunlit garden beyond.",
    image: "/photos/concept-library.png",
    imageAlt:
      "Concept rendering of an open-plan room with floor-to-ceiling oak bookshelves, a low sofa, and a doorway through to a garden.",
  },
  {
    name: "Mid-Century Kitchen",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A mid-century kitchen in walnut and terrazzo, with a hand-glazed geometric tile backsplash and full-height glazing onto the garden.",
    image: "/photos/concept-kitchen.png",
    imageAlt:
      "Concept rendering of a walnut kitchen with a terrazzo island, geometric tile backsplash, sculptural wood pendant, and garden windows.",
  },
];

// Completed client projects.
const completedProjects: ProjectInput[] = [
  {
    name: "Bearspaw Kitchen",
    location: "Bearspaw, Alberta",
    category: "Kitchens + Bathrooms",
    description:
      "A full kitchen overhaul built for a family that cooks and entertains. A deep espresso island with seating for five anchors white shaker cabinetry, quartz counters, and a sculpted range hood finished in copper banding, all framed by large windows onto the trees.",
    body: [
      "This Bearspaw kitchen was rebuilt around how the family actually uses it: big weekend meals, a steady stream of guests, and plenty of people around the island at once. The existing layout was stripped back and reworked so the cooking zone, prep space, and seating each have room of their own.",
      "A long espresso-stained island anchors the room, with seating for five on one side and deep drawer storage on the other. It's paired with white shaker perimeter cabinetry run full height to the ceiling, marble-look quartz counters, and a large undermount prep sink at the island.",
      "The range wall is the centrepiece: a professional range under a sculpted bell hood finished in dark metal with copper banding, flanked by a built-in stainless refrigerator. Amber glass pendants, brushed gold hardware, and a light oak floor warm the palette, while big windows keep the whole room looking out into the trees.",
    ],
    image: "/photos/project-bearspaw-kitchen.jpg",
    imageAlt:
      "Renovated kitchen with a dark wood island, white quartz counters, amber glass pendants, white cabinetry, and large windows facing trees.",
    gallery: [
      { src: "/photos/projects/bearspaw-kitchen-1.jpg", alt: "Wide view of the Bearspaw kitchen with a long seating island and a statement range hood." },
      { src: "/photos/projects/bearspaw-kitchen-2.jpg", alt: "Espresso island with quartz top and pendant lights, looking toward the windows." },
      { src: "/photos/projects/bearspaw-kitchen-3.jpg", alt: "Island seating facing the range wall and built-in refrigerator." },
      { src: "/photos/projects/bearspaw-kitchen-4.jpg", alt: "Range under a dark metal hood with copper banding, beside a stainless refrigerator." },
    ],
  },
  {
    name: "Hawkwood Kitchen + Two Baths",
    location: "Hawkwood, Calgary",
    category: "Kitchens + Bathrooms",
    description:
      "An open kitchen and two fully renovated bathrooms. A dividing wall came out to connect the kitchen to the living area, with extended pantry cabinetry, an appliance garage, a custom hood cover, an ensuite walk-in shower, and hardwood repairs matched to the existing floor.",
    body: [
      "At this Hawkwood home, D2 completed a full kitchen renovation and two full bathroom renovations. Removing a non-load-bearing dividing wall opened the kitchen to the adjacent living area. All-new cabinetry, countertops, and backsplash were complemented by updated kitchen lighting and electrical.",
      "The kitchen's storage and finishing details include extended pantry cabinetry, an appliance garage, floating shelves, and a custom range hood cover. Where hardwood needed replacement, new sections were matched to the surrounding existing floor.",
      "Both the main bathroom and ensuite were fully gutted and renovated with new vanities and countertops, fixtures, tile, and lighting. A walk-in shower features in the ensuite, while an LED mirror is part of the main bathroom.",
    ],
    image: "/photos/project-hawkwood-kitchen.jpg",
    imageAlt:
      "Open kitchen with a white waterfall island, globe pendants, full-height pantry cabinetry, and oak hardwood floors.",
    gallery: [
      { src: "/photos/projects/hawkwood-kitchen-1.jpg", alt: "Waterfall island with seating, floating shelves, and white shaker cabinetry." },
      { src: "/photos/projects/hawkwood-kitchen-3.jpg", alt: "Ensuite walk-in shower with frameless glass and a pebble floor." },
    ],
  },
  {
    name: "Open-Plan Family Kitchen",
    location: "Calgary, Alberta",
    category: "Kitchens + Bathrooms",
    description:
      "A kitchen opened up by removing a non-load-bearing wall, centred on a large seating island with outlets. Pantry storage, a farmhouse sink, a custom range hood frame, and cabinet lighting complete the room, with the existing floors repaired to suit the new layout.",
    body: [
      "This kitchen renovation centred on an open layout and a large island designed mainly for seating. Demolition included removing a non-load-bearing wall, and new cabinetry, countertops, backsplash, and appliances were installed alongside updated lighting and electrical.",
      "Pantry storage, a farmhouse sink, a custom range hood frame, and cabinet lighting add practical and visual details. Electrical outlets were built into the island, and an existing wall central vacuum inlet was converted to a sweep inlet for easy broom cleanup.",
      "The existing floors were repaired and made good to suit the altered layout, preserving the hardwood already in place.",
    ],
    image: "/photos/project-open-kitchen.jpg",
    imageAlt:
      "White shaker kitchen with full-height pantry cabinetry, a stainless French-door fridge, and natural hardwood floors.",
    gallery: [
      { src: "/photos/projects/open-plan-family-kitchen-2.jpg", alt: "Full-height pantry wall and refrigerator leading into the kitchen." },
      { src: "/photos/projects/open-plan-family-kitchen-3.jpg", alt: "Long view through the open kitchen to the living area beyond." },
    ],
  },
  {
    name: "Holy Cross Condo Refresh",
    location: "Mission, Calgary",
    category: "Kitchens + Bathrooms",
    description:
      "A targeted condo refresh: painted kitchen cabinets with new counters, sink, and under-cabinet lighting, two new vanities, a custom tiled walk-in shower with an open entry, matched LVP flooring, and a custom floating TV shelf.",
    body: [
      "At this Holy Cross condo, D2 refreshed the kitchen and upgraded both bathrooms, with selected flooring, lighting, and living-area improvements. In the kitchen, we painted the existing cabinets, installed new countertops and a new sink, and added under-cabinet lighting alongside updated lighting.",
      "Both bathrooms received replacement vanities. The ensuite also received a custom tiled walk-in shower with a fixed glass panel and an open, doorless entry. New flooring in the renovation areas was matched to the existing luxury vinyl plank.",
      "In the living area, we sourced and installed a custom floating TV shelf fabricated by a supplier in British Columbia, showing how cabinet painting, selected replacements, and a custom feature can combine into a focused condo refresh.",
    ],
    image: "/photos/project-holy-cross-condo.jpg",
    imageAlt:
      "Condo kitchen with white cabinetry, a backlit island bar, black track lighting, and glass pendants.",
    gallery: [
      { src: "/photos/projects/holy-cross-condo-1.jpg", alt: "Kitchen with painted white cabinets, new quartz counters, and a black faucet." },
      { src: "/photos/projects/holy-cross-condo-2.jpg", alt: "Open living area looking toward the lit kitchen island." },
      { src: "/photos/projects/holy-cross-condo-3.jpg", alt: "Bathroom with a new white vanity and black fixtures." },
      { src: "/photos/projects/holy-cross-condo-4.jpg", alt: "Tiled walk-in shower with a built-in niche." },
      { src: "/photos/projects/holy-cross-condo-5.jpg", alt: "Wall-mounted TV above a custom floating wood shelf." },
    ],
  },
  {
    name: "Elbow Property Renovation",
    location: "Elbow Park, Calgary",
    category: "Complete Renovations",
    description:
      "Exterior, roofing, and interior work coordinated as one project: a hardwood deck extension, epoxy pebble surfacing, a new SBS flat roof and attic insulation, two offices in custom walnut veneer millwork, and a powder room with custom metalwork.",
    body: [
      "This Elbow project brought exterior improvements and detailed interior work together in one coordinated renovation. We removed the existing exterior tile and installed epoxy pebble surfacing for improved traction. A newly built deck structure extended the existing deck, finished in exotic hardwood decking, and the existing flat roof was replaced with an SBS roofing system.",
      "Inside, we renovated a main office and a second office/bedroom with extensive custom walnut veneer millwork: built-in shelving, cabinetry, bookcases, and wall panels paired with wallpaper and integrated LED lighting. The powder room received a quartz countertop, a new sink, decorative wallpaper, a custom metal mirror frame, and a custom metal window detail.",
      "The project also included repairs to water damage in the second office/bedroom. To address attic rain issues, conventional batt insulation was removed and spray foam installed along the attic floor.",
    ],
    image: "/photos/project-elbow-powder-room.jpg",
    imageAlt:
      "Powder room with a floating walnut vanity, vessel sink, geometric tile, and a custom black metal mirror frame and window screen.",
    gallery: [
      { src: "/photos/projects/elbow-property-2.jpg", alt: "Extended deck finished in exotic hardwood along the rear of the home." },
      { src: "/photos/projects/elbow-property-3.jpg", alt: "Rear patio finished in epoxy pebble surfacing." },
      { src: "/photos/projects/elbow-property-4.jpg", alt: "Side courtyard walkway with custom black metal screens." },
    ],
  },
];

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const projects: Project[] = [
  ...completedProjects,
  ...customDesignConcepts,
].map((p) => ({ ...p, slug: slugify(p.name) }));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
