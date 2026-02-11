import React, { useState } from 'react';

export const Order = () => {
    const [paymentMethod, setPaymentMethod] = useState('UPI');
    return (
        <section id="order">
            <div className="container">
                <h2 className="section-title">Place Your Order</h2>
                <form className="order-form" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="game">Select Game</label>
                        <select id="game">
                            <option>Brawl Stars</option>
                            <option>Mobile Legends</option>
                            <option>Clash Royale</option>
                            <option>Valorant</option>
                            <option>PUBG</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="server">Server/Region</label>
                        <select id="server">
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>North America</option>
                            <option>South America</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="current-rank">Current Rank</label>
                        <input type="text" id="current-rank" placeholder="e.g., Diamond I" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desired-rank">Desired Rank</label>
                        <input type="text" id="desired-rank" placeholder="e.g., Ascendant III" />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="speed">Delivery Speed</label>
                        <select id="speed">
                            <option>Normal (Standard)</option>
                            <option>Fast (25% faster)</option>
                            <option>Instant (Immediate start)</option>
                        </select>
                    </div>
                    <div className="form-group full-width">
                        <label>Payment Method</label>
                        <div className="payment-methods">
                            {['UPI', 'PayPal', 'Crypto', 'Card'].map(method => (
                                <div key={method} className={`payment-method ${paymentMethod === method ? 'selected' : ''}`} onClick={() => setPaymentMethod(method)}>
                                    {method}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-group full-width terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the Terms & Conditions</label>
                    </div>
                    <div className="form-group full-width">
                        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Place Order</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
