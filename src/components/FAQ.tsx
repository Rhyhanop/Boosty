import React, { useState } from 'react';
import { faqs } from '../data/mockData';

interface FAQItemProps {
    faq: { q: string; a: string; };
    index: number;
    toggleFAQ: (index: number) => void;
    openIndex: number | null;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, toggleFAQ, openIndex }) => (
    <div className={`faq-item ${index === openIndex ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
        <div className="faq-question">
            <span>{faq.q}</span>
            <span>+</span>
        </div>
        <div className="faq-answer">
            <p>{faq.a}</p>
        </div>
    </div>
);

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section id="faq">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} openIndex={openIndex}/>
                    ))}
                </div>
            </div>
        </section>
    );
};
