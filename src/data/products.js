export const categories = [
  {
    label: "Apps",
    count: "3 published · 2 in development",
    products: [
      {
        title: "TalkToMe",
        badges: [
          { variant: "type", label: "AI Companion" },
          { variant: "soon", label: "● In Development" },
          { variant: "platform", label: "Android" },
        ],
        description:
          "A conversational companion app with a roster of AI-driven " +
          "characters — including ones styled as a psychologist, " +
          "nutritionist, personal coach, and language tutor — plus " +
          "built-in mini-games like memory, hangman, and a career maze " +
          "quiz that reward you with credits to unlock new characters " +
          "and customization.",
        tags: ["AI Companion", "Chat", "Mini-games", "Customization"],
        stats: [
          { value: "14", label: "Characters" },
          { value: "7", label: "Mini-games" },
          { value: "3", label: "Languages" },
          { value: "AI", label: "Chat" },
        ],
        cta: { type: "soon", label: "Coming soon to Google Play" },
      },
      {
        title: "Habits AI",
        images: "../../assets/habits",
        badges: [
          { variant: "type", label: "Productivity" },
          { variant: "live", label: "● Available" },
          { variant: "platform", label: "Android" },
        ],
        description:
          "A habit tracker and personal coach in one. Build routines with " +
          "daily streaks and gamified leagues, log your mood and voice notes " +
          "in a personal diary, and get personalized advice from an AI coach " +
          "powered by DeepSeek.",
        tags: ["Habits", "Productivity", "AI Coach", "Diary", "Gamification"],
        stats: [
          { value: "5", label: "Screens" },
          { value: "6", label: "Leagues" },
          { value: "3", label: "Languages" },
          { value: "AI", label: "Coach" },
        ],
        cta: {
          type: "link",
          href: "https://play.google.com/store/apps/details?id=com.ballstudio.habitos.app",
          label: "Download on Google Play ↗",
        },
      },
    ],
  },
  {
    label: "Games",
    count: "2 published · 1 in development",
    products: [
      {
        title: "Hotel Histeria",
        badges: [
          { variant: "type", label: "Game" },
          { variant: "soon", label: "● In Development" },
          { variant: "platform", label: "Android" },
        ],
        description:
          "A story-driven hotel management game. Explore seven floors, each " +
          "hiding its own character-driven story behind a completely " +
          "different minigame — from an arcade ship battle and a top-down " +
          "shooter to a stealth drag-and-drop puzzle, a trust-building " +
          "dialogue game, a sliding puzzle, and a climb-and-dodge chase — " +
          "while running the hotel itself between chapters: a garden, a " +
          "workshop, and a growing collection room.",
        tags: [
          "Narrative",
          "Hotel Management",
          "Minigames",
          "Multiple Genres",
          "AI-Generated Content",
        ],
        stats: [
          { value: "7", label: "Floors" },
          { value: "7", label: "Minigames" },
          { value: "6", label: "Replay Modes" },
        ],
        cta: { type: "soon", label: "Coming soon to Google Play" },
      },
      {
        title: "Rolling Escape",
        badges: [
          { variant: "type", label: "Game" },
          { variant: "live", label: "● Available" },
          { variant: "platform", label: "Android" },
        ],
        description:
          "A precision platformer where every jump counts. Roll and bounce " +
          "through 20 handcrafted levels across four distinct worlds — Space, " +
          "Cavern, Glacier, and Lava — collecting coins to unlock 26 ball " +
          "skins (including animal buddies like a cat, dog, and rabbit) and " +
          "permanent power-ups like shields, extra lives, and a coin magnet.",
        tags: [
          "Platformer",
          "Physics",
          "Checkpoints",
          "Shop",
          "Power-ups",
          "Achievements",
        ],
        stats: [
          { value: "20", label: "Levels" },
          { value: "4", label: "Worlds" },
          { value: "26", label: "Skins" },
          { value: "3", label: "Languages" },
        ],
        cta: {
          type: "link",
          href: "https://play.google.com/store/apps/details?id=com.ballstudio.escapefromball",
          label: "Download on Google Play ↗",
        },
      },
      {
        title: "Arcane Spheres",
        badges: [
          { variant: "type", label: "Game" },
          { variant: "live", label: "● Available" },
          { variant: "platform", label: "Android" },
        ],
        description:
          "A competitive 3D marble battler with elemental spheres. Choose from " +
          "11 unique spheres across 8 elements and battle in four distinct " +
          "modes: knock rivals off a floating arena in real-time combat, get " +
          "your sphere closest to the central hole in bocce-style Proximity " +
          "mode, race through 50 procedurally-generated runner levels, or " +
          "push your limit in Endless mode. Earn shards in-game to unlock " +
          "spheres and cosmetic skins — no real-money purchases required.",
        tags: ["Battle", "Physics", "Race", "Endless", "Upgrades"],
        stats: [
          { value: "50", label: "Levels" },
          { value: "11", label: "Spheres" },
          { value: "4", label: "Modes" },
          { value: "3", label: "Languages" },
        ],
        cta: {
          type: "link",
          href: "https://play.google.com/store/apps/details?id=com.ballstudio.ArcaneSpheres",
          label: "Download on Google Play ↗",
        },
      },
    ],
  },
];
