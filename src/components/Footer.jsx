import React from "react";
import {Link, NavLink} from 'react-router-dom'
import "../Styles/FooterStyles.css";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-contents-area">
            {/* Top Contact Details Bar */}
            <div className="footer-contact">
                <div className="footer-contact-item">
                <Phone size={20} />
                <div>
                    <p className="footer-label">Call Us Anytime</p>
                    <p className="footer-value">+1 (707) 761-7464</p>
                </div>
                </div>

                <div className="footer-contact-item">
                <Mail size={20} />
                <div>
                    <p className="footer-label">Send E-mail</p>
                    <p className="footer-value">support@ttmkonnect.com</p>
                </div>
                </div>

                <div className="footer-contact-item">
                <MapPin size={20} />
                <div>
                    <p className="footer-label">Our Office</p>
                    <p className="footer-value">2455 Mesquite St, Oak Hills, CA 92344</p>
                </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="footer-main">

                <div className="footer-brand">
                <h3>TTM Konnect</h3>

                <div className="footer-social">
                    <a><Facebook size={18} /></a>
                    <a><Instagram size={18} /></a>
                    <a><Linkedin size={18} /></a>
                    <a><Twitter size={18} /></a>
                </div>
                </div>

                <div className="footer-links">
                <div>
                    <h4 className="footer-section-heading">Company</h4>
                    <a className='footer-section-link'>About</a>
                    <a className='footer-section-link'>Why Choose TTM Konnect</a>
                    <a className='footer-section-link'>Blog</a>
                </div>

                <div>
                    <h4 className="footer-section-heading">Support</h4>
                    <a className='footer-section-link'>Contact</a>
                    <a className='footer-section-link'>Privacy Policy</a>
                    <a className='footer-section-link'>Terms of Use</a>
                </div>

                <div>
                    <h4 className="footer-section-heading">Solutions</h4>
                    <a className='footer-section-link'>Fleet Management</a>
                    <a className='footer-section-link'>Route Optimization</a>
                    <a className='footer-section-link'>Real time Tracking</a>
                    <a className='footer-section-link'>Analytics Dashboard</a>
                </div>
                </div>

            </div>

            {/* Bottom copyright note and company name */}
            <div className="footer-bottom">
                <p>© 2025 TTM Konnect. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}