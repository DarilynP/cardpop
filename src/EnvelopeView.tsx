import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

import type { CardType } from "./cardConfigs";
import { cardConfigs } from "./cardConfigs";
import ShareModal from "./ShareModal";

interface EnvelopeViewProps {
  cardType: CardType;
  recipient: string;
  message: string;
  sender: string;
}

export default function EnvelopeView({
  cardType,
  recipient,
  message,
  sender,
}: EnvelopeViewProps) {
  const cfg = cardConfigs[cardType];

  const [isOpen, setIsOpen] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const shareURL = `${window.location.origin}?type=${cardType}&to=${encodeURIComponent(
    recipient
  )}&msg=${encodeURIComponent(message)}&from=${encodeURIComponent(sender)}`;

  // 🎉 Confetti when envelope opens
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 70,
        gravity: 0.8,
        origin: { y: 0.6 },
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
      <h1
        className={`${cfg.colors.accent} text-3xl font-bold uppercase tracking-wide drop-shadow`}
      >
        Tap Envelope 💌
      </h1>

      {/* Wrapper so letter is anchored to card, not whole screen */}
      <div className="relative w-80 h-72 flex items-center justify-center">

        {/* ✉️ Envelope */}
        <motion.div
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-80 h-56 cursor-pointer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Envelope body */}
          <div
            className={`absolute inset-0 rounded-xl border-8 ${cfg.colors.cardBorder}
            bg-gradient-to-br ${cfg.colors.envelope} shadow-xl`}
          />

          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 origin-top"
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{ duration: 0.55 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className={`absolute inset-0
                border-t-[110px] border-l-[160px] border-r-[160px]
                border-transparent ${cfg.colors.flap}`}
            />
          </motion.div>
        </motion.div>

        {/* 📜 Letter – appears in front of card when open, disappears when closed */}
    {/* 📜 LETTER */}
<AnimatePresence>
  {isOpen && !showShare && (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className={`absolute w-72 z-30
        border-8 ${cfg.colors.cardBorder}
        rounded-xl shadow-2xl ${cfg.colors.paper}`}
    >
      <div className="p-5 text-gray-700 text-sm leading-relaxed">
        <p className="text-center font-bold mb-3">{cfg.greeting}</p>

        <p>
          Dear <b>{recipient}</b>,
        </p>

        <p className="italic my-3">{message}</p>

        <p>
          With love,
          <br />
          <b>{sender}</b>
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>

      {/* Share button only shows when card is open */}
      {isOpen && (
        <button
          onClick={() => setShowShare(true)}
          className={`px-6 py-3 rounded-lg text-white border-4 ${cfg.colors.cardBorder}
            ${cfg.colors.buttonBg} ${cfg.colors.buttonHover}
            font-bold uppercase tracking-wide`}
        >
          Share Card 🔗
        </button>
      )}

      {/* Share modal – closing it also closes the letter/envelope */}
      {showShare && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative">
            <ShareModal cardType={cardType} url={shareURL} />
            <button
              onClick={() => {
                setShowShare(false);
                setIsOpen(false); // 👈 close the envelope + hide letter
              }}
              className="absolute -top-4 -right-4 bg-white border border-gray-400 rounded-full px-2 py-1 font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
