import React, { useState, useEffect } from 'react';
import IotResourcesComponent from '../../components/resources/IotResourcesComponent';
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import Screen from '../../components/app/Screen';
import './iot.css'; // Path to the CSS file

const IotResources = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState([]);

  const resources = [
    {
      img: device,
      altImg: "Technology Graphic",
      url: "/iotTechnologies",
      heading: "Technologies"
    },
    {
      img: IoTMelbourne,
      altImg: "Melbourne Street View",
      url: "/iotStatistics",
      heading: "Statistics"
    },
    {
      img: tech,
      altImg: "Technology Graphic",
      url: "/iotUpdates",
      heading: "Innovations"
    }
  ];

  // Load favorites from local storage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (item) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(item)) {
        return prevFavorites.filter((fav) => fav !== item);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  const isFavorite = (item) => favorites.includes(item);

  const handleSearch = () => {
    const results = resources.filter(resource =>
      resource.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResources(results);
  };

  useEffect(() => {
    handleSearch(); // Filter resources whenever the search term changes
  }, [searchTerm]);

  return (
    <Screen>
      <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5 section-height">
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Resources..."
              className="search-input"
            />
            <button
              onClick={handleSearch}
              className="search-button"
            >
              Search
            </button>
          </div>
        </div>
        
        {filteredResources.map((resource, index) => (
          <div key={index} className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={resource.img}
              altImg={resource.altImg}
              url={resource.url}
              heading={resource.heading}
              isFavorite={isFavorite(resource.heading)}
              onFavoriteToggle={() => handleFavoriteToggle(resource.heading)}
            />
          </div>
        ))}
      </div>
    </Screen>
  );
};

export default IotResources;
