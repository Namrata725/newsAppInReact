import Card from "./Card";
import "./Newspaper.css"; // Assuming you have a CSS file for styling
function NewsApp() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>Trendy Name</h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">All News</a>
          </li>
          <li>
            <a href="#">Trendy News</a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search News" />
          <button>Search</button>
        </div>
      </nav>

      <div className="category-buttons">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>

      <div className="news-cards">
        <Card />
      </div>
    </div>
  );
}

export default NewsApp;
