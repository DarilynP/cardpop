import { cardConfigs } from "./cardConfigs";
import type { CardType } from "./cardConfigs";


interface CardSelectProps {
  onSelect: (type: CardType) => void;
}

export default function CardSelect({ onSelect }: CardSelectProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white/80 border-8 border-purple-200 p-10 rounded-2xl shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-purple-600 mb-10 tracking-wider uppercase">
          Choose a Card
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(Object.keys(cardConfigs) as CardType[]).map((type) => {
            const cfg = cardConfigs[type];

            return (
              <button
                key={type}
                onClick={() => onSelect(type)}
                className={`p-8 ${cfg.colors.cardBg} border-4 ${cfg.colors.cardBorder} rounded-xl shadow-md hover:scale-105 transition-all`}
              >
                <div className="text-6xl mb-3">{cfg.emoji}</div>
                <h2 className={`${cfg.colors.accent} font-bold uppercase tracking-wide`}>
                  {cfg.title}
                </h2>
                <p className="text-gray-600 text-sm mt-1">Click to select</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
