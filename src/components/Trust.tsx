import React from 'react';
import { SVG } from './Icons';

export const Trust = () => (
    <section id="trust">
        <div className="container trust-container">
            <div className="trust-badges-section">
                <h2 className="section-title">A Brand You Can Trust</h2>
                <div className="trust-badges">
                    <div className="badge"><SVG.ShieldCheck /> 100% Secure Boosting</div>
                    <div className="badge"><SVG.NoSymbol /> No Ban Guarantee</div>
                    <div className="badge"><SVG.Clock /> 24/7 Support</div>
                    <div className="badge"><SVG.UserGroup /> Pro Players Only</div>
                    <div className="badge"><SVG.CurrencyDollar /> Refund Policy</div>
                </div>
            </div>
            <div className="why-choose-us">
                <h2 className="section-title">Why Choose Elite Boost Hub?</h2>
                <ul>
                    <li><SVG.CheckCircle /> <strong>Fast Delivery:</strong> We start your order quickly to ensure the fastest completion time possible.</li>
                    <li><SVG.CheckCircle /> <strong>VPN Protection:</strong> Our boosters use premium VPNs to match your location, ensuring maximum account safety.</li>
                    <li><SVG.CheckCircle /> <strong>No Cheats Used:</strong> All boosting is done 100% by hand by professional players.</li>
                    <li><SVG.CheckCircle /> <strong>Confidential Service:</strong> We respect your privacy. Your details are kept secure and confidential.</li>
                </ul>
            </div>
        </div>
    </section>
);
