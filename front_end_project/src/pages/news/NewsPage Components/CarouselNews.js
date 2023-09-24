import Cards from "./Cards";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./CarouselNews.css";
import "./CarouselNews-theme.css";

const CarouselNews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
          <div>
            <h3>
              <Cards title="EV Charging" img="EV-Project.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="Melbourne Big Data" img="News-2.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="Smart Convenention" img="News-3.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="Luxe IoT Residences" img="News-4.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="IoT and Power Consumption" img="News-5.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards
                title="Tesla to expands supercharger station"
                img="News-6.png"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="TITLE" img="EV-Project.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Cards title="TITLE" img="News-2.png" />
            </h3>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default CarouselNews;
