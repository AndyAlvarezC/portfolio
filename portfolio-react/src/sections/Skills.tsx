import Cards from "../components/Cards";

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center py-16">
            <div className="bg-[var(--main--bg-color)] w-full max-w-5xl p-10 shadow-lg rounded-2xl">
                <h1 className="text-5xl font-bold text-center mb-8">Skills</h1>
                <Cards />
            </div>
        </section>
    );
}
