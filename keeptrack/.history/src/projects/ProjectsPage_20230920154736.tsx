import React from 'react'
import 

function ProjectsPage() {
  
    return(
        <>
        <h1>Projects</h1>
        <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </>

    );

}

export default ProjectsPage