import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import { ToggleButton } from "./components/ToggleButton";
import TrendingCategories from "./components/TrendingCategories";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./styles/main.css";

function GamorApp() {

  return (
    <DarkModeProvider>
      <main>
        <Navbar />
        <MainBoard />
        <TrendingCategories />
        <ToggleButton />
      </main>
    </DarkModeProvider>
  );
}

export default GamorApp;
