import { teamsGroups } from "../../../data/teamsGroups";
import "../../../styles/Main/RightBoard/RightBoard.css";
import { StepPlatforms } from "../StepPlatforms";

export const RightBoard = () => {
    return (
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
                                            <div
                                                key={index}
                                                className="team-avatar"
                                                style={{
                                                    backgroundColor: `#${Math.floor(
                                                        Math.random() * 16777215
                                                    ).toString(16)}`,
                                                }}
                                            >
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
    );
};
