import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { handleScroll } from "../utils/scroll";
import handleDownload from "../utils/handleDownload";
import { MdDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
const [isOpen, setIsOpen] = useState(false);

return (
    <>
    <header className="fixed top-0 left-0 bg-black/50 w-full z-30 backdrop-blur-sm px-2 lg:px-16">
        <div className="flex items-center justify-between p-4">
        <a onClick={() => handleScroll("home")} className="cursor-pointer">
            <h2 className="font-bold text-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out">
            Andy Álvarez
            </h2>
        </a>

        <nav className="hidden md:block">
            <ul className="flex gap-6 font-bold items-center">
            {["home", "skills", "projects", "about", "contact"].map(
                (section) => (
                <li key={section} className="relative">
                    <a
                    onClick={() => handleScroll(section)}
                    className={`cursor-pointer pb-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out 
                    ${useActiveSection() === section ? "after:w-full" : "after:w-0"}
                    hover:after:w-full`}
                    >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                </li>
                )
            )}
            <li>
                <button
                onClick={handleDownload}
                className="bg-[var(--main-color)] text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300"
                >
                Download CV
                <MdDownload className="inline ml-1 text-xl" />
                </button>
            </li>
            </ul>
        </nav>

        <button
            className="md:hidden text-3xl transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
            <HiX className="transform rotate-90 transition-transform duration-300" />
            ) : (
            <HiMenu className="transform rotate-0 transition-transform duration-300" />
            )}
        </button>
        </div>
    </header>

    <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-8 text-2xl font-bold transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
        {["home", "skills", "projects", "about", "contact"].map((section) => (
        <a
            key={section}
            onClick={() => {
            handleScroll(section);
            setIsOpen(false);
            }}
            className={`cursor-pointer ${
            useActiveSection() === section ? "text-blue-400" : ""
            }`}
        >
            {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
        ))}
        <button
        onClick={handleDownload}
        className="mt-6 bg-[var(--main-color)] text-white py-3 px-6 rounded-lg hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300"
        >
        Download CV
        <MdDownload className="inline ml-2 text-2xl" />
        </button>
    </div>
    </>
);
}
