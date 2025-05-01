
import { LeftBoard } from "./LeftBoard/LeftBoard";
import { CenterBoard } from "./CenterBoard/CenterBoard";
import { RightBoard } from "./RightBoard/RightBoard";
import "../../styles/Main/MainBoard.css";

export const MainBoard = () => {

  return (
    <div className="main-board">
      {/* Left Panel - Welcome Section */}
      <LeftBoard />

      {/* Center Panel - Featured Game */}
      <CenterBoard />

      {/* Right Panel - Game Selection */}
      <RightBoard />
    </div>
  )
};
