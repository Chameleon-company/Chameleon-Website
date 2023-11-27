import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import PortfolioCard from "../../components/portfolio_card/porfolio_card";
import "./projects.css";
import "./projects-media.css";
import Wrapper from "../../components/shared/Wrapper";
import Slider from "../../components/projects/Slider";
import ProjectCard from "../../components/projects/ProjectCard";
import { SliderData, ProjectCardData } from "../../constants/Project";

class Projects extends Component {
  render() {
    const handleButtonClick = () => {
      console.log("Button clicked!");
    };

    // Define the text and button information for each carousel slide.
    const carouselItems = [
      {
        imageUrl: require("./image/EV.png"),
        caption: "EV Adoption Tools",
        url: "#",
      },
      {
        imageUrl: require("./image/Website.png"),
        caption: "Chameleon Website",
        url: "#",
      },
      {
        imageUrl: require("./image/City.png"),
        caption: "City of Melbourne Open Data",
        url: "#",
      },
    ];

    return (
      // Added a custom class for styling
      <div className="container-fluid mx-auto projects-page">
        <Carousel style={{ height: "600px" }}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={`Slide ${index + 1}`}
                style={{ height: "600px" }}
              />
              <div className="carousel-caption ml-auto">
                <p>{item.caption}</p>
                <button
                  className="rounded-full bg-white p-2 text-green-emerald"
                  onClick={() => handleButtonClick(item.url)}
                >
                  LEARN MORE
                </button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <p class="text-blue">The quick brown fox...</p>
        <div className="grid grid-cols-12 gap-1">
          {/* Changed to specify lg size */}
          <div className="lg:col-span-6 image-col" style={{ padding: "0px" }}>
            <img
              alt="chutiya"
              src={require("./image/EV.png")}
              className="img-fluid"
            />
          </div>
          {/* Changed to specify lg size */}
          <div className="lg:col-span-6" style={{ padding: "0px" }}>
            <div className="card-col">
              <PortfolioCard
                title="EV Adoption Tools"
                body={
                  <>
                    <p>
                      This text is a placeholder for a blurb on the EV Adoption
                      Tools Project.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
        {/* Added a custom class for styling */}
        <div className="grid grid-cols-12 gap-1">
          <div className="lg:col-span-6" style={{ padding: "0px" }}>
            {/* Added a custom class for styling */}
            <div className="card-col">
              <PortfolioCard
                title="Chameleon Website"
                body={
                  <>
                    <p>
                      This text is a placeholder for a blurb on the Chameleon
                      Website Project.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
                isMiddleCard={true}
              />
            </div>
          </div>
          {/* Changed to specify lg size */}
          <div className="lg:col-span-6 image-col" style={{ padding: "0px" }}>
            <img alt="chutiya" src={require("./image/Website.png")} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-1">
          {/* Added a custom class for styling */}
          <div className="lg:col-span-6 image-col" style={{ padding: "0px" }}>
            <img alt="chutiya" src={require("./image/City.png")} />
          </div>
          <div className="lg:col-span-6" style={{ padding: "0px" }}>
            <div className="card-col">
              <PortfolioCard
                title="City of Melbourne Open Data"
                body={
                  <>
                    <p>
                      This text is a placeholder for a blurb on the Mod Project.
                    </p>
                  </>
                }
                onButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Projects_id = () => {
  return (
    <Wrapper id="projects" Style="w-full h-[100vh-80ppx]">
      <div className="w-full h-full flex mt-8 md:px-8 lg:px-0 mb-2 ">
        <Slider JSONDATA={SliderData} />
      </div>
      {ProjectCardData?.map((itm, idx) => {
        let direction = idx % 2 !== 0 ? "right" : "left";
        const { title, about, img, lastUpdated, learnMoreLink } = itm;
        return (
          <ProjectCard
            title={title}
            about={about}
            img={img}
            lastUpdated={lastUpdated}
            learnMoreLink={learnMoreLink}
            direction={direction}
            key={idx}
          />
        );
      })}
    </Wrapper>
  );
};

export default Projects;
