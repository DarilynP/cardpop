import { useState } from "react";
import { cardConfigs } from "./cardConfigs";
import type { CardType } from "./cardConfigs";

interface CardFormProps {
  cardType: CardType;
  onBack: () => void;
  onSubmit: (data: {
    recipient: string;
    message: string;
    sender: string;
  }) => void;
}

export default function CardForm({ cardType, onBack, onSubmit }: CardFormProps) {
  const cfg = cardConfigs[cardType];

  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState(cfg.defaultMessage);
  const [sender, setSender] = useState("");

  const formReady = recipient.trim() !== "" && sender.trim() !== "";

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        className={`${cfg.colors.cardBg} border-8 ${cfg.colors.cardBorder} p-10 rounded-2xl shadow-2xl max-w-xl w-full`}
      >
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-2">{cfg.emoji}</div>

          <h1 className={`${cfg.colors.accent} text-2xl font-bold uppercase tracking-wider`}>
            {cfg.title} Card
          </h1>

          <p className="text-gray-600 text-sm">
            Fill out your message below 💌
          </p>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-6">
          {/* Recipient */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Recipient Name
            </label>
            <input
              className="w-full p-3 border-4 border-gray-300 rounded-lg"
              placeholder="Name…"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full p-3 border-4 border-gray-300 rounded-lg resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Sender */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              From
            </label>
            <input
              className="w-full p-3 border-4 border-gray-300 rounded-lg"
              placeholder="Your name…"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-300 hover:bg-gray-400 border-4 border-gray-400 rounded-lg font-bold uppercase tracking-wide"
          >
            ← Back
          </button>

          <button
            disabled={!formReady}
            onClick={() => onSubmit({ recipient, message, sender })}
            className={`flex-1 px-6 py-3 text-white font-bold uppercase tracking-wide rounded-lg border-4 ${cfg.colors.cardBorder} ${cfg.colors.buttonBg} ${cfg.colors.buttonHover} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            Create Card →
          </button>
        </div>
      </div>
    </div>
  );
}
