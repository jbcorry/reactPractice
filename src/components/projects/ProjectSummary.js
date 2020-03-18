import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="project-summary card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {project.title}
                </span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{project.createdAt.toDate().toString().slice(0,15)}</p>
            </div>
        </div>
    )
}

export default ProjectSummary