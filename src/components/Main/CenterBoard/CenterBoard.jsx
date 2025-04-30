import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useModal } from "../../../context/ModalContext";
import { Timer } from "../Timer";
import { RoundButton } from "../../Generals/RoundButton";
import "../../../styles/Main/CenterBoard/CenterBoard.css";

export const CenterBoard = () => {
    const { darkMode } = useDarkMode()
    const { openModal } = useModal();
    const { isAuthenticated } = useAuth();
    const [joined, setjoined] = useState(false);

  return (
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
  )
}
