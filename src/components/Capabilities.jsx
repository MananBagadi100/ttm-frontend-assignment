import React from "react";
import "../Styles/CapabilitiesStyles.css";
import { Truck, Route, ShieldCheck, BarChart3 } from "lucide-react";

const capabilitiesData = [
  {
    icon: <Truck size={32} />,
    title: "Fleet Monitoring",
    description: "Track real-time vehicle status, health & performance metrics."
  },
  {
    icon: <Route size={32} />,
    title: "Route Optimization",
    description: "Reduce fuel costs & travel time with intelligent routing."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safety & Compliance",
    description: "Maintain regulatory compliance and ensure driver safety."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics Dashboard",
    description: "Make smarter decisions with live data visualization."
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <h2>Our Capabilities</h2>
      <p className="capabilities-subtext">
        Tools to help you run smarter, safer, and more efficient fleet operations.
      </p>

      <div className="capabilities-grid">
        {capabilitiesData.map((item, index) => (
          <div className="capability-card" key={index}>
            <div className="capability-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;