export type FeaturedStory = {
  no: string;
  category: string;
  title: string;
  dek: string;
  author: string;
  date: string;
  image: string;
  alt: string;
};

export type LatestStory = {
  no: string;
  title: string;
  category: string;
  date: string;
  image: string;
  alt: string;
};

export const featuredStories: FeaturedStory[] = [
  {
    no: "01",
    category: "Photography",
    title: "After the Algorithm",
    dek: "How independent photographers are building audiences without chasing the feed.",
    author: "June Park",
    date: "Sep 12, 2026",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop",
    alt: "Photographer holding a film camera in soft daylight",
  },
  {
    no: "02",
    category: "Architecture",
    title: "Concrete Dreams",
    dek: "Inside the studios designing cities for people, not traffic.",
    author: "Tomas Reyes",
    date: "Sep 08, 2026",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    alt: "Curved white concrete museum facade against sky",
  },
  {
    no: "03",
    category: "Travel",
    title: "The Long Way Home",
    dek: "A conversation about travel, memory and leaving the obvious route behind.",
    author: "Amara Diallo",
    date: "Aug 30, 2026",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    alt: "Open road through desert with a van at golden hour",
  },
  {
    no: "04",
    category: "Music",
    title: "Sound Without Permission",
    dek: "The artists making music outside the boundaries of genre.",
    author: "Leo Marchetti",
    date: "Aug 22, 2026",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    alt: "Musician performing on stage in warm red light",
  },
];

export const latestStories: LatestStory[] = [
  {
    no: "05",
    title: "The Architecture of Waiting",
    category: "Design",
    date: "Sep 18",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=400&auto=format&fit=crop",
    alt: "Minimal train station platform with concrete benches",
  },
  {
    no: "06",
    title: "What We Keep",
    category: "Objects",
    date: "Sep 15",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
    alt: "Wooden table with ceramics in morning light",
  },
  {
    no: "07",
    title: "Cities After Midnight",
    category: "Cities",
    date: "Sep 10",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=400&auto=format&fit=crop",
    alt: "City street at night with neon reflections",
  },
  {
    no: "08",
    title: "The Case for Boring Design",
    category: "Design",
    date: "Sep 04",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400&auto=format&fit=crop",
    alt: "Woman seated in a quiet beige interior",
  },
  {
    no: "09",
    title: "A Room of One's Own",
    category: "Interiors",
    date: "Aug 28",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop",
    alt: "Small apartment living room with armchair and window light",
  },
  {
    no: "10",
    title: "Photographs That Remember",
    category: "Photography",
    date: "Aug 20",
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=400&auto=format&fit=crop",
    alt: "Hands holding film photographs on a desk",
  },
];
