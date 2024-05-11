import React from 'react';
import Slider from "react-slick";
import Cards from "./Cards";
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
	<div className="carousel-container">
	  <Slider {...settings}>
		{[
		  { title: "EV Charging", img: "EV-Project.png" },
		  { title: "Melbourne Big Data", img: "News-2.png" },
		  { title: "Smart Convention", img: "News-3.png" },
		  { title: "Luxe IoT Residences", img: "News-4.png" },
		  { title: "IoT and Power Consumption", img: "News-5.png" },
		  { title: "Tesla to expands supercharger station", img: "News-6.png" },
		  { title: "TITLE", img: "EV-Project.png" },
		  { title: "TITLE", img: "News-2.png" }
		].map((card, index) => (
		  <div key={index}>
			<h3>
			  <Cards title={card.title} img={card.img} />
			</h3>
		  </div>
		))}
	  </Slider>
	</div>
  );
};

export default CarouselNews;