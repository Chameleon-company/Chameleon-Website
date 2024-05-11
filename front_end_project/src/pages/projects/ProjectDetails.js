import React from "react";
import { useParams } from "react-router-dom";
import projectList from "./data";
import chameleonLogo from "../../assets/ChameleonLogo.png";
import githubImage from "./image/github-image.png";
import styles from "./projects.module.css";
import Screen from "../../components/app/Screen";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectList.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <p className="text-white">Project not found</p>;
  }

  return (
    <>
    <Screen>
      {/* Chameleon Logo in the center */}
      <div className="bg-[#deece3] text-center py-3 px-2">
        <img alt="" src={chameleonLogo} className="my-0 mx-auto w-[150px]" />
      </div>
      {/* The heading of Projectts in the center and background */}
      <div className="bg-[#4fa373] md:py-6 py-3 text-center">
        <h2 className="text-4xl"> Project Details </h2>
        {/* centering and styling a responsive flex container with specific spacing and alignment properties. */}
        <div className="px-2 text-center max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-center md:gap-5 gap-4 md:mt-5 mt-[24px]">
          {/* background color to #deece3, defines padding for large, medium, and small screens, adjusts padding-top for large screens, sets padding-bottom, centers text, specifies widths for different screen sizes, and sets a maximum width for large screens. */}
          <div className="bg-[#deece3] lg:p-8 md:p-6 p-[15px] lg:pt-4 pb-3 text-center lg:w-[100%] md:w-[400px] sm:w-[60%] w-[100%] lg:max-w-[460px] hover:border-[5px]">
            {/* Project title with varying text sizes and font weight */}
            <h2 className="md:text-[26px] text-[22px] text-black">
              {project.title}
            </h2>
            <img src={project.image} alt={project.title} className="w-[100%]" />
          </div>
          <div className="md:w-[600px] lg:w-[700px]">
            <p className={` ${styles.innerP}  text-black text-[18px] m-0 `}>
              {project.details}
            </p>
            {/* flex container, adjusting justification for medium screens, setting a general justification to the center, defining a gap between elements, and adding a top margin. */}
            <div className="flex md:justify-start justify-center gap-3 mt-3">
              {/* background color to #333333, removes underlines from text links, sets the text color to white, rounds the corners with a radius of 30px, adds a 2px white border, uses a bold font, and changes the cursor to a pointer for a clickable element. */}
              <a
                href={project.githubLink}
                className={`  ${styles.innerBtn} bg-[#333333] no-underline text-white rounded-[30px] border-2 border-[#ffffff] font-semibold cursor-pointer hover:border-[5px] box-border`}
              >
                {" "}
                <img alt="" src={githubImage} className="inline-block" /> GITHUB
              </a>
              {/* text color to #006913, changes the text color to #006913 on hover, rounds the corners with a radius of 30px, adds a 2px white border, uses a bold font, and changes the cursor to a pointer for a clickable element. */}
              <a
                href={project.learnMoreLink}
                className={` ${styles.innerBtn} bg-[#ffffff] no-underline text-[#006913] hover:text-[#006913] rounded-[30px] border-2 border-[#ffffff] font-semibold cursor-pointer hover:border-[5px] box-border`}
              >
                LEARN MORE{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      </Screen>
    </>
  );
}

export default ProjectDetails;
