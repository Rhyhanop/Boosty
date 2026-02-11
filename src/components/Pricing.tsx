import React from 'react';
import { pricing } from '../data/mockData';

export const Pricing = () => (
    <section id="pricing">
        <div className="container">
            <h2 className="section-title">Choose Your Boost</h2>
            <div className="pricing-grid">
                {pricing.map(plan => (
                    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={plan.tier}>
                        {plan.popular && <div className="popular-tag">Most Popular</div>}
                        <h3>{plan.tier}</h3>
                        <p className="price">{plan.price}</p>
                        <ul className="features">
                            {plan.features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                        <a href="#order" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>Select Plan</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
