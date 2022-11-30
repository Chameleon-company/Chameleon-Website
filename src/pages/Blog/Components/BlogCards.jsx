import React from 'react'

import Blogcard from '../../../components/Blogcard/Blogcard'
import Blogs from '../../../data/BlogData'
import './BlogHeading.css'


function blogCard(blog){
    return(
    <Blogcard
        key={blog.id}
        link={blog.imgURL}
        name={blog.name}
    />
    );

}


function BlogCards() {
  return (
    <div className = 'blogCard'>
        {Blogs.map(blogCard)}
<<<<<<< HEAD
=======
        
      </div>
      
>>>>>>> 799be76e5fcc41e8c05bc06c60a276616170aed4
    </div>
  )
}

export default BlogCards