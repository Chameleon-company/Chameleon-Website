import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../../components/portfolio_card/porfolio_card";
import "./projects.css";
import "./projects-media.css";
import Wrapper from "../../components/shared/Wrapper";
import Slider from "../../components/projects/Slider";
import ProjectCard from "../../components/projects/ProjectCard";
import { SliderData, ProjectCardData } from "../../constants/Project";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

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
    <div className="container mx-auto pt-[20px] px-[10px] lg:px-0 lg:py-0">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover w-full h-full"
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-end justify-end p-4">
              <div className="bg-white p-4 rounded-full">
                <p>{item.caption}</p>
                <button
                  className="rounded-full bg-white p-2 text-green-emerald"
                  onClick={() => handleButtonClick(item.url)}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-blue">The quick brown fox...</p>

      <div className="grid grid-cols-12 gap-1">
        <div className="lg:col-span-6 flex items-center p-0">
          <img
            alt="chutiya"
            src={require("./image/EV.png")}
            className="w-full max-w-full h-auto max-h-[404px] object-cover"
          />
        </div>
        <div className="lg:col-span-6 p-0">
          <div className="mt-0">
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

      <div className="grid grid-cols-12 gap-1">
        <div className="lg:col-span-6 p-0">
          <div className="w-full sm:w-3/5">
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
        <div className="lg:col-span-6 flex items-center p-0">
          <img
            alt="chutiya"
            src={require("./image/Website.png")}
            className="w-full max-w-full h-auto max-h-[404px] object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1">
        <div className="lg:col-span-6 flex items-center p-0">
          <img
            alt="chutiya"
            src={require("./image/City.png")}
            className="w-full max-w-full h-auto max-h-[404px] object-cover"
          />
        </div>
        <div className="lg:col-span-6 p-0">
          <div className="w-full sm:w-3/5">
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
};

const Projects_id = () => {
  return (
    <Wrapper id="projects" className="w-full h-[100vh-80ppx]">
      <div className="w-full h-full flex mt-8 md:px-8 lg:px-0 mb-2">
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
