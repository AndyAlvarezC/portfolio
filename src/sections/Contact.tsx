import SocialCard from "../components/SocialCard";
import Form from "../components/Form";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col min-h-screen items-center justify-center w-full"
        >
            <h1 className="text-5xl font-bold mb-16">Contact</h1>
            <SocialCard />
            <Form />
        </section>
    );
}
