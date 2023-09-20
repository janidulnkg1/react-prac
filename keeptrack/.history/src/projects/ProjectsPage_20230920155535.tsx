import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

function ProjectsPage() {
  
    return(
        <>
        <h1>Projects</h1>
        <ProjectLis projects={MOCK_PROJECTS}></ProjectLis>
        </>

    );

}

export default ProjectsPage