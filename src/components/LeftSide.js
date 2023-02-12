import '../styles/LeftSide.css';
import data from '../data.json';

function LeftSide() {

  const users = data[0].users.miscellaneous + data[0].users.time.existing + data[0].users.time.new + data[0].users.usage.nonActive + data[0].users.usage.active

  return(
    <div className="LeftSide">
      <div className='Title'>

        <div className='Title1'>All users</div>

        <div className='Title2'>
          <div className='Detail'>Detail</div>
          <div className='Arrow'>
            <i class="bi bi-chevron-right"></i>
          </div>
        </div>

      </div>

      <div className='Amount1'>{users.toLocaleString("en-US")}</div>

      <div className='SideIndicators'>

        <div className='Informer'>

          <div className='InformerIcon'>
            <div className='Activity'>
              <i class="bi fs-2 bi-graph-up-arrow"></i>
            </div>
          </div>

          <div className='InformerInfo'>
            <div className='InformerTitle'>Total earning</div>
            <div className='Amount2'>
              <div className='Value'>{data[1].shop.totalEarning.toLocaleString("en-US")}</div>
            </div>
          </div>

        </div>

        <div className='Informer'>

          <div className='InformerIcon'>
            <div className='Activity'>
              <i class="bi fs-2 bi-currency-rupee"></i>
            </div>
          </div>

          <div className='InformerInfo'>
            <div className='InformerTitle'>Sales</div>
            <div className='Amount2'>
              <div className='Value'>{data[1].shop.sales.sales.toLocaleString("en-US")}</div>
            </div>
          </div>

        </div>

        <div className='Informer'>

          <div className='InformerIcon'>
            <div className='Activity'>
              <i class="bi fs-2 bi-bar-chart-fill"></i>
            </div>
          </div>

          <div className='InformerInfo'>
            <div className='InformerTitle'>Purchase</div>
            <div className='Amount2'>
              <div className='Value'>{data[1].shop.sales.purchase.toLocaleString("en-US")}</div>
            </div>
          </div>

        </div>

        </div>
    </div>
  )
}

export default LeftSide;