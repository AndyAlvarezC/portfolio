import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import TextAnimation from './TextAnimation';

export default function Home() {
    return (
        <div className="home h-screen flex flex-col items-center justify-center space-y-4">
            <h1 className="flex items-center justify-center text-8xl font-bold">
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] mr-6" />
                Hello, I am Andy Álvarez
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] ml-6" />
            </h1>
            <h3 className="text-3xl pt-4">
                <TextAnimation />
            </h3>
            <div className='flex pt-24'>
                <button className="bg-[var(--main-color)] text-white py-4 px-10 rounded-2xl text-2xl font-bold tracking-wide uppercase
                                hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300">Contact</button>
            </div>
        </div>
    );
}
