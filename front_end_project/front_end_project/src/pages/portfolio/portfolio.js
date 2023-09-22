import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import PortfolioCard from '../../components/portfolio_card/porfolio_card';
import './portfolio.css';


class Portfolio extends Component {
  render() {
    const handleButtonClick = () => {
      console.log('Button clicked!');
    };
    return (
      <Container>
        <Row>
          <Col xs={6} className="image-col">
            <img
              alt="chutiya"
              src={require('../../assets/imgg_29.jpeg')}
              className="img-fluid"
            />
          </Col>
          <Col xs={6}>
            <div className="card-col">
              <PortfolioCard
                title="PROJECT 1"
                body={
                  <>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div>
              <PortfolioCard
                title="PROJECT 2"
                body={
                  <>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
                isMiddleCard={true}
              />
            </div>
          </Col>
          <Col xs={6}>
            <img
              alt="chutiya"
              src={require('../../assets/last_card_img.jpeg')}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <img
              alt="chutiya"
              src={require('../../assets/middle_card_img.jpeg')}
            />
          </Col>
          <Col xs={6}>
            <div>
              <PortfolioCard
                title="PROJECT 3"
                body={
                  <>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
