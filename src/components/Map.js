import MapPin from './MapPin';
import data from '../data.json';
import '../styles/Map.css';

function Map() {

  return(
    <div className='Map'>

      <div className='HexMap'></div>

      <div>

        {
          data[1].shop.sales.byCity.map((item) => 
            <MapPin city={item.name} amount={item.amount} />
          )
        }

        </div>
        
      </div>
  )
}

export default Map;