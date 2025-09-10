import { socialLinks } from "../data/contact";
import { ElementType } from "react";

export default function SocialCard() {
    return (
        <div className="flex flex-col md:flex-row gap-12 md:gap-14 justify-center items-center w-full">
            {socialLinks.map(({ name, icon: Icon, link, color }: { name: string, icon: ElementType, link: string, color: string }) => (
                <a 
                    key={name} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 py-4 px-12 md:px-10 w-50 justify-center md:w-auto bg-[var(--main-bg-color)] rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                        hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 ${color} hover:scale-105`}
                >
                    <Icon className="text-2xl" />
                    <span className="font-semibold text-white">{name}</span>
                </a>
            ))}
        </div>
    );
}
