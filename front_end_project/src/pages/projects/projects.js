import React from 'react';

import Wrapper from '../../components/shared/Wrapper';
import Slider from '../../components/projects/Slider';
import ProjectCard from '../../components/projects/ProjectCard';
import { SliderData, ProjectCardData } from '../../constants/Project';

const Projects = () => {
  return (
    <Wrapper id='projects' Style='w-full h-[100vh-80ppx]'>
      <div className='w-full h-full flex mt-8 md:px-8 lg:px-0 mb-2 '>
        <Slider JSONDATA={SliderData} />
      </div>
      {ProjectCardData?.map((itm, idx) => {
        let direction = idx % 2 !== 0 ? 'right' : 'left';
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
