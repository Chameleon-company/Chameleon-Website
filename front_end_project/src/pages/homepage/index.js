import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';

import Welcome from './Welcome'
import Video from './Video'
import Comment from './Comments'
import BottomBar from './BottomBar';



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
          {/* <Header />  */}
      
          <Welcome />
          
          <Video />
      
          <Comment />
      
          <BottomBar />
      
        </div>
      );
}


export default Index;