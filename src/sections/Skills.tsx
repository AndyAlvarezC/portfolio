import Cards from "../components/SkillCard";

export default function Skills() {
    return (
        <>
        <section id="skills" className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20">
            <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
                <h1 className="text-5xl font-bold">Skills</h1>
                <Cards />
            </div>
        </section>
        </>
    );
}
