import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="footer flex items-center justify-center h-20 bg-[var(--second-bg-color)] text-white font-bold shadow text-sm md:text-lg">
            <p>
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] mr-2" />
                Andy Álvarez 
                <span className="text-blue-600 p-1">|</span> 
                Created and designed by me 
                <span className="text-blue-600 p-1">#</span> 
                2025 
                <FontAwesomeIcon icon={faCode} className="text-[var(--main-color)] ml-2" />
                </p>
        </div>
    )
}
