import { useAuth } from "../../../context/AuthContext";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useModal } from "../../../context/ModalContext";
import "../../../styles/Main/LeftBoard/LeftBoard.css";

export const LeftBoard = () => {
    const { darkMode } = useDarkMode()
    const { openModal } = useModal();
    const { isAuthenticated } = useAuth();

    return (
        <div className="welcome-panel">
            <div className="welcome-content">
                <h1 className="welcome-title">
                    <span className="text-without-color">start</span>
                    <span className="text-with-color">streaming</span>
                    <span className="text-without-color">games</span>
                    <span className="text-without-color">differently</span>
                </h1>
                <p className="welcome-subtitle">
                    gamor now has{' '}
                    <span
                        className="underlined"
                        style={darkMode ? { color: 'white' } : null}
                    >
                        stream party
                    </span>{' '}
                    platform
                </p>
                <div className="auth-buttons">
                    <button
                        className={`btn-create ${isAuthenticated && 'disabled'}`}
                    >
                        Create account
                    </button>
                    <button
                        className={`btn-signin ${isAuthenticated && 'disabled'}`}
                        onClick={openModal}
                    >
                        Sign in
                    </button>
                </div>
                <div className="decorative-lines">
                    <svg width="250" height="250" viewBox="0 0 150 150">
                        <circle
                            className="circle-decorative-left"
                            cx="70"
                            cy="80"
                            r="70"
                        />
                    </svg>
                    <svg width="250" height="250" viewBox="0 0 150 150">
                        <circle
                            className="circle-decorative-left"
                            cx="70"
                            cy="80"
                            r="70"
                        />
                    </svg>
                    <svg width="250" height="250" viewBox="0 0 150 150">
                        <circle
                            className="circle-decorative-left"
                            cx="70"
                            cy="80"
                            r="70"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
