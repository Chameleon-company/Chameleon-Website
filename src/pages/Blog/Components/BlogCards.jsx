import React from 'react'
import Card from '../../../components/card/Card'
import Blogs from '../../../data/BlogData'
import './BlogHeading.css'


function blogCard(blog){
    return(
    <Card
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
    </div>
  )
}

export default BlogCards