export interface Hobby {
  name: string;
  emoji: string;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    name: "Chess",
    emoji: "♟️",
    description: "Enjoy solving puzzles and playing tactical mid-games for focus and patience."
  },
  {
    name: "Cricket",
    emoji: "🏏",
    description: "Follow international cricket and enjoy playing during weekends with friends."
  },
  {
    name: "Tech Blogging",
    emoji: "🧠",
    description: "Passionate about writing breakdowns of AI tools, model builds, and cloud infra."
  },
  {
    name: "Photography",
    emoji: "📷",
    description: "Capturing landscapes and experimenting with mobile editing tools."
  },
  {
    name: "Gaming & Esports",
    emoji: "🎮",
    description: "Stay active in the competitive gaming scene and follow global esports events."
  },
  {
    name: "Long Walks",
    emoji: "🚶‍♂️",
    description: "Mindful walking helps declutter thoughts and ideate new projects."
  }
];
