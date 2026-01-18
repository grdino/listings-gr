export const LISTINGS = {
  "zr-1br-terrace-unit-a": {
    slug: "zr-1br-terrace-unit-a",
    title: "1BR / 2BA | Zona Romántica",
    subtitle:
      "Excellent Rental Potential",

    priceText: "$470,000 USD",
    facts: [
      { label: "BEDROOMS:", value: "1" },
      { label: "BATHROOMS:", value: "2" },
      { label: "SIZE:", value: "~ 849 sqft" },
      { label: "OUTDOOR:", value: "Terrace" },
      { label: "WALKABILITY: 10/10", value: "Dining, nightlife & shopping" },
      { label: "BEACH:", value: "Short, flat walk" },
    ],
    highlights: [
      "Prime walkable Zona Romántica lifestyle",
      "Large terrace for indoor/outdoor living",
      "Bright, open, efficient",
      "Steps to restaurants, bars, shopping, and galleries",
    ],
    locationBlurb:
      "Zona Romántica is one of Puerto Vallarta’s most walkable neighborhoods. This unit puts you in the middle of the action with an easy, flat stroll to the beach.",
    addressOrArea: "Zona Romántica, Puerto Vallarta",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.961767114745!2d-105.23755652451321!3d20.604090102228515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421454c45077437%3A0xa0f020f2975aa55d!2sC.%20Constituci%C3%B3n%20207%2C%20Zona%20Rom%C3%A1ntica%2C%20Emiliano%20Zapata%2C%2048380%20Puerto%20Vallarta%2C%20Jal.!5e1!3m2!1sen!2smx!4v1768694039833!5m2!1sen!2smx",
    photos: [
      { src: "/photos/unit-a/hero.jpg", alt: "Living Space" },
      { src: "/photos/unit-a/01.jpg", alt: "Kitchen" },
      { src: "/photos/unit-a/02.jpg", alt: "Bedroom" },
      { src: "/photos/unit-a/03.jpg", alt: "Bathroom" },
      { src: "/photos/unit-a/04.jpg", alt: "Terrace" },
      { src: "/photos/unit-a/05.jpg", alt: "Rooftop" },
      { src: "/photos/unit-a/06.jpg", alt: "Gym" },
    ],
    mlsLink: "https://YOUR-MLS-LINK-HERE",
  },

  "zr-1br-terrace-unit-b": {
    slug: "zr-1br-terrace-unit-b",
    title: "1BR / 2BA Condo in Zona Romántica (Unit B)",
    subtitle:
      "~1000 sqft • Terrace • Flat walk to beach • Walk to everything",
    priceText: "$595,000 USD",
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
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.9569704387213!2d-105.23730752451326!3d20.60427100222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145be96b17575%3A0x869c542986cc76d0!2sMadero%20320!5e1!3m2!1sen!2sus!4v1768684814840!5m2!1sen!2sus",
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
