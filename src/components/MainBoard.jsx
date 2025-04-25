import { useState, useEffect } from "react"
import "../styles/MainBoard.css"

const MainBoard = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 45 })
  const [selectedPlatform, setSelectedPlatform] = useState("Party")

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }))
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ minutes: timeLeft.minutes - 1, seconds: 59 })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const teams = [
    { id: 1, name: "Dr Team", members: ["avatar1.png", "avatar2.png"] },
    { id: 2, name: "Mia Plays", members: ["avatar3.png", "avatar4.png"] },
    { id: 3, name: "Keoxer", members: ["avatar5.png", "avatar6.png"] },
    { id: 4, name: "Nicknemo", members: ["avatar7.png", "avatar8.png"] },
  ]

  return (
    <div className="main-board">
      {/* Left Panel - Welcome Section */}
      <div className="welcome-panel">
        <div className="welcome-content">
          <h1 className="welcome-title">
            <span className="text-black">start</span>
            <span className="text-orange">streaming</span>
            <span className="text-black">games</span>
            <span className="text-black">differently</span>
          </h1>
          <p className="welcome-subtitle">
            gamor now has <span className="underlined">stream party</span> platform
          </p>
          <div className="auth-buttons">
            <button className="btn-create">Create account</button>
            <button className="btn-signin">Sign in</button>
          </div>
        </div>
        <div className="decorative-line"></div>
      </div>

      {/* Center Panel - Featured Game */}
      <div className="featured-panel">
        <div className="featured-content">
          <h2 className="featured-title">Fortnite New Season</h2>
          <p className="featured-subtitle">Join Live Stream</p>

          <div className="countdown-timer">
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="separator">:</span>
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>

          <div className="character-container">
            <div className="character-image"></div>
            <div className="character-thumbnail left"></div>
            <div className="character-thumbnail right"></div>
          </div>
        </div>
      </div>

      {/* Right Panel - Game Selection */}
      <div className="selection-panel">
        <div className="selection-content">
          <div className="step">
            <span className="step-number">01.</span>
            <h3 className="step-title">Choose Platform</h3>

            <div className="platform-options">
              <button
                className={`platform-btn ${selectedPlatform === "Party" ? "active" : ""}`}
                onClick={() => setSelectedPlatform("Party")}
              >
                Party
              </button>
              <button
                className={`platform-btn ${selectedPlatform === "Matchs" ? "active" : ""}`}
                onClick={() => setSelectedPlatform("Matchs")}
              >
                Matchs
              </button>
              <button
                className={`platform-btn ${selectedPlatform === "Streams" ? "active" : ""}`}
                onClick={() => setSelectedPlatform("Streams")}
              >
                Streams
              </button>
            </div>
          </div>

          <div className="step">
            <span className="step-number">02.</span>
            <h3 className="step-title">Searching Game</h3>

            <div className="game-search">
              <div className="game-header">
                <span className="game-name">COD Warzone</span>
                <span className="game-settings">⋮⋮</span>
              </div>

              <div className="teams-list">
                {teams.map((team) => (
                  <div key={team.id} className="team-item">
                    <span className="team-number">{team.id}</span>
                    <span className="team-name">{team.name}</span>
                    <div className="team-avatars">
                      {team.members.map((avatar, index) => (
                        <div key={index} className="team-avatar"></div>
                      ))}
                    </div>
                    <button className="add-btn">+</button>
                  </div>
                ))}
              </div>

              <button className="search-btn">Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBoard
