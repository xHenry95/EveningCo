import "./USPCarousel.css";

const USPCarousel = () => {
    return (
        <div className="usp-container">
            <h2>Evenings made <em>beautiful</em></h2>

            <div className="usp-card-box">

                <div className="usp-card">
                    <img src=""/>
                    <p>Cohesive, designer look — no mismatched lamps</p>
                </div>

                <div className="usp-card">
                    <img src=""/>
                    <p>Easy to set up, no wiring or apps</p>
                </div>

                <div className="usp-card">
                    <img src=""/>
                    <p>Warm LED bulbs included</p>
                </div>

                <div className="usp-card">
                    <img src=""/>
                    <p>Curated in sets of 3 or 6 — for living rooms, bedrooms, anywhere</p>
                </div>

            </div>

        </div>
    )
}

export default USPCarousel;