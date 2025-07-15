import "./NewsCard.css";

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toDateString()}
        </p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
