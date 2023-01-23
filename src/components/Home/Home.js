import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="home"
            data-aos="fade-up"
        >
            <div className="home_content">
                <h1>¡Del estanque a tu estante!</h1>
                <h2>Tus personajes favoritos en la mejor forma</h2>
                <Link to = {"/products"}>Ver todos los patitos</Link>
            </div>
            <div className="home_images">
                <div className="home_images-main"></div>
                <img src={process.env.PUBLIC_URL + "/assets/images/bannerB.png"} alt="Background"  className="home_images-back"/>
            </div>
        </div>
    )
}

export default Home;