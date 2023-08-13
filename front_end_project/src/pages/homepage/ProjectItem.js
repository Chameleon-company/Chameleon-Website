import React from "react";
import './ProjectItem.css'

const ProjectItem = ({projectDescription, projectImage}) => {
    return(
        <div className="project-container">
            <img src={projectImage} className="project-item-image"/>
            <h6>
                {projectDescription}
            </h6>
        </div>
    )
}

export default ProjectItem