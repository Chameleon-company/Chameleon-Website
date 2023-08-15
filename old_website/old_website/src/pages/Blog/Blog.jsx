import React from 'react'
import BlogHeading from './Components/BlogHeading'
import BlogCards from './Components/BlogCards'

import './Components/BlogHeading.css'


function Blog() {
  return (
    <div className='bgground'>
      <div className='blog' >
      
        <BlogHeading/>
        <div className='searchalign'>
          <form>
            <input type="search" placeholder="Search..."/>
            <button type="submit">Search</button>
          </form>

        </div>
        
        
        <BlogCards/>
        
        <button className='SeeMoreBtn'> See More</button>
        
        
      </div>

    </div>
    
  )
}

export default Blog

