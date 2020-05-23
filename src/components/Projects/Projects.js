import React from 'react'
import Project from '../Project/Project'

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="section__header">
            <h2 className="text">PROJECTS</h2>
            </div >
            <div className="projects __gallery">
                <Project />
            </div>
        </section>
        )

}
export {Projects as default}