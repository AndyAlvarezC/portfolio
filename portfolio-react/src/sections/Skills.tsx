import Cards from "../components/Cards";

export default function Skills() {
    return (
        <div className="skills flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center bg-[var(--main--bg-color)] 
                            w-4xl p-8 shadow-[0px_0px_40px_rgba(37,99,235,0.5)] rounded-lg">
                <h1 className="text-6xl font-bold">Skills</h1>
                <Cards />
            </div>
        </div>
    )
}
