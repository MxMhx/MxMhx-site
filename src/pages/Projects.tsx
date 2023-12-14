import React from "react";
import ProjectCard from "../component/ProjectCard";
function Projects() {
    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
                imageUrl="https://placekitten.com/300/200"
                title="Project One"
                subtitle="Subtitle for Project One"
            />
            <ProjectCard
                imageUrl="https://placekitten.com/301/200"
                title="Project Two"
                subtitle="Subtitle for Project Two"
            />
            <ProjectCard
                imageUrl="https://placekitten.com/301/200"
                title="Project Two"
                subtitle="Subtitle for Project Two"
            />
        </div>
    );
}

export default Projects;