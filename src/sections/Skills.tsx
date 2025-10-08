import Cards from "../components/SkillCard";
import { Reveal } from "../hooks/useScrollReveal";

export default function Skills() {
    return (
        <>
            <section
            id="skills"
            className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20"
            >
            <Reveal animation="fade-up">
                <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
                <h1 className="text-5xl font-bold">Skills</h1>
                <Cards />
                </div>
            </Reveal>
            </section>
        </>
    );
}
