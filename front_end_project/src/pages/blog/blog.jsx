import React, { Component } from 'react';
import BlogCard from '../../components/blog/blogCard';
import FilterBar from '../../components/blog/filterBar';
import articleList from './articles'







class Blog extends Component {
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

          <div className='flex flex-row flex-wrap justify-around items-center h-auto mb-8'>
            {articleList.map((article) => <BlogCard {...article}/>)}
          </div>
        </section>
        

      </main>
      
    );
  }
}

export default Blog;
