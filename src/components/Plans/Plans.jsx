import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

export const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap:"2rem"}}>
        <span className='stroke-text'>LISTO PARA INICIAR</span>
        <span>TU RUTINA</span>
        <span className='stroke-text'>JUNTO A NOSOTROS</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {
          plansData.map( (plan) => (
            <div className="plan" key={plan.id}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {
                  plan.features.map( (feature, i) => (
                    <div className="feature">
                      <img src={whiteTick} alt="Tick" />
                      <span key={i}>{feature}</span>
                    </div>
                  ))
                }
              </div>

                <div>
                  <span> Mira más beneficios </span>
                </div>

                <button className='btn'> Comprar </button>

            </div>
          ))
        }
      </div>
    </div>
  )
}
