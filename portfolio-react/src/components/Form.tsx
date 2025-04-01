import { FaPaperPlane } from 'react-icons/fa';

export default function Form() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl p-16">
            <form className="flex flex-col gap-14 w-full max-w-4xl">
                <input type="text" id="name" placeholder="Name" required
                className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300">
                </input>

                <input type="email" id="email" placeholder="Email" required
                className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300">
                </input>
            
                <textarea id="message" placeholder="Write your message here..."
                className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 resize-none h-32">
                </textarea>
                
                <button type="submit" className="flex items-center justify-center w-full mx-auto bg-[var(--main-bg-color)] font-bold text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] max-w-sm cursor-pointer
                hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 hover:scale-105 hover:bg-blue-600">
                    Send<FaPaperPlane className="ml-2 rotate-45" />
                </button>
            </form>
        </div>
    )
}
