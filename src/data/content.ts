/* ==========================================================================
   Editorial content.
   Kept entirely separate from presentation: the page and every component read
   from these typed records. Swapping in a real CMS means replacing this file.
   ========================================================================== */

export type Category =
  | "PHOTOGRAPHY"
  | "ARCHITECTURE"
  | "TRAVEL"
  | "MUSIC"
  | "FILM"
  | "DESIGN"
  | "FASHION"
  | "CITIES"
  | "PEOPLE";

export type Art = {
  /** Unsplash photo id, relative to images.unsplash.com */
  id: string;
  /** Meaningful alt text describing what is actually in the frame. */
  alt: string;
  /** Art-directed focal point; keeps the subject inside the crop. */
  position?: string;
  /** Printed caption, set small under the frame. */
  caption?: string;
  /** Photographer credit. */
  credit?: string;
};

export type Story = {
  slug: string;
  /** Printed folio number. */
  number: string;
  category: Category;
  title: string;
  dek: string;
  author: string;
  date: string;
  readTime: string;
  art: Art;
};

export type IndexEntry = {
  slug: string;
  number: string;
  title: string;
  category: Category;
  date: string;
  art: Art;
};

/* -- Issue ---------------------------------------------------------------- */

export const issue = {
  number: "018",
  title: "THE ATTENTION ISSUE",
  month: "SEPTEMBER 2026",
  description:
    "A collection of stories about attention, craft, culture and the things that still deserve our time.",
  contents: [
    "The New Quiet — Maya Sen on the economics of doing less",
    "Soft Infrastructure — Ingrid Halvorsen's year of public benches",
    "Nocturne for Six Cameras — Júlia Reis photographs São Paulo at 4am",
    "The Slow Material — Rowan Balfour on wood, repair and permanence",
  ],
  specs: ["184 pages", "Thread-sewn", "€16 / £14"],
  /** Cover artwork, built as a mock-up in CSS rather than a flat rectangle. */
  cover: {
    id: "photo-1518005020951-eccb494ad742",
    alt: "Curved blue concrete facades sweep upward against a clear sky.",
    position: "50% 50%",
    credit: "Ansel Roth",
  } satisfies Art,
} as const;

/* -- Navigation ----------------------------------------------------------- */

export const nav = [
  { label: "Stories", href: "#stories" },
  { label: "Culture", href: "#feature" },
  { label: "Design", href: "#issue" },
  { label: "Archive", href: "#latest" },
] as const;

export const footerNav = [
  { label: "Stories", href: "#stories" },
  { label: "Archive", href: "#latest" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const social = [
  { label: "Instagram", href: "https://instagram.com", handle: "@north.magazine" },
  { label: "X", href: "https://x.com", handle: "@northmag" },
  { label: "YouTube", href: "https://youtube.com", handle: "/north" },
] as const;

/* -- Cover story ---------------------------------------------------------- */

export const hero = {
  meta: "ISSUE 018 · SEPTEMBER 2026",
  title: "The New Quiet",
  dek: "Why a generation surrounded by noise is rediscovering the beauty of making less, moving slower, and paying attention.",
  byline: "WORDS — MAYA SEN",
  art: {
    id: "photo-1506744038136-46273834b3fb",
    alt: "A river runs through a pine forest at the foot of a hazy mountain valley at first light.",
    position: "50% 52%",
    caption: "Dusk, Lake Tahoe. The valley takes four minutes to fill.",
    credit: "Photograph — Ansel Roth",
  } satisfies Art,
} as const;

/* -- Featured stories ----------------------------------------------------- */

export const featured: Story[] = [
  {
    slug: "after-the-algorithm",
    number: "01",
    category: "PHOTOGRAPHY",
    title: "After the Algorithm",
    dek: "How independent photographers are building audiences without chasing the feed.",
    author: "Ines Okonkwo",
    date: "02 SEP 2026",
    readTime: "9 MIN",
    art: {
      id: "photo-1554080353-a576cf803bda",
      alt: "A photographer raises a camera to her eye in front of out-of-focus lights at night.",
      position: "50% 38%",
      caption: "Ana shoots for eleven months before anything is published. The feed can wait.",
    },
  },
  {
    slug: "concrete-dreams",
    number: "02",
    category: "ARCHITECTURE",
    title: "Concrete Dreams",
    dek: "Inside the architects designing cities for people, not traffic.",
    author: "Tomas Lindqvist",
    date: "28 AUG 2026",
    readTime: "12 MIN",
    art: {
      id: "photo-1481253127861-534498168948",
      alt: "Stacked concrete balcony slabs turn a corner against a bright sky.",
      position: "50% 40%",
      caption: "Housing in Marseille, finished 1974 and reoccupied since 2019.",
    },
  },
  {
    slug: "the-long-way-home",
    number: "03",
    category: "TRAVEL",
    title: "The Long Way Home",
    dek: "A conversation about travel, memory and leaving the obvious route behind.",
    author: "Maya Sen",
    date: "21 AUG 2026",
    readTime: "7 MIN",
    art: {
      id: "photo-1441974231531-c6227db76b6e",
      alt: "Sunlight falls through tall trees onto a narrow path in a forest.",
      position: "50% 50%",
      caption: "The road stops here. Everything beyond it is on foot.",
    },
  },
  {
    slug: "sound-without-permission",
    number: "04",
    category: "MUSIC",
    title: "Sound Without Permission",
    dek: "The artists making music outside the boundaries of genre.",
    author: "Delia Moreau",
    date: "14 AUG 2026",
    readTime: "11 MIN",
    art: {
      id: "photo-1493225457124-a3eb161ffa5f",
      alt: "A raised hand and drifting smoke caught in coloured stage light above a packed crowd.",
      position: "50% 34%",
      caption: "Last night of the tour. Nobody asked the venue to lower the lights.",
    },
  },
];

/* -- Large editorial feature --------------------------------------------- */

export const feature = {
  eyebrow: "FEATURE · DESIGN",
  title: "Objects with a life of their own.",
  dek: "From furniture to cameras to the things we carry every day, the objects around us quietly tell us who we are.",
  byline: "WORDS — ROWAN BALFOUR · PHOTOGRAPHS — LENA FARKAS",
  art: {
    id: "photo-1503602642458-232111445657",
    alt: "A single pale wooden stool stands against a soft blue-grey wall.",
    position: "50% 34%",
    caption: "Stool no. 14, from a run of two hundred. Nineteen of them still exist.",
    credit: "Photograph — Lena Farkas",
  } satisfies Art,
  specs: [
    ["Words", "Rowan Balfour"],
    ["Photographs", "Lena Farkas"],
    ["From", "Issue 018, p. 44"],
  ],
} as const;

/* -- Latest index --------------------------------------------------------- */

export const latest: IndexEntry[] = [
  {
    slug: "architecture-of-waiting",
    number: "05",
    title: "The Architecture of Waiting",
    category: "ARCHITECTURE",
    date: "11 SEP",
    art: {
      id: "photo-1511818966892-d7d671e672a2",
      alt: "Glass towers rise into a pale sky in a black and white photograph.",
      position: "50% 45%",
    },
  },
  {
    slug: "what-we-keep",
    number: "06",
    title: "What We Keep",
    category: "PEOPLE",
    date: "09 SEP",
    art: {
      id: "photo-1495446815901-a7297e633e8d",
      alt: "Rows of worn paperbacks stand on a shelf with blurred lights behind them.",
      position: "50% 50%",
    },
  },
  {
    slug: "cities-after-midnight",
    number: "07",
    title: "Cities After Midnight",
    category: "CITIES",
    date: "06 SEP",
    art: {
      id: "photo-1519501025264-65ba15a82390",
      alt: "A city street at night, crowded with headlights and shop signs.",
      position: "50% 50%",
    },
  },
  {
    slug: "the-case-for-boring-design",
    number: "08",
    title: "The Case for Boring Design",
    category: "DESIGN",
    date: "02 SEP",
    art: {
      id: "photo-1494438639946-1ebd1d20bf85",
      alt: "A black wall lamp is fixed to a plain green wall.",
      position: "50% 42%",
    },
  },
  {
    slug: "a-room-of-one-s-own",
    number: "09",
    title: "A Room of One's Own",
    category: "FASHION",
    date: "30 AUG",
    art: {
      id: "photo-1522708323590-d24dbb6b0267",
      alt: "A bright apartment with tall windows, a long table and a red armchair.",
      position: "50% 50%",
    },
  },
  {
    slug: "photographs-that-remember",
    number: "10",
    title: "Photographs That Remember",
    category: "FILM",
    date: "26 AUG",
    art: {
      id: "photo-1542038784456-1ea8e935640e",
      alt: "A photographer stands among tall trees with a camera raised to her eye.",
      position: "50% 45%",
    },
  },
];

/* -- Pull quote ----------------------------------------------------------- */

export const quote = {
  text: "Attention is becoming the rarest luxury.",
  emphasis: "rarest",
  attribution: "MAYA SEN · WRITER",
  source: "ISSUE 018, P. 12",
} as const;
