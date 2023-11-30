import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/news/ArticleCard";
import FilterBar from "../../components/news/FilterBar";
import articleList from "./articles";

class News extends Component {
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
            {articleList.map((articles) => (
              <Link id={articles.id} to={`/article/${articles.id}`}>
                <ArticleCard {...articles} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default News;
