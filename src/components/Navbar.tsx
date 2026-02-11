import { useState, useEffect } from 'react';
import { SVG } from './Icons';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Home", "Services", "Pricing", "Reviews", "FAQ", "Contact"];

    return (
        <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="#home" className="logo">Elite<span>Boost</span></a>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                </nav>
                 <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <SVG.Menu />
                </div>
            </div>
        </header>
    );
};
