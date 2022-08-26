import { Header } from '../header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

export const Hero = () => {
  return (
    <div className='hero'>

        <div className="blur hero-blur"></div>

        <div className="left-h">
            <Header/>
            {/* Button Slide */}
                <div className="the-best-ad">
                    <div></div>
                    <span>El mejor club Fitness de la ciudad</span>
                </div>

            {/* Hero Heading */}

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Figura </span>
                    <span>Tu</span>
                </div>
                <div>
                    <span>Cuerpo ideal</span>
                </div>
                <div className="span">
                    <span>
                        En este lugar encontrarás la mejor forma de alcanzar la figura que deseas, junto con una buena alimentacion para tener una vida saludable
                    </span>
                </div>
            </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>Entrenadores expertos</span>
                </div>
                <div>
                    <span>+1000</span>
                    <span>Miembros</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Programas fit</span>
                </div>
            </div>

            {/* Hero buttons */}
            <div className="hero-buttons">
                <button className="btn">Inicia</button>
                <button className="btn">Ver más</button>
            </div>
        </div>


        <div className="right-h">
           <button className='btn'>Registrate ahora</button>

           <div className="heart-rate">
                <img src={Heart} alt="Heart_picture" />
                <span>Heart Rate</span>
                <span>BPM</span>
           </div>

            {/* Hero images */}
            <img src={hero_image} alt="First_Picture" className="hero-image" />
            <img src={hero_image_back} alt="Back_picture" className="hero-image-back" />
            
            {/* Calories */}
            <div className="calories">
                <img src={calories} alt="Calories" />
                <div>
                    <span>Calories burned</span>
                    <span>220 Kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}
