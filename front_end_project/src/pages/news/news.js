import SearchHeader from "./NewsPage Components/SearchHeader"
import CarouselNews from "./NewsPage Components/CarouselNews"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const News= () =>  {
  const headingStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const toastShown = React.useRef(false);

  React.useEffect(() => {
    // Display toast notification only if it hasn't been shown before
    if (!toastShown.current) {
      toast.info("Read latest news and stories to be updated!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        style: { marginTop: '100px' },
      });
      toastShown.current = true;
    }
  }, []);

    return (
           
      <div className="">
        <ToastContainer />
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