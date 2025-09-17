import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { handleScroll } from '../utils/scroll';
import TextAnimation from '../components/TextAnimation';

export default function Home() {
    return (
        <>
        <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-y-6 px-6 scroll-mt-20">
            <div className="flex flex-col items-center justify-center gap-y-1 md:gap-y-4">
                <h1 className="flex items-center justify-center text-xl sm:text-5xl lg:text-6xl font-bold">
                    <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] mr-3 sm:mr-4 lg:mr-6" />
                    Hello, I am Andy Álvarez
                    <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] ml-3 sm:ml-4 lg:ml-6" />
                </h1>
                <h3 className="pt-4">
                    <TextAnimation />
                </h3>
            </div>
            <div className="mt-32">
                <button 
                    onClick={() => handleScroll("contact")} 
                    className="bg-[var(--main-color)] text-white text-xl md:text-2xl font-bold uppercase tracking-wide 
                    py-4 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
                    hover:bg-blue-600 hover:shadow-[0px_0px_40px_rgba(37,99,235,1)] cursor-pointer hover:scale-105"
                >
                    Hire Me!
                </button>
            </div>
        </section>
        </>
    );
}