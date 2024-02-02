import { Scatter } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'

const data = {
    datasets: [
    {
      label: 'Temperature',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 'y'
    },
    {
        label: 'Humidity',
        data: [{
          x: -11,
          y: 0
        }, {
          x: 2,
          y: 10
        }, {
          x: 10,
          y: 8
        }, {
          x: 0.5,
          y: 6.5
        }],
        backgroundColor: 'rgb(10, 99, 132)',
        yAxisID: 'y2'
    }
    ]
};

const Graph = () => {
  return (
    <Scatter data={data} options={{
        plugins: {
            title: {
                display: true,
                text: 'Temperature Humidity Graph'
            },
        },
        scales: {
            y: {
                type: 'linear', 
                position: 'left',
                ticks: { 
                    color: 'rgb(255, 99, 132)'
                },
              },
            y2: {
                type: 'linear',
                position: 'right',
                ticks: { 
                    color: 'rgb(10, 99, 132)'
                },
            }
        }
    }}/>
  )
}

export default Graph