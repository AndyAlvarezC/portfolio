import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center py-16">
            <h1 className="text-5xl font-bold text-center mb-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        skills={project.skills}
                    />
                ))}
            </div>
        </section>  
    )
}
