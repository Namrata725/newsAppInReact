import "./card.css";
function Card({ data }) {
  const readMore = (url) => {
    window.open(url);
  };
  return (
    <div className="card-container">
      {data.map((article, index) => {
        return (
          <div className="card" key={index}>
            <img src={article.urlToImage} />
            <div className="cardContainer">
              <a>{article.title}</a>
              <p>{article.description}</p>
              <button onClick={() => readMore(article.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
