import { useState } from "react";
import CardSelect from "./CardSelect";
import CardForm from "./CardForm";
import EnvelopeView from "./EnvelopeView";
import type { CardType } from "./cardConfigs";

export default function App() {
  const [step, setStep] = useState<"select" | "form" | "envelope">("select");
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [letter, setLetter] = useState<{
    recipient: string;
    message: string;
    sender: string;
  } | null>(null);

  return (
    <div
      className="
      min-h-screen w-full
      flex items-center justify-center
      bg-gradient-to-br from-[#93E5FF] to-[#C4C1FF]
      "
    >
      {/* SCREEN 1 – SELECT */}
      {step === "select" && (
        <CardSelect
          onSelect={(type) => {
            setSelectedCard(type);
            setStep("form");
          }}
        />
      )}

      {/* SCREEN 2 – FORM */}
      {step === "form" && selectedCard && (
        <CardForm
          cardType={selectedCard}
          onBack={() => setStep("select")}
          onSubmit={(data) => {
            setLetter(data);
            setStep("envelope");
          }}
        />
      )}

      {/* SCREEN 3 – ENVELOPE */}
      {step === "envelope" && selectedCard && letter && (
        <EnvelopeView
          cardType={selectedCard}
          recipient={letter.recipient}
          message={letter.message}
          sender={letter.sender}
        />
      )}
    </div>
  );
}
