// IotResourcesComponent: Component representing a resource card for IoT-related content.
const IotResourcesComponent = ({ img, altImg, url, heading }) => {
  return (
    <div className="mb-[50px] ml-auto mr-auto w-full max-w-[400px] bg-[#D1E2C4]"> {/* Main container for the resource */}
      <a href={url} className="text-decoration-none"> {/* Link to the resource */}
        <div className="shrink-0 grow"> {/* Container for the image and heading */}
          <div className="ml-3 mr-3 mt-0 flex flex-wrap"> {/* Container for the image */}
            <img
              src={img}  
              className="padding-10 mx-auto h-[300px] w-[400px] max-w-full pb-4 pt-7" 
              alt={altImg} 
            />
          </div>
        </div>
        <h2 className="fw-bold pb-4 text-center text-black">{heading}</h2> {/* Heading/title of the resource */}
      </a>
    </div>
  );
};

export default IotResourcesComponent; // Exporting IotResourcesComponent as default
