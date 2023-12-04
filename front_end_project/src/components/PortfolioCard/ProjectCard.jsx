import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
  title,
  about,
  lastUpdated,
  learnMoreLink,
  img,
  direction,
}) => {
  return (
    <div className='w-full h-full grid md:grid-cols-2 px-2 pb-1'>
      <div
        className={`w-full h-full ${
          direction === 'left' ? 'md:order-1' : 'md:order-2'
        }`}>
        <img
          src={img}
          alt={title}
          className='w-full h-full object-contain md:object-cover'
        />
      </div>
      <div
        className={`px-2 md:px-4 py-3 flex flex-col w-full h-full ${
          direction === 'left' ? 'md:order-2' : 'md:order-1'
        } items-center gap-3 font-bold font-poppins`}>
        <h1 className='text-center'>{title}</h1>
        <p className='text-center'>{about}</p>
        <div className='w-full h-full flex justify-between items-end '>
          <p className='flex items-end h-full mb-0'>
            Last Updated At: {lastUpdated}
          </p>
          <Link
            className='px-2 py-2 rounded-md bg-green-emerald text-white no-underline hover:underline
           hover:text-white'
            to={learnMoreLink}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
