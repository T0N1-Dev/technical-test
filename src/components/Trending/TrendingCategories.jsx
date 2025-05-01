import { useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { categoriesGames } from "../../data/categoriesGames";
import "../../styles/Trending/TrendingCategories.css";

export const TrendingCategories = () => {
  const [activeCategory, setActiveCategory] = useState("07")
  const { darkMode } = useDarkMode();
  const categories = categoriesGames;

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Categories</h1>
      <div className="trending-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
            style={activeCategory === category.id ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,1)), url(${category.img})`,
            } : {}}
          >
            <div className="category-header">
              <span className="category-id"> /{category.id} </span>
            </div>
            <div className="category-content">
              <h3 className="category-name">{category.label || category.name}</h3>
              <div className="arrow-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill={activeCategory === category.id || darkMode ? "var(--dark-text-color)" : "var(--dark-color-btn)"}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

