
export default function Header() {
    return (
        <div className=" fixed bg-black flex items-center justify-between p-4 px-50 w-full">
                <a href="#home">
                <h2 className="font-bold text-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    Andy Álvarez
                </h2>
                </a>
                <nav>
                    <ul className="flex gap-6 font-bold items-center">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">Skills</a>
                        </li>
                        <li>
                            <a href="#skills">Projects</a>
                        </li>
                        <li>
                            <a href="#projects">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <button className="bg-[var(--main-color)] text-white py-2 px-4 rounded 
                                            hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300">
                                {/*Al descargar CV arriba izquiera se ve 'Inscrito Infojobs'*/}
                                <a download href="/CV-Andy-Álvarez.pdf">Download CV</a>
                            </button>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
