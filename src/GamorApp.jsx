import MainBoard from "./components/Main/MainBoard";
import ModalLogin from "./components/Generals/ModalLogin";
import Navbar from "./components/Navbar/Navbar";
import { ToggleButton } from "./components/Generals/ToggleButton";
import TrendingCategories from "./components/Trending/TrendingCategories";
import { AuthProvider } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ModalProvider } from "./context/ModalContext";
import "./styles/main.css";

function GamorApp() {

  return (
    <DarkModeProvider>
      <AuthProvider>
        <ModalProvider>
          <Navbar />
          <MainBoard />
          <TrendingCategories />
          <ToggleButton />
          <ModalLogin />
        </ModalProvider>
      </AuthProvider>
    </DarkModeProvider>
  );
}

export default GamorApp;
