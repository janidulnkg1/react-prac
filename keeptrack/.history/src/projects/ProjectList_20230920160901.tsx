import React from 'react'
import { Project } from './Project'

interface ProjectListProps{
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row"> 
            {projects.map((project) => (
                <div key={project.id} className="col    
            
            
            
            
        ))}
        </div>

        );

}

export default ProjectList