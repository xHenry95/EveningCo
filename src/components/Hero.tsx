import "./Hero.css";
import logo from "../assets/EveningCo-logo.svg";

const Hero = () => {
  return (
    <div className="hero-container">

        <div className="hero-content">

            {/* Logo */}
            <div className="hero-logo">
                <img src={logo} alt="EveningCo" />
            </div>

            <div className="hero-bottom">
                <div className="hero-description">
                    <h1>Banish the Big Light.</h1>
                    <h2>Stylish lamp sets that transform your space — without the glare.</h2>
                    <p>Our curated lamp sets create warm, layered lighting for modern homes.</p>
                    <p>Designed to blend in — pure, flattering glows.</p>
                </div>

                {/* CTA Button */}
                <button className="hero-button">Register interest</button>
            </div>

        </div>
        
    </div>
  );
};

export default Hero;