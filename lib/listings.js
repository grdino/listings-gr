export const LISTINGS = {
  "zr-1br-terrace-unit-a": {
    slug: "zr-1br-terrace-unit-a",
    title: "1BR / 2BA Condo in Zona Romántica",
    subtitle:
      "~1000 sqft • Terrace • Flat walk to beach • Steps to restaurants, bars & shopping",
    priceText: "Priced in the $___s (USD)",
    facts: [
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "2" },
      { label: "Size", value: "~1000 sqft" },
      { label: "Outdoor", value: "Terrace" },
      { label: "Walkability", value: "Walk out to dining, nightlife & shopping" },
      { label: "Beach", value: "Short, flat walk" },
    ],
    highlights: [
      "Prime walkable Zona Romántica lifestyle",
      "Terrace for indoor/outdoor living",
      "1BR + 2BA layout that buyers love",
      "Steps to restaurants, bars, shopping, and galleries",
    ],
    locationBlurb:
      "Zona Romántica is one of Puerto Vallarta’s most walkable neighborhoods. This unit puts you in the middle of the action with an easy, flat stroll to the beach.",
    addressOrArea: "Zona Romántica, Puerto Vallarta",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=REPLACE_ME",
    photos: [
      { src: "/photos/unit-a/01.jpg", alt: "Living area" },
      { src: "/photos/unit-a/02.jpg", alt: "Kitchen" },
      { src: "/photos/unit-a/03.jpg", alt: "Bedroom" },
      { src: "/photos/unit-a/04.jpg", alt: "Bathroom" },
      { src: "/photos/unit-a/05.jpg", alt: "Terrace" },
      { src: "/photos/unit-a/06.jpg", alt: "Exterior / building" },
    ],
    mlsLink: "https://YOUR-MLS-LINK-HERE",
  },

  "zr-1br-terrace-unit-b": {
    slug: "zr-1br-terrace-unit-b",
    title: "1BR / 2BA Condo in Zona Romántica (Unit B)",
    subtitle:
      "~1000 sqft • Terrace • Flat walk to beach • Walk to everything",
    priceText: "Priced in the $___s (USD)",
    facts: [
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "2" },
      { label: "Size", value: "~1000 sqft" },
      { label: "Outdoor", value: "Terrace" },
      { label: "Walkability", value: "Dining, bars & shopping steps away" },
      { label: "Beach", value: "Short, flat walk" },
    ],
    highlights: [
      "Hot Zona Romántica location",
      "Terrace + open layout",
      "Great for lock-and-leave or full-time living",
      "Flat walk to the beach and daily essentials",
    ],
    locationBlurb:
      "A great option for buyers who want a walk-everywhere PV lifestyle in Zona Romántica with quick access to the beach.",
    addressOrArea: "Zona Romántica, Puerto Vallarta",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=REPLACE_ME",
    photos: [
      { src: "/photos/unit-b/01.jpg", alt: "Living area" },
      { src: "/photos/unit-b/02.jpg", alt: "Kitchen" },
      { src: "/photos/unit-b/03.jpg", alt: "Bedroom" },
      { src: "/photos/unit-b/04.jpg", alt: "Bathroom" },
      { src: "/photos/unit-b/05.jpg", alt: "Terrace" },
      { src: "/photos/unit-b/06.jpg", alt: "Neighborhood" },
    ],
    mlsLink: "https://YOUR-MLS-LINK-HERE",
  },
};

export function getListing(slug) {
  return LISTINGS[slug] || null;
}
