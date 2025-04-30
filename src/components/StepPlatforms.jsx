import { useState } from "react";


export const StepPlatforms = () => {

  const [selectedPlatform, setSelectedPlatform] = useState("Party");

  return (
    <div className="step">
        <span className="step-number">01.</span>
        <h3 className="step-title">Choose Platform</h3>

        <div className="platform-options">
            <button
            className={`platform-btn ${selectedPlatform === "Party" ? "active" : ""}`}
            onClick={() => setSelectedPlatform("Party")}
            >
            🎉 Party
            </button>
            <button
            className={`platform-btn ${selectedPlatform === "Matchs" ? "active" : ""}`}
            onClick={() => setSelectedPlatform("Matchs")}
            >
            ⚔️ Matchs
            </button>
            <button
            className={`platform-btn ${selectedPlatform === "Streams" ? "active" : ""}`}
            onClick={() => setSelectedPlatform("Streams")}
            >
            🎥 Streams
            </button>
        </div>
    </div>
  )
}
