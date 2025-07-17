import { useEffect, useState } from "react";
import Card from "./Card";
import "./Newspaper.css";
function NewsApp() {
  const [searchTerm, setSearchTerm] = useState("nepal");
  const [data, setData] = useState([]);

  const API_KEY = "413278d3bb4c48e484569216f788d821";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
    );
    const jsondata = await response.json();
    console.log(jsondata.articles);
    setData(jsondata.articles);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const userInput = (e) => {
    setSearchTerm(e.target.value);
    getData();
  };

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
          <input
            type="text"
            placeholder="Search News"
            onChange={handleInput}
            value={searchTerm}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="category-buttons">
        <button onClick={userInput} value={"sports"}>
          Sports
        </button>
        <button onClick={userInput} value={"politics"}>
          Politics
        </button>
        <button onClick={userInput} value={"entertainment"}>
          Entertainment
        </button>
        <button onClick={userInput} value={"health"}>
          Health
        </button>
        <button onClick={userInput} value={"fitness"}>
          Fitness
        </button>
      </div>

      <div className="news-cards">
        <Card data={data} />
      </div>
    </div>
  );
}

export default NewsApp;
