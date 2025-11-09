import "../Styles/ContactStyles.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          Have questions or want a demo? We’re here to help you streamline your fleet operations.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}