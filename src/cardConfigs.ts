export type CardType = "birthday" | "thanksgiving" | "christmas" | "newyear";

export interface CardConfig {
  title: string;
  emoji: string;
  colors: {
    envelope: string;
    flap: string;
    seal: string;
    paper: string;
    border: string;
    accent: string;
    cardBg: string;
    cardBorder: string;
    buttonBg: string;
    buttonHover: string;
  };
  defaultMessage: string;
  greeting: string;
}

export const cardConfigs: Record<CardType, CardConfig> = {
  birthday: {
    title: "Birthday",
    emoji: "🎂",
    colors: {
      envelope: "from-pink-300 to-purple-300",
      flap: "border-t-purple-400",
      seal: "bg-amber-200",
      paper: "bg-pink-50 border-pink-200",
      border: "border-purple-300",
      accent: "text-purple-600",
      cardBg: "bg-purple-50",
      cardBorder: "border-purple-200",
      buttonBg: "bg-purple-300",
      buttonHover: "hover:bg-purple-400",
    },
    defaultMessage: "Hope your day is filled with joy and lots of cake!",
    greeting: "★ Happy Birthday! ★",
  },

  thanksgiving: {
    title: "Thanksgiving",
    emoji: "🦃",
    colors: {
      envelope: "from-orange-200 to-amber-300",
      flap: "border-t-orange-400",
      seal: "bg-amber-200",
      paper: "bg-orange-50 border-orange-200",
      border: "border-orange-300",
      accent: "text-orange-700",
      cardBg: "bg-orange-50",
      cardBorder: "border-orange-200",
      buttonBg: "bg-orange-300",
      buttonHover: "hover:bg-orange-400",
    },
    defaultMessage:
      "Wishing you a wonderful Thanksgiving filled with gratitude and delicious food!",
    greeting: "★ Happy Thanksgiving! ★",
  },

  christmas: {
    title: "Christmas",
    emoji: "🎄",
    colors: {
      envelope: "from-red-200 to-green-200",
      flap: "border-t-red-300",
      seal: "bg-green-300",
      paper: "bg-red-50 border-green-200",
      border: "border-red-300",
      accent: "text-red-600",
      cardBg: "bg-red-50",
      cardBorder: "border-red-200",
      buttonBg: "bg-red-300",
      buttonHover: "hover:bg-red-400",
    },
    defaultMessage:
      "Wishing you a Merry Christmas filled with joy, love, and holiday magic!",
    greeting: "★ Merry Christmas! ★",
  },

  newyear: {
    title: "New Year",
    emoji: "🎊",
    colors: {
      envelope: "from-blue-200 to-indigo-200",
      flap: "border-t-indigo-300",
      seal: "bg-amber-200",
      paper: "bg-blue-50 border-indigo-200",
      border: "border-indigo-300",
      accent: "text-indigo-600",
      cardBg: "bg-blue-50",
      cardBorder: "border-indigo-200",
      buttonBg: "bg-indigo-300",
      buttonHover: "hover:bg-indigo-400",
    },
    defaultMessage:
      "Wishing you a Happy New Year filled with new opportunities and wonderful moments!",
    greeting: "★ Happy New Year! ★",
  },
};
