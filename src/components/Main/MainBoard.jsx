
import { LeftBoard } from "./LeftBoard/LeftBoard";
import "../../styles/Main/MainBoard.css"
import { CenterBoard } from "./CenterBoard/CenterBoard";
import { RightBoard } from "./RightBoard/RightBoard";

const MainBoard = () => {

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
}

export default MainBoard
