import './Programs.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

export const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explora nuestros</span>
            <span>Programas</span>
            <span className='stroke-text'>Hechos para ti</span>
        </div>

        <div className="program-categories">
            {
                programsData.map( ({id,image, heading, details}) => (
                    <div className="category" key={id}>
                        {image}
                        <span>{heading}</span>
                        <span>{details}</span>
                        <div className="join-now">
                            <span>Ingresa ahora</span><img src={RightArrow} alt="Flecha" />
                        </div>
                    </div>        
                ))
            }
        </div>
    </div>
  )
}
