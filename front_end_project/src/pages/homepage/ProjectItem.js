import React from "react";
import './ProjectItem.css'

const ProjectItem = ({projectDescription, projectImage}) => {
    return(
        <div className="project-container">
            <img src={projectImage} className="project-item-image"/>
            <h3>
                {projectDescription}
            </h3>
        </div>
    )
}

export default ProjectItem