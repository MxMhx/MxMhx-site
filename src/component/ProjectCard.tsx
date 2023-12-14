import React from "react";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white transform hover:scale-105 transition-transform duration-300 hover:bg-gray-700 hover:shadow-xl">
            <img className="w-full h-48 object-cover rounded-t" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-300 text-base">{subtitle}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;