// import CardImg from "../Assets/EV-Project.png";
import Container from "react-bootstrap/Container";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";

// Component Call: <Cards img="" title="" />

const Cards = (props) => {
  const CardProp = {
    width: "329px",
    height: "450px",
    border: "none",
  };

  return (
    <a href="#a" style={{ textDecoration: "none" }}>
      <div class="card" style={CardProp}>
        <Container>
          <img
            src={`./Projects/${props.img}`}
            class="card-img-top"
            alt="..."
            style={{ width: "329px", height: "220px" }}
          />
        </Container>
        <div class="card-body">
          <h2 class="card-title">{props.title}</h2>
          <p className="card-text" style={{ fontSize: "20px" }}>
            Add opening sentence followed by ellipses....
          </p>
          <p className="" style={{ fontSize: "20px" }}>
            8 August 2023
          </p>
          <StarRating />
        </div>
      </div>
      {/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}
    </a>
  );
};

export default Cards;
