// ─────────────────────────────────────────────
//  BIG GREEN T'S — STORE DATA
//  To add a new event: copy an EventStore block,
//  fill in the details, and push to GitHub.
//  Events auto-feature for `featuredDays` (default 60)
//  after their date, then quietly drop off.
// ─────────────────────────────────────────────

export type Size = "YS" | "YM" | "YL" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: Size[];
  image: string | null;
}

export interface EventStore {
  id: string;
  name: string;
  date: string;        // YYYY-MM-DD  ← event date (not when it was added)
  sport: string;
  description: string;
  featuredDays?: number; // default 60 — how long to show in Featured
  products: Product[];
}

export interface SportStore {
  id: string;
  name: string;
  emoji: string;
  description: string;
  products: Product[];
}

// ── HELPER ──────────────────────────────────
export function isEventFeatured(event: EventStore): boolean {
  const eventDate = new Date(event.date);
  const today = new Date();
  const days = event.featuredDays ?? 60;
  const endDate = new Date(eventDate);
  endDate.setDate(endDate.getDate() + days);
  return today >= eventDate && today <= endDate;
}

export function daysRemaining(event: EventStore): number {
  const eventDate = new Date(event.date);
  const days = event.featuredDays ?? 60;
  const endDate = new Date(eventDate);
  endDate.setDate(endDate.getDate() + days);
  const diff = endDate.getTime() - new Date().getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// ── EVENTS ──────────────────────────────────
// Add new events here. Oldest at the bottom.

export const events: EventStore[] = [
  {
    id: "hank-tenney-classic-2026",
    name: "Hank Tenney Classic 2026",
    date: "2026-02-15",
    sport: "Basketball",
    description:
      "Official event apparel from the 2026 Hank Tenney Classic basketball tournament.",
    products: [
      {
        id: "htc26-tee",
        name: "Hank Tenney Classic Tee",
        description: "Official event tee — screen printed with the 2026 Hank Tenney Classic design.",
        price: 25,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "htc26-hoodie",
        name: "Hank Tenney Classic Hoodie",
        description: "Pullover hoodie with the 2026 Hank Tenney Classic design.",
        price: 45,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "shamrock-shuffle-2026",
    name: "Shamrock Shuffle 2026",
    date: "2026-03-15",
    sport: "Running",
    description:
      "Race apparel from the 2026 Shamrock Shuffle — available in limited quantities.",
    products: [
      {
        id: "ss26-race-tee",
        name: "Shamrock Shuffle Race Tee",
        description: "Official race tee with the 2026 Shamrock Shuffle design.",
        price: 22,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "ss26-hoodie",
        name: "Shamrock Shuffle Hoodie",
        description: "Finisher hoodie — soft pullover with the 2026 Shamrock Shuffle design.",
        price: 45,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "head-of-the-hooch-2025",
    name: "Head of the Hooch 2025",
    date: "2025-11-01",
    sport: "Rowing",
    description: "Apparel from the 2025 Head of the Hooch Regatta.",
    featuredDays: 60,
    products: [
      {
        id: "hoh25-tee",
        name: "Head of the Hooch Tee",
        description: "Official event tee from the 2025 Head of the Hooch Regatta.",
        price: 25,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
];

// ── SPORTS ──────────────────────────────────
// Sport-specific apparel — not event-tied.

export const sports: SportStore[] = [
  {
    id: "rowing",
    name: "Rowing & Crew",
    emoji: "🚣",
    description: "Apparel for rowers, coxswains, and crew fans.",
    products: [
      {
        id: "row-nothing-but-water",
        name: '"Nothing But Water" Tee',
        description: "Classic rowing tee — available in multiple colors.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "row-crew-hoodie",
        name: "Crew Hoodie",
        description: "Pullover hoodie with crew design.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "basketball",
    name: "Basketball",
    emoji: "🏀",
    description: "Tees, hoodies, and gear for hoopers and fans.",
    products: [
      {
        id: "bball-nothing-but-net",
        name: '"Nothing But Net" Tee',
        description: "Basketball graphic tee — a fan favorite.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "bball-nh",
        name: "NH Basketball Tee",
        description: "New Hampshire basketball tee.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "bball-vt",
        name: "VT Basketball Tee",
        description: "Vermont basketball tee.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "bball-hoodie",
        name: "Basketball Hoodie",
        description: "Pullover hoodie with basketball design.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "soccer",
    name: "Soccer",
    emoji: "⚽",
    description: "Gear for players, coaches, and sideline fans.",
    products: [
      {
        id: "soccer-tee",
        name: "Soccer Graphic Tee",
        description: "Classic soccer design tee.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "soccer-hoodie",
        name: "Soccer Hoodie",
        description: "Pullover hoodie with soccer design.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "gymnastics",
    name: "Gymnastics",
    emoji: "🤸",
    description: "Apparel for gymnasts, coaches, and gym families.",
    products: [
      {
        id: "gym-stick-it",
        name: '"Stick It" Tee',
        description: "Gymnastics graphic tee — a crowd favorite at meets.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "gym-hoodie",
        name: "Gymnastics Hoodie",
        description: "Pullover hoodie with gymnastics design.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "football",
    name: "Football",
    emoji: "🏈",
    description: "Friday night gear for players and fans alike.",
    products: [
      {
        id: "football-friday-night",
        name: '"Friday Night Lights" Tee',
        description: "Football graphic tee.",
        price: 22,
        sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "football-hoodie",
        name: "Football Hoodie",
        description: "Pullover hoodie with football design.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
  {
    id: "running",
    name: "Running",
    emoji: "🏃",
    description: "Race tees, training gear, and finisher apparel.",
    products: [
      {
        id: "run-race-tee",
        name: "Race Day Tee",
        description: "Lightweight race tee — great for training and events.",
        price: 20,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
      {
        id: "run-hoodie",
        name: "Running Hoodie",
        description: "Post-race pullover hoodie.",
        price: 42,
        sizes: ["S", "M", "L", "XL", "2XL"],
        image: null,
      },
    ],
  },
];
