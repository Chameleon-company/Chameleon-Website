// IotResourcesComponent: Component representing a resource card for IoT-related content.
const IotResourcesComponent = ({ img, altImg, url, heading }) => {
  return (
    <div className="w-full max-w-[400px] bg-[#D1E2C4] m-auto"> {/* Main container for the resource */}
      <a href={url} className="text-decoration-none"> {/* Link to the resource */}
        <div className="shrink-0 grow"> {/* Container for the image and heading */}
          <div className="flex flex-wrap"> {/* Container for the image */}
            <img
              src={img}  
              className="h-[300px] w-[400px] max-w-full p-2"
              alt={altImg} 
            />
          </div>
        </div>
        <h2 className="pb-2 text-center text-black">{heading}</h2> {/* Heading/title of the resource */}
      </a>
    </div>
  );
};

export default IotResourcesComponent; // Exporting IotResourcesComponent as default
