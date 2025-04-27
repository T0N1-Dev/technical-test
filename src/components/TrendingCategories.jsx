import { useState } from "react";
import "../styles/TrendingCategories.css";

const categories = [
  { id: "01", name: "Action Games", color: "#FF8A65", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745769809/collage-maker-15-aug-2023-09-00-pm-3219_deq6ts.avif" },
  { id: "02", name: "Sports Games", color: "#64B5F6", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745769892/sport_games_jlidhg.webp" },
  { id: "03", name: "Adventure Games", color: "#E57373", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745769985/Adventure_Games_yopips.avif" },
  { id: "04", name: "Arcade Games", color: "#81C784", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745770082/Arcade_Games_ercudc.jpg" },
  { id: "05", name: "Fantasy Game", color: "#BA68C8", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745770101/Fantasy_games_ckdmeq.avif" },
  { id: "06", name: "Strategy Game", color: "#4FC3F7", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745770211/Strategy_Games_w0dlep.avif" },
  { id: "07", name: "Shooter Games", color: "#9575CD", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1745770221/shooter-games_r2zyor.webp" },
  { id: "VIEW ALL", name: "All Categories", label: "All Categories", color: "#90A4AE", img: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1740412660/photo_2025-02-24_10-57-07_f1mrcy.jpg" },
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

