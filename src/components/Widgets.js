import '../styles/Widgets.css';
import data from '../data.json';
import { Chart as ChartJS, LinearScale, PointElement, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bubble, Bar } from 'react-chartjs-2';
import Month from './Month';

ChartJS.register(LinearScale, PointElement, CategoryScale, BarElement, Title, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
      display: false
    },
    x: {
      min: 0.7,
      max: 12,
      display: false
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  responsive: true
};

export const options2 = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      display: false
    },
    x: {
      display: false
    }
  }
};

function Widgets() {

  function showWidgetLFull() {
    document.getElementById('WidgetLFull').style.opacity = 1;
    document.getElementById('WidgetLFull').style.zIndex = 4;
  }

  const sales = data[1].shop.sales.byMonths.filter((item) => item.type == "Sales");
  const users = data[1].shop.sales.byMonths.filter((item) => item.type == "Users");
  const product = data[1].shop.sales.byMonths.filter((item) => item.type == "Product");
  const team = data[1].shop.sales.byMonths.filter((item) => item.type == "Team");

  let salesData = [], usersData = [], productData = [], teamData = [];

  sales.forEach((item) => { salesData.push({ x: item.month, y: (item.amount/100) + 1.25, r: item.size/1.5 }) })
  users.forEach((item) => { usersData.push({ x: item.month, y: (item.amount/100) + 1.25, r: item.size/1.5 }) })
  product.forEach((item) => { productData.push({ x: item.month, y: (item.amount/100) + 1.25, r: item.size/1.5 }) })
  team.forEach((item) => { teamData.push({ x: item.month, y: (item.amount/100) + 1.25, r: item.size/1.5 }) })

  let salesAmount = 0, usersAmount = 0, productAmount = 0, teamAmount = 0;
  sales.forEach((item) => salesAmount += item.amount);
  users.forEach((item) => usersAmount += item.amount);
  product.forEach((item) => productAmount += item.amount);
  team.forEach((item) => teamAmount += item.amount);

  let weekData = [];
  data[1].shop.sales.byWeek.forEach((item) => weekData.push(item.amount));

  const data1 = {
    datasets: [
      {
        label: '',
        data: salesData.map((item) => ({
          x: item.x,
          y: item.y,
          r: item.r
        })),
        backgroundColor: 'rgba(147, 82, 229, 0.8)',
      },
      {
        label: '',
        data: usersData.map((item) => ({
          x: item.x,
          y: item.y,
          r: item.r
        })),
        backgroundColor: 'rgba(250, 230, 52, 0.8)',
      },
      {
        label: '',
        data: productData.map((item) => ({
          x: item.x,
          y: item.y,
          r: item.r
        })),
        backgroundColor: 'rgba(255, 80, 93, 0.8)',
      },
      {
        label: '',
        data: teamData.map((item) => ({
          x: item.x,
          y: item.y,
          r: item.r
        })),
        backgroundColor: 'rgba(105, 93, 251, 0.8)',
      }
    ],
  };

  const labels = [], data2 = [], colors = [];
  for(var i = 0; i < 80; i++) {
    labels.push(' '); 
    data2.push(Math.floor((Math.random() * 4) + 1));
    if(i > 18 && i <35) colors.push('#FF708B');
    else colors.push('#DBDFF1');
  }

  const data3 = {
    labels,
    datasets: [
      {
        label: '',
        data: data2,
        backgroundColor: colors.map((item) => item)
      }
    ],
  };

  return(
    <div className='Widgets'>

    <Bar style={{width: 1011, height: 50}} className='BarChart' options={options2} data={data3} />

      <div>

          <div className='WidgetM'>

            <div className='Chart'>
              <div className='Progress'></div>
              <div className='Background'></div>
              <div className='Percent'>{(data[0].users.usage.active * 100 / data[0].users.usage.nonActive) << 0}%</div>
            </div>

            <div className='WidgetMInfo'>
              <div className='WidgetMAmount'>{(data[0].users.usage.active).toLocaleString("en-US")}</div>
              <div className='WidgetMDetail'>Active users</div>
            </div>

          </div>

          <div className='WidgetM'>

            <div className='Chart'>
              <div className='Progress'></div>
              <div className='Background'></div>
              <div className='Percent'>
                {(data[0].users.time.new * 100 / data[0].users.time.existing) << 0}%
              </div>
            </div>

            <div className='WidgetMInfo'>
              <div className='WidgetMAmount'>{(data[0].users.time.new).toLocaleString("en-US")}</div>
              <div className='WidgetMDetail'>New users</div>
            </div>

          </div>

        </div>

        <div className='WidgetL' onClick={showWidgetLFull}>

          <div className='WidgetLInfo'>
            <div className='WidgetLValue'>
              <div className='WidgetLValueContainer'>
                <div className='WidgetLTitle'>Sales Figures</div>
                <div className='Value'>${ (salesAmount + usersAmount + productAmount + teamAmount).toLocaleString("en-US") }</div>
              </div>
            </div>
          </div>

            <div className='Line'>
              <div className='Yellow'></div>
              <div className='Cian'></div>
              <div className='Purple'></div>
            </div>

        </div>

        <div id='WidgetLFull'>

          <div className='Header'>

            <div className='HeaderTitle'>Sales Figures</div>

            <div className='Legend'>
              <div className='Shape'></div>
              <div className='LegendTitle'>Sales</div>
            </div>

            <div className='Legend'>
              <div className='Shape'></div>
              <div className='LegendTitle'>Users</div>
            </div>

            <div className='Legend'>
              <div className='Shape'></div>
              <div className='LegendTitle'>Product</div>
            </div>

            <div className='Legend'>
              <div className='Shape'></div>
              <div className='LegendTitle'>Team</div>
            </div>

          </div>

          <div className='WidgetLFullGraph'>

            <div className='WidgetLGraphChart'>

            <Month month="Jan"></Month>
            <Month month="Feb"></Month>
            <Month month="Mar"></Month>
            <Month month="Apr"></Month>
            <Month month="May"></Month>
            <Month month="Jun"></Month>
            <Month month="Jul"></Month>
            <Month month="Aug"></Month>
            <Month month="Sep"></Month>
            <Month month="Oct"></Month>
            <Month month="Nov"></Month>
            <Month month="Dec"></Month>

            <div className='eight00'>800</div>
            <div className='six00'>600</div>
            <div className='four00'>400</div>
            <div className='two00'>200</div>
            <div className='zero'>0</div>
            <div className='onek'>1k</div>

            <div>
              <div className='TextMsg'>$27632</div>
              <div className='TextMsg'>$27632</div>
              <div className='TextSub'>August</div>
              <div className='TextMsg'>$27632</div>
            </div>


            <Bubble className='BubbleChart' style={{ padding: 0,  width: 1010, height: 423}} options={options} data={data1} />

            </div>

          </div>

        </div>

        <div className='Footer'>
            <div className='Odv'>Orion data visualisation</div>
            <div className='Bg'>2022</div>
        </div>
    </div>
  )
}

export default Widgets;