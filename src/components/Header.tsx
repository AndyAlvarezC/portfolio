import { useState, useEffect } from "react";
import { handleScroll } from "../utils/utils";
import { MdDownload } from 'react-icons/md';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleDownload = (): void => {
        const link = document.createElement("a");
        link.href = "/CV-Andy-Álvarez.pdf";
        link.download = "CV-Andy-Álvarez.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed bg-black/50 flex items-center justify-between p-4 px-50 w-full z-10 backdrop-blur-sm">
            <a onClick={() => handleScroll("home")} className="cursor-pointer">
                <h2 className="font-bold text-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    Andy Álvarez
                </h2>
            </a>
            <nav>
            <ul className="flex gap-6 font-bold items-center">
            {["home", "skills", "projects", "about", "contact"].map((section) => (
                <li key={section} className="relative">
                    <a
                        onClick={() => handleScroll(section)}
                        className={`cursor-pointer pb-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out 
                            ${activeSection === section ? "after:w-full" : "after:w-0"}
                            hover:after:w-full`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                </li>
            ))}
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
        </div>
    );
}
