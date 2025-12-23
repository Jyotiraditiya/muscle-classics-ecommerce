import React from 'react';
import { Link } from 'react-router-dom';
import carImage from '../assets/homepage.jpeg';
import showcase1 from '../assets/photo-1605571200256-9bf9c42b8f54.avif';
import showcase2 from '../assets/photo-1573074596012-ad09948dbd8d.avif';
import showcase3 from '../assets/photo-1684174848364-a8d074f44eb2.avif';
import showcase4 from '../assets/photo-1720474753071-1d77a3f9bc3e.avif';
import showcase5 from '../assets/photo-1606577924006-27d39b132ae2.avif';
import showcase6 from '../assets/photo-1626828704419-def8aa02c886.avif';
import mustangImg from '../assets/mustang.jpeg';
import camaroImg from '../assets/camaro.jpeg';
import chevelleImg from '../assets/photo-1684174848364-a8d074f44eb2.avif';
import challengerImg from '../assets/photo-1605571200256-9bf9c42b8f54.avif';
import gt40Img from '../assets/photo-1628149682149-3eb3c488cfb5.avif';
import carsData from '../data/cars.json';

const Home = () => {
    const featured = Array.isArray(carsData) ? carsData.slice(0, 3) : [];
    const imageMap = {
        mustang: mustangImg,
        camaro: camaroImg,
        chevelle: chevelleImg,
        challenger: challengerImg,
        gt40: gt40Img,
    };

    const resolveImage = (car) => {
        if (car?.images?.length && car.images[0]) return car.images[0];
        const key = (car?.model || car?.name || '').toLowerCase();
        if (key.includes('mustang')) return imageMap.mustang;
        if (key.includes('camaro')) return imageMap.camaro;
        if (key.includes('chevelle')) return imageMap.chevelle;
        if (key.includes('challenger')) return imageMap.challenger;
        if (key.includes('gt40')) return imageMap.gt40;
        return '/assets/homepage.jpeg';
    };

    const showcase = [
        { src: showcase1, title: 'Deep Cherry Charger', info: 'Frame-off restoration • 700 HP' },
        { src: showcase2, title: 'Vintage Mustang', info: 'Concours paint • period-correct trim' },
        { src: showcase3, title: 'Modern Restomod', info: 'Carbon accents • custom interior' },
        { src: showcase4, title: 'Track-Spec Camaro', info: 'Forged wheels • track aero' },
        { src: showcase5, title: 'Sunset Fastback', info: 'Ceramic coat • forged stance' },
        { src: showcase6, title: 'Heritage GTO', info: 'Numbers-matching • museum detail' },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <header className="home-hero" style={{ backgroundImage: `url(${carImage})` }}>
                <div className="container mx-auto px-4 home-hero-content">
                    <h1>Muscle Classics</h1>
                    <p>Premium Muscle & Classic Cars. Curated collection, restoration services, and bespoke builds for enthusiasts.</p>
                    <div className="home-hero-buttons">
                        <Link to="/cars" className="btn-primary">Shop Cars</Link>
                        <Link to="/services" className="btn-secondary">Our Services</Link>
                    </div>
                </div>
            </header>

            {/* Featured Cars Section */}
            <section className="featured-section">
                <div className="container mx-auto px-4">
                    <h2>Featured Cars</h2>
                    <div className="featured-grid">
                        {featured.map((car, i) => (
                            <div key={car.name || i} className="featured-car-card">
                                <img src={resolveImage(car)} alt={car.name} />
                                <div className="featured-car-card-body">
                                    <h3>{car.name}</h3>
                                    <p className="car-meta">{car.year} • {car.model}</p>
                                    <p className="car-price">${car.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Gallery */}
            <section className="showcase-section">
                <div className="container mx-auto px-4">
                    <h2>Showcase Gallery</h2>
                    <p className="showcase-lead">A glimpse of our latest restorations and performance builds.</p>
                    <div className="showcase-grid">
                        {showcase.map((item, idx) => (
                            <div key={item.title + idx} className="showcase-card">
                                <div className="showcase-image-wrap">
                                    <img src={item.src} alt={item.title} />
                                </div>
                                <div className="showcase-card-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="services-preview">
                <div className="container mx-auto px-4">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Restoration</h3>
                            <p>Period-accurate restorations and full-frame rebuilds. We bring classic cars back to their original glory with meticulous attention to detail.</p>
                        </div>
                        <div className="service-card">
                            <h3>Performance Builds</h3>
                            <p>Engine, suspension, and drivetrain upgrades for track and street. Transform your classic into a modern performance machine.</p>
                        </div>
                        <div className="service-card">
                            <h3>Protection</h3>
                            <p>PPF, ceramic coatings, and long-term paint protection solutions. Keep your investment looking pristine for years to come.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;