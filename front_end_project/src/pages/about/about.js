import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>About Us Page</h1>
          <Col xs={12} >
            <p>
              Lorem ipsum dolor sit amet. A accusantium minimaVel quia et unde
              dicta et laudantium mollitia. Qui culpa iste eum laborum impedit
              <a href="/about" >
                Vel ullam At laudantium laborum qui ullam laudantium
              </a>
              . Ad cumque officia qui voluptatibus delenitiin facilis et aperiam
              consequatur. A soluta dolorId praesentium a impedit voluptas et
              perferendis dolorum aut beatae vero.{" "}
            </p>
            <p>
              Non quia officiis in internos explicaboeum labore hic officiis
              doloremque. Et dolorem quas{" "}
              <a href="/about">
                Ut nesciunt
              </a>{" "}
              sit delectus fugiat.{" "}
            </p>
            <p>
              Ea voluptas optio qui unde asperiores{" "}
              <strong>Rem nihil ut sint quasi</strong> eum unde dolorem aut
              aliquam architecto ut alias rerum. Est modi consequatur{" "}
              <em>Eos sapiente</em> est recusandae consequatur sed voluptas
              culpa.{" "}
            </p>
            <ol>
              <li>
                Sit consequatur minus ea soluta nobis vel quia quibusdam.{" "}
              </li>
              <li>
                Quo blanditiis consequatur aut corporis quas aut impedit earum
                33 soluta excepturi.{" "}
              </li>
              <li>
                Aut perferendis excepturi aut ipsam temporibus id voluptates
                quia et deserunt placeat.{" "}
              </li>
              <li>Et magni tenetur eos labore facere ut placeat autem! </li>
              <li>
                Aut corporis quos ut voluptatem voluptatem et amet magni id
                doloribus voluptates.{" "}
              </li>
              <li>Et amet veritatis et tenetur sapiente. </li>
            </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
