import { services } from '../data/mockData';

export const Services = () => (
    <section id="services">
        <div className="container">
            <h2 className="section-title">Our Boosting Services</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div className="service-card" key={service.title}>
                        <div style={{fontSize: 50, marginBottom: 20}}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a href="#order" className="btn btn-secondary">Order Now</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
