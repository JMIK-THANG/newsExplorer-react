import React, { useState } from "react";
import "./Main.css"
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NewsGrid from "../NewsGrid/NewsGrid";
import About from "../About/About";
import notfoundImg from "../../assets/notfound.svg";
import { fetchNews } from "../../utils/api";

const Main = ({ isLoggedIn, handleLogout, handleSigninClick}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setIsLoading(true);
    setCurrentPage(1);
    try {
      const { articles, totalResults } = await fetchNews(query, 3, 1);
      setSearchResults(articles);
      setTotalResults(totalResults);
      setError(null);
    } catch (err) {
      setError("Error fetching news. Please try again.");
      setSearchResults([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = async () => {
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const { articles } = await fetchNews(searchQuery, 3, nextPage);
      setSearchResults((prev) => [...prev, ...articles]);
      setCurrentPage(nextPage);
      setError(null);
    } catch (err) {
      setError("Error loading more articles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const moreArticles = searchResults.length < totalResults;

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        onSearch={handleSearch}
        handleLogout={handleLogout}
        handleSigninClick={handleSigninClick}
      />
      {isLoading && <Preloader />}
      {!isLoading && searchResults.length > 0 && (
        <NewsGrid
          searchResults={searchResults}
          onShowMore={handleShowMore}
          moreArticles={moreArticles}
        />
      )}
      {!isLoading && searchResults.length === 0 && searchQuery && (
        <div className="no-results">
          <img src={notfoundImg} alt="not found image" />
          <h1>Nothing found</h1>
          <p>Sorry but nothing matched your search item "{searchQuery}"</p>
        </div>
      )}
      <About />
    </div>
  );
};

export default Main;
