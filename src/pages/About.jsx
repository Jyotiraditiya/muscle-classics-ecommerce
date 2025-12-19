import React from 'react';
import revBefore1 from '../assets/photo-1555160329-6a0ccf5c91f2.avif';
import revAfter1 from '../assets/photo-1573074480171-859c70091587.avif';
import revBefore2 from '../assets/photo-1626668893632-6f3a4466d22f.avif';
import revAfter2 from '../assets/photo-1628149682149-3eb3c488cfb5.avif';
import revBefore3 from '../assets/photo-1609386462833-6b0d46b2fce0.avif';
import revAfter3 from '../assets/photo-1609386464913-4cbfa39de540.avif';

const About = () => {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="eyebrow">Since 2005</p>
                    <h1>Crafting Iconic Muscle & Classic Builds</h1>
                    <p className="lead">
                        Restoration-grade craftsmanship, concours paint, and track-ready performance packages — all under one roof.
                    </p>
                    <div className="hero-badges">
                        <span>500+ restorations</span>
                        <span>Concours paint lab</span>
                        <span>Lifetime support</span>
                    </div>
                </div>
                <div className="about-hero-overlay" />
            </section>

            <section className="about-content container">
                <div className="about-grid">
                    <div className="about-card fade-in">
                        <h2>Our Philosophy</h2>
                        <p>
                            We merge period-correct authenticity with modern reliability. Every build is blueprint-documented, dyno-validated, and detailed for museum-level presentation.
                        </p>
                    </div>
                    <div className="about-card fade-in" style={{animationDelay:'0.1s'}}>
                        <h2>What We Do</h2>
                        <p>
                            Full-frame restorations, restomods, performance drivetrains, ceramic coatings, PPF, and bespoke interiors — engineered to show, drive, and last.
                        </p>
                    </div>
                    <div className="about-card fade-in" style={{animationDelay:'0.2s'}}>
                        <h2>Why Us</h2>
                        <p>
                            A veteran team of painters, fabricators, and engineers who obsess over tolerances, paint depth, and every stitch. We deliver turn-key excellence with white-glove support.
                        </p>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat fade-in" style={{animationDelay:'0.1s'}}>
                        <span className="stat-number">18</span>
                        <span className="stat-label">Years Building</span>
                    </div>
                    <div className="stat fade-in" style={{animationDelay:'0.2s'}}>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Cars Delivered</span>
                    </div>
                    <div className="stat fade-in" style={{animationDelay:'0.3s'}}>
                        <span className="stat-number">4.9★</span>
                        <span className="stat-label">Owner Satisfaction</span>
                    </div>
                    <div className="stat fade-in" style={{animationDelay:'0.4s'}}>
                        <span className="stat-number">50k sq ft</span>
                        <span className="stat-label">Shop & Paint Lab</span>
                    </div>
                </div>

                <div className="about-reviews">
                    <div className="reviews-header">
                        <h3>Owner Reviews</h3>
                        <p>Stories from recent restorations and deliveries.</p>
                    </div>
                    <div className="reviews-grid">
                        <div className="review-card fade-in">
                            <div className="review-images">
                                <img src={revBefore1} alt="Charger before" />
                                <img src={revAfter1} alt="Charger after" />
                            </div>
                            <div className="review-body">
                                <h4>“Frame-off perfection”</h4>
                                <p>“They documented every step and hit our deadline. Paint depth and panel gaps are concours-level.”</p>
                                <span className="review-meta">– Aaron M. • 1970 Charger R/T</span>
                            </div>
                        </div>

                        <div className="review-card fade-in" style={{animationDelay:'0.1s'}}>
                            <div className="review-images">
                                <img src={revBefore2} alt="Mustang before" />
                                <img src={revAfter2} alt="Mustang after" />
                            </div>
                            <div className="review-body">
                                <h4>“Drives like a modern car”</h4>
                                <p>“Rack-and-pinion, coilovers, and a tuned 5.0 — it’s a classic look with daily-drive manners.”</p>
                                <span className="review-meta">– Priya S. • ’67 Mustang Fastback</span>
                            </div>
                        </div>

                        <div className="review-card fade-in" style={{animationDelay:'0.2s'}}>
                            <div className="review-images">
                                <img src={revBefore3} alt="GTO before" />
                                <img src={revAfter3} alt="GTO after" />
                            </div>
                            <div className="review-body">
                                <h4>“Paint is mirror deep”</h4>
                                <p>“Ceramic, PPF, and interior refinish — the car won its first local show the same week.”</p>
                                <span className="review-meta">– Carlos R. • ’69 GTO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;