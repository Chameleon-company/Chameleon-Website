import React, { useState, useEffect, useRef } from "react";
import ArticleCard from "../../components/news/articleCard";
import FilterBar from "../../components/news/filterBar";
import articleList from "./articles";


/**
 * News Component
 *
 * This component is responsible for rendering a news and insights section on a web page.
 * It displays a list of articles with an infinite scroll feature, allowing users to load
 * more articles as they scroll down the page. The articles are currently sourced from a
 * predefined list but will be fetched from a database in the future.
 *
 * Key Features:
 * - Displaying news and insights.
 * - Infinite scrolling to load more articles.
 * - Contains a FilterBar component for searching, sorting, and filtering articles.
 *
 * Note: The component simulates article loading with a delay and is intended to be
 * integrated with a backend to fetch articles from a database in a production environment.
 */

function News() {

  // State variables to manage articles, loading state, and current article index
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentArticleIndex = useRef(0);


  // Function to load more articles when the user scrolls
  const loadMoreArticles = () => {

    if (loading) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const startIndex = currentArticleIndex.current;
      const endIndex = startIndex + 3;
      const newArticles = articleList.slice(startIndex, endIndex);

      // Append new articles to the existing ones
      setArticles((prevArticles) => [...prevArticles, ...newArticles]); // Append more articles
      setLoading((loading) => loading = false);
      currentArticleIndex.current = endIndex;
    }, 1000); // Simulated delay for loading
  };

   // Function to handle scrolling and trigger loading more articles
   const handleScroll = () => {
    if (!loading) {
      const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight;;
      if (window.scrollY >= scrollThreshold) {
        loadMoreArticles();
      }
    }
  };

  // useEffect runs when this component mounts
  useEffect(() => {
    
    loadMoreArticles(); // Load the initial set of articles when the component mounts
    window.addEventListener("scroll", handleScroll);  // Add a scroll event listener to detect when the user scrolls

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only on mount

  
 

  


    return (
      <main className="max-w-screen-xl mx-auto">
        <section className="py-24 justify-center text-center">
          <h1 className="py-2">News and Insights</h1>
          <p className="text-xl">
            Spilling the Beans on IoT and Industry Secrets
          </p>
        </section>
        <section>
          <div className="mb-12">
            <FilterBar />
          </div>

          <div className="flex flex-row flex-wrap justify-center items-baseline h-auto mb-24">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          {loading && <div className="text-center my-32">Loading articles...</div>}

        </section>
      </main>
    );
  }

export default News;
