import { ElementType } from "react";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

type SocialLinks = {
    name: string
    icon: ElementType
    link: string
    color: string
}

export const socialLinks: SocialLinks[] = [
    {
        name: "GitHub",
        icon: SiGithub,
        link: "https://github.com/AndyAlvarezC",
        color: "text-gray-900 hover:text-gray-600"

    },
    {
        name: "LinkedIn",
        icon: SiLinkedin,
        link: "https://www.linkedin.com/in/andy-alvarez-6961b4300/",
        color: "text-blue-700 hover:text-blue-500"
    },
    {
        name: "Email",
        icon: MdEmail,
        link: "mailto:andykanka@gmail.com",
        color: "text-red-600 hover:text-red-400"
    }
]