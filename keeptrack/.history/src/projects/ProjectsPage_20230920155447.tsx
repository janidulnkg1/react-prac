import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
  
    return(
        <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS}></ProjectList>
        </>

    );

}

export default ProjectsPage