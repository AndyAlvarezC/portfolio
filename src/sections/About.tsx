import { Reveal } from "../hooks/useScrollReveal";

export default function About() {
    return (
        <>
        <section
            id="about"
            className="flex flex-col min-h-screen justify-center items-center py-26 w-full scroll-mt-20 mb-16"
        >
            <Reveal animation="fade-up">
            <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
                <h1 className="text-5xl font-bold mb-8">About Me</h1>
                <div className="text-xl text-left gap-8 flex flex-col items-center justify-center mt-16 mb-8">
                <p>
                    👋 Hi! I'm <span className="font-bold">Andy Álvarez</span>, a{" "}
                    <span className="font-bold">Front-End Developer</span>{" "}
                    specialized in{" "}
                    <span className="font-bold">
                    React, TypeScript, and Tailwind CSS
                    </span>
                    . I focus on creating modern, responsive, and optimized
                    interfaces that enhance the digital user experience.
                </p>

                <p>
                    💻 I have strong foundations in{" "}
                    <span className="font-bold">
                    HTML, CSS, JavaScript, and Git
                    </span>
                    , and I’m passionate about turning ideas into functional and
                    visually appealing web experiences. I enjoy building projects
                    from scratch, exploring new tools, and following best practices
                    in UI/UX and web performance.
                </p>

                <p>
                    ☁️ Currently, I’m pursuing the{" "}
                    <span className="font-bold">
                    AWS Cloud Practitioner Certification
                    </span>{" "}
                    to expand my knowledge into cloud deployment and scalable
                    architectures—combining my frontend skills with cloud
                    technologies.
                </p>

                <p>
                    🚀 I'm a <span className="font-bold">fast learner</span> with a
                    self-taught background, always driven by{" "}
                    <span className="font-bold">continuous improvement</span> and a
                    passion for clean, maintainable code. My goal is to keep growing
                    as a developer and contribute to projects that make a real
                    impact.
                </p>

                <p>
                    🤝 I’m always open to connecting with other tech professionals.
                    If you'd like to share ideas, collaborate, or discuss web
                    development and cloud technologies, feel free to reach out!
                </p>
                </div>
            </div>
            </Reveal>
        </section>
        </>
    );
}
