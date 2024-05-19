import React from 'react';

// This is the Mission component
const Mission = ({ item }) => {
  // This is the state for the blurb
  const [showBlurb, setShowBlurb] = React.useState(false);

  // This is the destructured item object
  const { title, img, blurbText } = item;

  // This is the function to toggle the blurb
  const handleClick = () => {
    // Toggle the showBlurb state
    return setShowBlurb((prev) => !prev);
  };

  return (
    // This is the main container for the Mission component
    <>
      {/* This is the container for the image and title */}
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center relative">
        {/* This is the image container */}
        <div className="w-full h-full max-w-[40%]" onClick={handleClick}>
          <img src={img} alt="" className="object-contain w-full h-full" />
        </div>
        {/* This is the title */}
        <h1 className="font-bold text-xl text-center"> {title}</h1>
      </div>
      {/* This is the blurb container */}
      {showBlurb && (
        <div
          className="border rounded-lg shadow font-medium text-center bg-white p-4 text-black text-lg z-[9990] top-0 right-20"
        >
          {/* This is the blurb text */}
          {blurbText}
        </div>
      )}
    </>
  );
};

export default Mission;