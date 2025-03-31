import Cards from "../components/Cards";

export default function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center bg-[var(--main--bg-color)] 
                            w-4xl p-8 shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold">Skills</h1>
                <Cards />
            </div>
        </div>
    )
}
