import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ArticleCard from '../../components/News/ArticleCard';
import FilterBar from '../../components/News/FilterBar';
import articleList from './articles'



class NewsPage extends Component {
  render() {
    return (
      <main className='max-w-screen-xl mx-auto'>
        <section className="py-24 justify-center text-center">
          <h1 className='py-2'>News and Insights</h1>
          <p className="text-xl">Spilling the Beans on IoT and Industry Secrets</p>
        </section>
        <section>
          <div className='mb-12'>
            <FilterBar />
          </div>

              <div className='flex flex-row flex-wrap justify-center items-baseline gap-8 h-auto mb-24'>
                {articleList.map((article) => (
                <Link className="no-underline text-gray-900 hover:text-gray-900" to={"/news/"+ article.key}>
                  <ArticleCard {...article}/>
                </Link>))}
              </div>            

          
        </section>
        

      </main>
      
    );
  }
}

export default NewsPage;
