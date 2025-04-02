import Cards from "../components/SkillCard";

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center py-16 w-full scroll-mt-20">
            <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
                <h1 className="text-5xl font-bold mb-8">Skills</h1>
                <Cards />
            </div>
        </section>
    );
}
