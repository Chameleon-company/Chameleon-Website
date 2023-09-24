import SearchHeader from "./NewsPage Components/SearchHeader"
import CarouselNews from "./NewsPage Components/CarouselNews"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';

const News= () =>  {
  const headingStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };
    return (
           
      <div className="">
      {/* <NavigationBar /> */}
      <div className="m-4"></div>
      <div style={headingStyle} className="m-4">
        <h2>LATEST NEWS</h2>
      </div>

      <SearchHeader />
      <div className="m-5"></div>
      <CarouselNews />
      <div className="m-5"></div>
      <div className="m-4"></div>
      <div style={headingStyle} className="m-4">
        <h2>LATEST STORIES</h2>
      </div>

      <SearchHeader />
      <div className="m-5"></div>
      <CarouselNews />
      <div className="m-5"></div>
      {/* <Container>
        <Row style={subscribeBox} className="d-flex">
          <Col style={}>GET UPDATES</Col>
          <Col></Col>
        </Row>
      </Container> */}
    </div>
    );
}

export default News;