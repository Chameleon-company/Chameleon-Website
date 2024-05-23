import React from 'react';

const Mission = ({ item }) => {
  const [showBlurb, setShowBlurb] = React.useState(false);
  // const { title, img, blurbText } = item;
  const handleClick = () => {
    return setShowBlurb((prev) => !prev);
  };
  return (
    <>
      {/* <div className="w-full h-full flex flex-col gap-4 items-center justify-center relative">
        <div className="w-full h-full max-w-[40%]" onClick={handleClick}>
          <img src={img} alt="" className="object-contain w-full h-full" />
        </div>
        <h1 className="font-bold text-xl text-center"> {title}</h1>
      </div>
      {showBlurb && (
        <div className="border rounded-lg shadow font-medium text-center bg-white p-4 text-black text-lg z-[9990] top-0 right-20 ">
          {blurbText}
        </div>
      )} */}
    </>
  );
};

export default Mission;
