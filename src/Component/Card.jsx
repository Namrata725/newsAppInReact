import "./card.css";

function Card({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className="no-articles">No articles to display.</div>;
  }

  return (
    <div className="card-container">
      {data.map((article, index) => {
        if (!article.urlToImage) return null;

        return (
          <div className="card" key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <div className="cardContainer">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.description}</p>
              <button onClick={() => window.open(article.url)}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
