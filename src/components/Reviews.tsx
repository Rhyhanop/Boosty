import React from 'react';
import { reviews } from '../data/mockData';

export const Reviews = () => (
    <section id="reviews">
        <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="reviews-grid">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="stars">{'⭐'.repeat(review.stars)}</div>
                        <p>"{review.text}"</p>
                        <div className="review-author">- {review.author}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
