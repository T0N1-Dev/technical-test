
import {RoundButton} from "./RoundButton"
import "../styles/MainBoard.css"
import { Timer } from "./Timer"
import { useDarkMode } from "../context/DarkModeContext"
import { StepPlatforms } from "./StepPlatforms"
import { teamsGroups } from "../data/teamsGroups"
import { useModal } from "../context/ModalContext"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

const MainBoard = () => {
  const { darkMode } = useDarkMode()
  const { openModal } = useModal();
  const { isAuthenticated } = useAuth();
  const [joined, setjoined] = useState(false);

  return (
    <div className="main-board">
      {/* Left Panel - Welcome Section */}
      <div className="welcome-panel">
        <div className="welcome-content">
          <h1 className="welcome-title">
            <span className="text-without-color">start</span>
            <span className="text-with-color">streaming</span>
            <span className="text-without-color">games</span>
            <span className="text-without-color">differently</span>
          </h1>
          <p className="welcome-subtitle">
            gamor now has <span className="underlined" style={darkMode ? { color: "white" } : null}>stream party</span> platform
          </p>
          {}
          <div className="auth-buttons">
            <button className={`btn-create ${isAuthenticated && 'disabled'}`}>Create account</button>
            <button className={`btn-signin ${isAuthenticated && 'disabled'}`} onClick={openModal}>Sign in</button>
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
            <RoundButton onClick={isAuthenticated ? setjoined : openModal}/>
          </div>

          <div className="character-container">
            
            <div className={`character-image ${darkMode && 'opacity-0'}`}>
              <video src="https://res.cloudinary.com/dmfs1od9n/video/upload/v1745619479/Untitled_design_3_oo3v9s.mp4" width={800} height={800} autoPlay muted loop>
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
              
            <div className={`character-image-dark ${!darkMode && 'opacity-0'}`} >
              <video src="https://res.cloudinary.com/dmfs1od9n/video/upload/v1746031307/374016664642080777_sgrrvu.mp4" width={800} height={800} autoPlay muted loop>
                Tu navegador no soporta videos HTML5.
              </video>
            </div>

            <div className="character-thumbnail vector">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1745706295/pngfind.com-fortnite-skin-png-967121_pj7ack.png" alt="vector-image" />
            </div>
            <div className="character-thumbnail jake">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1745706298/pngfind.com-fortnite-skin-png-288383_xd60p9.png" alt="jake-img" />
            </div>
            <div className="character-thumbnail hug">
              <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1745707867/pngimg.com_-_fortnite_PNG19_igb5sa.png" alt="hug-img" />
            </div>
            {
              isAuthenticated && joined && (
                <div className="character-thumbnail user-avatar">
                  <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1746040796/9e403ca851793c2b81a37bb383c3885d_pqakzf.png" alt="user-img" />
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* Right Panel - Game Selection */}
      <div className="selection-panel">
        <div className="selection-content">
          <StepPlatforms />
          
          <div className="step">
            <span className="step-number">02.</span>
            <h3 className="step-title">Searching Game</h3>

            <div className="game-search">
              <div className="game-header">
                <span className="game-name">COD Warzone</span>
                <span className="game-settings">⋮⋮</span>
              </div>

              <div className="teams-list">
                {teamsGroups.map((team) => (
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
