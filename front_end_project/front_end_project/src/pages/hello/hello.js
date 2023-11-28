import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../../components/card/card';
import axios from "axios";

const Hello = () => {
  const [message, setMessage] = useState("");
  const [searchText, setSearchText] = useState('');
  
 
  const handleButtonClick = () => {
    console.log('Button clicked!');
   
      axios.get("http://localhost:3001/hello/" + searchText).then((res) => {
        setMessage(res.data.message);
      });
   
  };
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
   
    <Container>
    <Row>
     <h1>Hello Page</h1>
      <Col xs={12} md={6}>
      <div>
      <p>{message}</p>
      <CustomCard
        header="Header Text"
        body={<p>Enter your name here. <input type="text" placeholder="Search" value={searchText} onChange={handleSearchTextChange} /></p>}
        onButtonClick={handleButtonClick}
      />
    </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Hello;
