import { useState } from "react";
import "../styles/TrendingCategories.css";

const categories = [
  { id: "01", name: "Action Games", color: "#FF8A65" },
  { id: "02", name: "Sports Games", color: "#64B5F6" },
  { id: "03", name: "Adventure Games", color: "#E57373" },
  { id: "04", name: "Arcade Games", color: "#81C784" },
  { id: "05", name: "Fantasy Game", color: "#BA68C8" },
  { id: "06", name: "Strategy Game", color: "#4FC3F7" },
  { id: "07", name: "Shooter Games", color: "#9575CD" },
  { id: "view", name: "All Categories", label: "VIEW ALL", color: "#90A4AE" },
]

export default function TrendingCategories() {
  const [activeCategory, setActiveCategory] = useState("07")

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Categories</h1>
      <div className="trending-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
            style={activeCategory === category.id ? { backgroundColor: category.color, color: "white" } : {}}
          >
            <div className="category-header">
              <span
                className="category-id"
                style={{ color: activeCategory === category.id ? "white" : category.color }}
              >
                /{category.id}
              </span>
            </div>
            <div className="category-content">
              <h3 className="category-name">{category.label || category.name}</h3>
              <div className="arrow-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill={activeCategory === category.id ? "white" : "#333"}
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

