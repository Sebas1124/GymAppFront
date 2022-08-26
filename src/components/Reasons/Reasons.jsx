import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


export const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="Image" />
            <img src={image2} alt="Image" />
            <img src={image3} alt="Image" />
            <img src={image4} alt="Image" />
        </div>
        <div className="right-r">
            <span>Algunas razones de</span>

            <div>
                <span className='stroke-text'>¿Por qué </span>
                <span>Nosotros?</span>
            </div>

            <div className='details-r'>

                <div>
                    <img src={tick} alt="" />
                    <span>Alrededor de 150+ entrenadores expertos</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Mas economico de la ciudad</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 Regalo por cada nuevo miembro</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>10+ años de experiencia</span>
                </div>

            </div>
            <span style={{
                color: "var(--gray)",
                fontWeight: "normal"
            }}>
             Nuestros patrocinadores
            </span>
            
            <div className="partners">
                <img src={nike} />
                <img src={adidas} />
                <img src={nb} />
            </div>

        </div>
    </div>
  )
}
