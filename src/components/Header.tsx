import { handleScroll } from "../utils/utils";

export default function Header() {

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
                    <li><a onClick={() => handleScroll("home")} className="cursor-pointer">Home</a></li>
                    <li><a onClick={() => handleScroll("skills")} className="cursor-pointer">Skills</a></li>
                    <li><a onClick={() => handleScroll("projects")} className="cursor-pointer">Projects</a></li>
                    <li><a onClick={() => handleScroll("about")} className="cursor-pointer">About</a></li>
                    <li><a onClick={() => handleScroll("contact")} className="cursor-pointer">Contact Me</a></li>
                        <li>
                            <button onClick={handleDownload} className="bg-[var(--main-color)] text-white py-2 px-4 rounded-lg 
                                            hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300">
                                {/*Al descargar CV arriba izquiera se ve 'Inscrito Infojobs'*/}
                            Download CV
                            </button>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
