import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import { ToggleButton } from "./components/ToggleButton";
import TrendingCategories from "./components/TrendingCategories";
import "./styles/main.css";

function GamorApp() {
  return (
    <main>
      <Navbar />
      <MainBoard />
      <TrendingCategories />
      <ToggleButton />
    </main>
  );
}

export default GamorApp;
