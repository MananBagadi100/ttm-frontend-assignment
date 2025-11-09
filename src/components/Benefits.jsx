import "../Styles/BenefitsStyles.css";
import {Target, CheckCircle, Headset} from "lucide-react";
export default function Benefits() {
    return (
        <section className="why-ttm">
            <h2>Why TTM Konnect?</h2>
            <p className="why-subtext">
                Trusted fleet management platform designed for reliability, efficiency, and
                real-time control.
            </p>

            <div className="why-grid">

                <div className="why-card">
                    <div className="why-icon"><Target size={28}/></div>
                    <h3>Built for Real-World Operations</h3>
                    <p>
                        Designed with carriers, transport managers, and logistics operators to solve
                        daily challenges — not just look good on paper.
                    </p>
                </div>

                <div className="why-card">
                    <div className="why-icon"><CheckCircle size={28}/></div>
                    <h3>Reliable & Proven Performance</h3>
                    <p>
                        Our platform ensures uptime, accuracy, and dependable fleet visibility across
                        fleets of all sizes.
                    </p>
                </div>

                <div className="why-card">
                    <div className="why-icon"><Headset size={28}/></div>
                    <h3>Seamless Support & Integration</h3>
                    <p>
                        Onboarding, training, and technical support are tailored to your workflow — not
                        forced templates.
                    </p>
                </div>

            </div>
        </section>
    );
}