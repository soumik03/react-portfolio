import './Hero.css';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                {/* Notice we use className instead of class in React! */}
                <h1>Hi, I'm <span className="highlight">Soumik Datta</span> 👋</h1>
                <p className="tagline">I build beautiful, fast, accessible websites.</p>
                
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}
export default Hero