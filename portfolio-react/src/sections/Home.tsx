import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { handleScroll } from '../utils/utils';
import TextAnimation from '../components/TextAnimation';

export default function Home() {
    return (
        <div id="home" className="h-screen flex flex-col items-center justify-center gap-y-4">
            <h1 className="flex items-center
            justify-center text-7xl font-bold">
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] mr-6" />
                Hello, I am Andy Álvarez
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] ml-6" />
            </h1>
            <h3 className="pt-4">
                <TextAnimation />
            </h3>
            <div className='flex mt-24'>
                <button 
                onClick={() => handleScroll("contact")} 
                className="shadow-[0px_0px_20px_rgba(37,99,235,0.5)] bg-[var(--main-color)] hover:bg-blue-600 text-white py-4 px-10 rounded-lg text-2xl font-bold tracking-wide uppercase
                hover:shadow-[0px_0px_40px_rgba(37,99,235,1)] cursor-pointer transition-all ease-in-out duration-300">
                    Hire Me!
                </button>
            </div>
        </div>
    );
}
