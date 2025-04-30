import MainBoard from "./components/MainBoard";
import ModalLogin from "./components/ModalLogin";
import Navbar from "./components/Navbar";
import { ToggleButton } from "./components/ToggleButton";
import TrendingCategories from "./components/TrendingCategories";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ModalProvider } from "./context/ModalContext";
import "./styles/main.css";

function GamorApp() {

  return (
    <DarkModeProvider>
      <ModalProvider>
        <Navbar />
        <MainBoard />
        <TrendingCategories />
        <ToggleButton />
        <ModalLogin />
      </ModalProvider>
    </DarkModeProvider>
  );
}

export default GamorApp;
