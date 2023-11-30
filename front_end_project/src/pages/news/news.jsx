import React, { Component } from "react";
import ArticleCard from "../../components/news/articleCard";
import FilterBar from "../../components/news/filterBar";
import articleList from "./articles";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articleList,
      loading: false,
    };

    // Attaching the event listener to scroll event
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // thsi will remove the event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  //this function is to handle the scroll event
  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !this.state.loading
    ) {
      // when user is near the bottom, load more articles
      this.loadMoreArticles();
    }
  };

  // Function to simulate loading more articles

  loadMoreArticles = () => {
    // Simulate loading by setting loading to true
    this.setState({ loading: true });

    setTimeout(() => {
      const repeatedArticles = [
        ...this.state.articles,
        ...this.state.articles,
        ...this.state.articles,
        // Add more repetitions as required by us
      ];

      this.setState({
        articles: repeatedArticles,
        loading: false,
      });
    }, 100); // Simulating a delay
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

          {this.state.loading && <p>Loading more articles...</p>}
        </section>
      </main>
    );
  }
}

export default News;
