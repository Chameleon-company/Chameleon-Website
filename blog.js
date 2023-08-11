import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import articleList from '../../components/blog/articles/articleList';
import './blog.css';

function Blog(){
  const navigate =useNavigate()
  const [data,setData]=useState(articleList)
  const [index,setIndex]=useState(0)
  //using map function we get find all category of our articles data 
  const allCategory = ['All' , ...new Set(articleList?.map(e => e.category))]

  //this is a category wise filter function  filter is a higher order  function in javascript 
  function hanldeCategory(e){

    if(e === 'All'){
      setData(articleList)
    }
    else{
      const temp =articleList?.filter((a)=>a?.category === e)
      setData(temp)
    }
  }
    return (
      <div className="blog-container">
        <h1>Latest Blog</h1>
        <div className='container pt-5'>
          {/*we dynamically  display the all category button*/}
          {allCategory?.map((e,i)=><button className={`${i === index ? 'btn btn-light' : 'btn btn-outline-light'} mx-2`} onClick={()=>{hanldeCategory(e);setIndex(i)}}>{e}</button>)}

          <div className='d-flex justify-content-between pt-5'>
           {/*this is our blog card component*/}
           {data?.map((e,i)=>{
            return <div className="card col-lg-4 col-md-4 col-sm-12" style={{ width: '18rem' }} onClick={()=>{navigate(`/blog/${i}`)}} >
            <img  src={e?.image} alt="Card image cap" width={287} height={250}/>
            <div className="card-body">
              <h5 className="card-title">{e?.title}</h5>
              <p className="card-text">{e?.subTitle}</p>
            </div>
              <button  className="btn btn-outline-success mx-4 my-4" onClick={()=>{navigate(`/blog/${i}`)}}>See Detail...</button>
          </div>
           })}
          </div>
        </div>
      </div>
    );
  }

export default Blog;
