import "../Styles/HeroStyles.css";
import heroImg from "../assets/fleet-hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img src={heroImg} alt="Fleet Operations" className="hero-bg" />

      <div className="hero-content">
        <h1>Smarter Fleet Operations, Powered by Real-Time Visibility</h1>
        <p>
          Monitor vehicles, optimize routes, ensure compliance, and improve safety — 
          all from one connected platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Request Demo</button>
        </div>
      </div>
    </section>
  );
}