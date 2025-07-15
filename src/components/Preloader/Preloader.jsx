import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="news-preloader">
      <div className="news-preloader__spinner"></div>
      <p className="news-preloader__text">Loading news...</p>
    </div>
  );
};

export default Preloader;
