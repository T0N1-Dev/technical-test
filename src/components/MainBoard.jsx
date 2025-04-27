import { useState, useEffect } from "react"
import {RoundButton} from "./RoundButton"
import "../styles/MainBoard.css"
import { Timer } from "./Timer"

const MainBoard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Party")

  const teams = [
    { id: 1, name: "Dr Team", members: ["https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_2.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_18.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_19.png"] },
    { id: 2, name: "Mia Plays", members: ["https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_4.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_21.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png"] },
    { id: 3, name: "Keoxer", members: ["https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_7.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_9.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_23.png"] },
    { id: 4, name: "Nicknemo", members: ["https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_15.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png", "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_22.png"] },
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
          <div className="decorative-lines">
            <svg width="250" height="250" viewBox="0 0 150 150">
              <circle className="circle-decorative-left" cx="70" cy="80" r="70"/>
            </svg>
            <svg width="250" height="250" viewBox="0 0 150 150">
              <circle className="circle-decorative-left" cx="70" cy="80" r="70"/>
            </svg>
            <svg width="250" height="250" viewBox="0 0 150 150">
              <circle className="circle-decorative-left" cx="70" cy="80" r="70"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Center Panel - Featured Game */}
      <div className="featured-panel">
        <div className="featured-content">
          <h2 className="featured-title">Fortnite New Season</h2>
          <p className="featured-subtitle">Join Live Stream</p>

          <div className="timer-center">
            <Timer />
            <RoundButton />
          </div>

          <div className="character-container">
            <div className="character-image">
              <video src="https://res.cloudinary.com/dmfs1od9n/video/upload/v1745619479/Untitled_design_3_oo3v9s.mp4" width={800} height={800} autoPlay muted loop>
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
            <div className="character-thumbnail vector">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1745706295/pngfind.com-fortnite-skin-png-967121_pj7ack.png" alt="vector-image" />
            </div>
            <div className="character-thumbnail jake">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1745706298/pngfind.com-fortnite-skin-png-288383_xd60p9.png" alt="jake-img" />
            </div>
            <div className="character-thumbnail hug">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1745707867/pngimg.com_-_fortnite_PNG19_igb5sa.png" alt="hug-img" />
            </div>
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
                        <div key={index} className="team-avatar" style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                          <img src={`${avatar}`} alt={`avatar-${index}`} />
                        </div>
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
