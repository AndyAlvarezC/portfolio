import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { handleScroll } from '../utils/utils';
import TextAnimation from '../components/TextAnimation';

export default function Home() {
    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center gap-y-6 px-6">
            <h1 className="flex items-center justify-center text-6xl sm:text-7xl font-bold">
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] mr-4 sm:mr-6" />
                Hello, I am Andy Álvarez
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] ml-4 sm:ml-6" />
            </h1>
            <h3 className="pt-4 text-xl sm:text-2xl">
                <TextAnimation />
            </h3>
            <div className="mt-16">
                <button 
                    onClick={() => handleScroll("contact")} 
                    className="bg-[var(--main-color)] text-white text-xl sm:text-2xl font-bold uppercase tracking-wide 
                    py-4 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
                    hover:bg-blue-600 hover:shadow-[0px_0px_40px_rgba(37,99,235,1)]"
                >
                    Hire Me!
                </button>
            </div>
        </section>
    )
}
