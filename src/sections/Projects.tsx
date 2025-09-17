import ProjectCard from "../components/ProjectCard";
import { projectsDB } from "../data/projectsDB";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col min-h-screen items-center justify-center py-16 w-full scroll-mt-20 mb-16"
        style={{ scrollMarginTop: '80px' }}>
            <h1 className="text-5xl font-bold text-center mb-12">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-w-7xl px-4">
                {projectsDB.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        code={project.code}
                        skills={project.skills}
                    />
                ))}
            </div>
            <div className="m-auto pt-16 md:pt-0">
                <a href="https://github.com/AndyAlvarezC?tab=repositories">
                    <button className="bg-[var(--main-color)] text-white text-xl md:text-2xl font-bold tracking-wide 
                        py-4 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
                        hover:bg-blue-600 hover:shadow-[0px_0px_40px_rgba(37,99,235,1)] cursor-pointer hover:scale-105">
                        View More Projects
                    </button>
                </a>
            </div>
        </section>  
    );
}

