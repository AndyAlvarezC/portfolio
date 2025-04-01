import SocialCard from "../components/SocialCard";
import Form from "../components/Form";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center py-16 w-full scroll-mt-20 mb-16">
            <h1 className="text-5xl font-bold mb-16">Contact</h1>
            <SocialCard />
            <Form />
        </section>
    );
}
