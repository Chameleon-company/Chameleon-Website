import React, { Component } from "react";
import ArticleCard from "../../components/news/articleCard";
import FilterBar from "../../components/news/filterBar";
import articleList from "./articles";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articleList,
      loading: false,
    };

    // Debounce the handleScroll function to improve performance
    this.debouncedHandleScroll = debounce(this.handleScroll, 200);
    window.addEventListener("scroll", this.debouncedHandleScroll);
  }

  componentWillUnmount() {
    // Remove the debounced event listener when the component is unmounted
    window.removeEventListener("scroll", this.debouncedHandleScroll);
  }

  handleScroll = () => {
    const { loading } = this.state;
    const scrollThreshold = document.body.offsetHeight - 0.8 * window.innerHeight;

    if (!loading && window.scrollY >= scrollThreshold) {
      this.loadMoreArticles();
    }
  };

  loadMoreArticles = () => {
    // Simulate loading by setting loading to true
    this.setState({ loading: true });

    setTimeout(() => {
      // Simulating loading 5 articles at a time
      const repeatedArticles = Array.from({ length: 5 }, () => this.state.articles).flat();

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...repeatedArticles],
        loading: false,
      }));
    }, 20); // Simulating a delay
  };

  render() {
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

          <div className="flex flex-row flex-wrap justify-around items-baseline h-auto mb-24">
            {this.state.articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          {this.state.loading && <div className="spinner">Loading more articles...</div>}
        </section>
      </main>
    );
  }
}

export default News;
