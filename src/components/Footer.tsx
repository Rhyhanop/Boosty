import React from 'react';

export const Footer = () => (
    <footer className="app-footer">
        <div className="container footer-content">
            <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Refund Policy</a>
            </div>
            <div className="social-icons">
                {/* Add social links here */}
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Elite Boost Hub. All Rights Reserved.
            </div>
        </div>
    </footer>
);
