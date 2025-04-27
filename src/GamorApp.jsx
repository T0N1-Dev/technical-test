import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import TrendingCategories from "./components/TrendingCategories";
import "./styles/main.css";

function GamorApp() {
  return (
    <main>
      <Navbar />
      <MainBoard />
      <TrendingCategories />
    </main>
  );
}

export default GamorApp;
