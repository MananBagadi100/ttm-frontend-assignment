import "../Styles/ContactStyles.css";
import {useForm} from "react-hook-form";

export default function Contact() {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);

        // Simulate "submission success"
        alert("Message submitted ✅ (check console)");

        reset();
    };

    return (
        <section className="contact">
            <div className="contact-content">
                <h2>Get in Touch</h2>
                <p>
                    Have questions or want a demo? We’re here to help you streamline your fleet
                    operations.
                </p>

                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Your Name"/>

                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email Address"/>

                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Message"
                        rows="4"></textarea>

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}