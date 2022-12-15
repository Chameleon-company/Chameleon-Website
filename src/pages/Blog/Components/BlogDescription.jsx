import React from 'react'
import './BlogHeading.css'
import Blogs from '../../../data/BlogData'

function BlogDescription(props) {
    console.log(props.title);
  return (
    <div className='blogdescbgground'>
      <div className='blogdesc' >
        <div className="blogdesccontainer">
            <img className='blogdescimg' src={Blogs[0].imgURL} alt="img"></img>
            <h1><u>{Blogs[0].name}</u></h1>            
        </div>

        <p>Written By: unknown</p>
        <div className='blogdescbar'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sit saepe sapiente, alias numquam odio architecto quaerat exercitationem vero, ad quibusdam ex minima, praesentium magnam quo ullam commodi incidunt nemo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus a natus animi officia ad, ratione doloremque, suscipit soluta eveniet inventore architecto laborum labore illo accusamus quo officiis dolorem hic quisquam dolores iure tempore? Quo, saepe aliquam iusto velit nemo eius accusantium magni, architecto, eum voluptatibus tempora similique maxime quas?</p>

      </div>

    </div>
  )
}

export default BlogDescription