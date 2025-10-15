import { Reveal } from '../hooks/useScrollReveal';

export default function About() {
    return (
    <section
        id="about"
        className="flex flex-col min-h-screen justify-center items-center py-26 w-full scroll-mt-20 mb-16"
    >
        {/* Scroll reveal animation */}
        <Reveal animation="fade-up">
        <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
            <h1 className="text-5xl font-bold mb-8">About Me</h1>

            {/* Main content */}
            <div className="text-xl text-left gap-12 flex flex-col items-center justify-center mt-16 mb-8">
            <p>
                👋 Hi! I'm <span className="font-bold">Andy Álvarez</span>, a{' '}
                <span className="font-bold">Front-End Developer</span> specialized
                in{' '}
                <span className="font-bold">
                React, TypeScript, Tailwind CSS, and Next.js
                </span>
                . I focus on building modern, responsive, and optimized interfaces
                that improve the digital user experience.
            </p>

            <p>
                💻 I have strong foundations in{' '}
                <span className="font-bold">
                HTML, CSS, JavaScript, Git, and frontend architecture
                </span>
                . I enjoy turning ideas into functional, maintainable, and
                visually appealing web applications using clean code and best
                practices in UI/UX and performance.
            </p>

            <p>
                ✅ I also have experience with{' '}
                <span className="font-bold">
                testing and unit testing (Vitest / Jest / React Testing Library)
                </span>
                , ensuring code quality, reliability, and maintainability across
                components and features.
            </p>

            <p>
                ☁️ I’m currently preparing for the{' '}
                <span className="font-bold">
                AWS Cloud Practitioner Certification
                </span>
                to expand my knowledge into cloud deployment and scalable
                architectures—combining frontend development with cloud
                technologies.
            </p>

            <p>
                🚀 I'm a <span className="font-bold">fast learner</span> with a
                self-taught background, driven by{' '}
                <span className="font-bold">continuous improvement</span> and a
                passion for clean, scalable code. My goal is to keep growing as a
                developer and contribute to impactful products.
            </p>

            <p>
                🤝 I love collaborating with other tech professionals. If you'd
                like to share ideas, work together, or talk about web development,
                testing, or cloud technologies, feel free to reach out!
            </p>
            </div>
        </div>
        </Reveal>
    </section>
    );
}
