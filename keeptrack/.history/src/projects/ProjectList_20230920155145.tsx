import React from 'react'
import { Project } from './Project'

interface ProjectListProps{
    projects: Project[];
}

function ProjectList({ projects }: Project}) {
  return (
    <div>ProjectList</div>
  )
}

export default ProjectList