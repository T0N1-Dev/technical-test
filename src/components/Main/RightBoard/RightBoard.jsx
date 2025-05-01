import { useAuth } from "../../../context/AuthContext";
import { useModal } from "../../../context/ModalContext";
import { teamsGroups } from "../../../data/teamsGroups";
import { addAvatarList } from "../../../helper/addAvatarList";
import { StepPlatforms } from "./StepPlatforms";
import "../../../styles/Main/RightBoard/RightBoard.css";
import { useState } from "react";

export const RightBoard = () => {

    const { user, isAuthenticated } = useAuth();
    const { openModal } = useModal();
    const { backgroundColor, imageUrl } = user || {};

    const [teams, setTeams] = useState(teamsGroups);

    const handleAdd = (id) => {
        const updatedTeams = addAvatarList(id, {backgroundColor, imageUrl}, teams);
        setTeams(updatedTeams);
    };

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
                            {teams.map(({ id, name, members}) => (
                                <div key={id} className="team-item">
                                    <span className="team-number">{id}</span>
                                    <span className="team-name">{name}</span>
                                    <div className="team-avatars">
                                        {members.map((avatar, index) => (
                                            <div
                                                key={index}
                                                className="team-avatar"
                                                style={{ backgroundColor: avatar.backgroundColor }}
                                            >
                                                <img src={`${avatar.imageUrl}`} alt={`avatar-${index}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        className="add-btn" 
                                        onClick={() => 
                                            isAuthenticated ? handleAdd(id) : openModal() 
                                        }
                                    >
                                        +
                                    </button>
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
