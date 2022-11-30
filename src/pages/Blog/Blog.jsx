import React from 'react'
import BlogHeading from './Components/BlogHeading'
import BlogCards from './Components/BlogCards'

import './Components/BlogHeading.css'


function Blog() {
  return (
<<<<<<< HEAD
    <div>
      <BlogHeading/>
      <BlogCards/>
    </div>
=======
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
    
>>>>>>> 799be76e5fcc41e8c05bc06c60a276616170aed4
  )
}

export default Blog

