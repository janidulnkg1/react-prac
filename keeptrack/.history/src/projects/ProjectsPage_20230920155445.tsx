import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
  
    return(
        <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_P}></ProjectList>
        </>

    );

}

export default ProjectsPage