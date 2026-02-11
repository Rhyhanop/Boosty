import React, { useState, useEffect, useRef } from 'react';
import { SVG } from './Icons';

export const ExtraFeatures = () => {
    const [timeLeft, setTimeLeft] = useState(12 * 3600); // 12 hours in seconds
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const popupTimeoutRef = useRef<number | null>(null);

    // Countdown Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft > 0 ? timeLeft - 1 : 0);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    // Social Proof Popup
    useEffect(() => {
        const messages = [
            "Someone from Dubai just ordered MLBB Boost!",
            "A player from California bought a Valorant coaching session.",
            "Someone from London just got a Brawl Stars Trophy Push!",
        ];

        const showRandomPopup = () => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setPopupMessage(randomMessage);
            setPopupVisible(true);

            if(popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);

            popupTimeoutRef.current = window.setTimeout(() => {
                setPopupVisible(false);
            }, 5000);
        };
        
        const interval = setInterval(showRandomPopup, 12000);
        return () => {
            clearInterval(interval);
            if(popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
        };
    }, []);

    return (
        <>
            <div className="countdown-banner">
                Limited Discount Ends In: {formatTime(timeLeft)}
            </div>
            <a href="#" className="floating-widget" aria-label="Chat on WhatsApp">
                <SVG.WhatsApp />
            </a>
            <div className={`social-proof-popup ${popupVisible ? 'show' : ''}`}>
                {popupMessage}
            </div>
        </>
    );
};
