import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Header_White from './header_white';

import Welcome from './Welcome'
import Video from './Video'
import Comment from './Comments'
import BottomBar from './BottomBar';
import { BrowserRouter } from 'react-router-dom';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <Header /> 

//     <Welcome />
    
//     <Video />

//     <Comment />

//     <BottomBar />

//   </div>
// );



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <Header /> 

//     <Welcome />
    
//     <Video />

//     <Comment />

//     <BottomBar />

//   </div>
// );

function Index() {

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <div>

          <BrowserRouter>
            <Header_White /> 
          </BrowserRouter>
      
          <Welcome />
          
          <Video />
      
          <Comment />
      
          <BottomBar />

        </div>
      );
}


export default Index;