import { QRCodeSVG } from "qrcode.react";
import type { CardType } from "./cardConfigs";
import { cardConfigs } from "./cardConfigs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface ShareModalProps {
  cardType: CardType;
  url: string;
}

export default function ShareModal({ cardType, url }: ShareModalProps) {
  const cfg = cardConfigs[cardType];
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={`p-8 border-8 ${cfg.colors.cardBorder} ${cfg.colors.cardBg} rounded-xl shadow-xl`}
    >
      <h2 className={`${cfg.colors.accent} text-xl font-bold uppercase mb-4 text-center`}>
        Share This Card ✨
      </h2>

      <div className="flex flex-col items-center gap-4">
        <QRCodeSVG value={url} size={150} />

        <div className="flex gap-2 items-center">
          <input
            readOnly
            value={url}
            className="border-4 border-gray-300 px-3 py-2 rounded-lg w-64"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className={`px-3 py-2 text-white rounded-lg border-4 ${cfg.colors.cardBorder}
              ${cfg.colors.buttonBg} ${cfg.colors.buttonHover}`}
          >
            {copied ? <Check /> : <Copy />}
          </button>
        </div>
      </div>
    </div>
  );
}
