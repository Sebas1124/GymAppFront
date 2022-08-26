import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import LeftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png';
import './Testimonials.css';

export const Testimonials = () => {

    const [Selected, setSelected] = useState(0);

    const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonios</span>
            <span className='stroke-text'>Lo que ellos</span>
            <span>Dicen acerca de nosotros</span>

                <span>
                    {
                        testimonialsData[Selected].review
                    }
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {
                            testimonialsData[Selected].name
                        }
                    </span>
                    - {testimonialsData[Selected].status}
                </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[Selected].image}/>

            <div className="arrows">
                <img 
                onClick={ () => {
                    Selected === 0
                        ? setSelected(tLength -1)
                        : setSelected( (prev) => prev-1 );
                }} 
                src={ LeftArrow } alt="" />

                <img
                 onClick={ () => {
                    Selected === tLength - 1
                        ? setSelected(0)
                        : setSelected( (prev) => prev + 1 )
                }} 
                src={ RightArrow } alt="" />
            </div>
        </div>
    </div>
  )
}
