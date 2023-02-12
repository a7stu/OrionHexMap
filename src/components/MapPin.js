import '../styles/MapPin.css';

function MapPin(props) {
  return(

  <div className='MapPin'>

    <div className='PinArrow'></div>

    <div className='Tooltip'>

      <div className='PinIndicator'>

        <div className='PinIcons'>
          <div className='PinIcon'>
            <div className='PinIconSVG'>
              <i class="bi fs-4 bi-buildings"></i>
            </div>
          </div>
        </div>

        <div className='PinIconBg'></div>

      </div>

      <div className='PinInfo'>
        <div className='PinTitle'>{props.city}</div>
        <div className='PinAmount'>{props.amount.toLocaleString('en-US')}</div>
      </div>

    </div>

  </div>
  )
}

export default MapPin;