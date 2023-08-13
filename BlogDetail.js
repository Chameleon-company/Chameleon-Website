import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
//we get all our blog
import articleList from '../../components/blog/articles/articleList';
import './blog.css';

function BlogDetail(){
  const {id}=useParams()
  const [data,setData]=useState([])

  useEffect(()=>{
    //thwn we received param using react router dm with the help of we find our blog detail
    setData(articleList?.filter((a)=>a?.id == id))
  },[])
  
    return (
      <div className="blog-container">
        <h1>Blog Detail Page </h1>
        <div className='container pt-5'>
      
            <div className='row'>
              <div className='col-md-8'>
              <div className="card-body">
              <h3 className='pt-3'>{data[0]?.title}</h3>
              <h4 className='pt-2'>{data[0]?.subTitle}</h4>
              <p className='pt-3'>{data[0]?.para1}</p>
              <p className='pt-3'>{data[0]?.para2}</p>
              <p className='pt-3'>{data[0]?.para3}</p>
              <p className='pt-3'>{data[0]?.para4}</p>
              <p className='pt-3'>{data[0]?.para5}</p>
            </div>
              </div>
            <div className='col-md-4'>
            <img className="card-img-top" src={data[0]?.image} alt="blog image cap" />
            </div>
            </div>
        </div>
      </div>
    );
  }

export default BlogDetail;
