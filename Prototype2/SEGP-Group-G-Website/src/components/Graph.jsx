import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'

const data = {
    labels: [1,2,3,4,5,6,7],
    datasets: [
    {
      label: 'Temperature',
      data: [2,4,6,8,2,4,7],
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 'y'
    },
    {
        label: 'Humidity',
        data: [1,3,5,7,9,11,11],
        backgroundColor: 'rgb(10, 99, 132)',
        yAxisID: 'y2'
    }
    ]
};

const Graph = () => {
  return (
    <Line data={data} options={{
        plugins: {
            title: {
                display: true,
                text: 'Temperature Humidity Graph'
            },
            // zoom: {
            //     zoom: {
            //         pinch: {
            //         enabled: true       // Enable pinch zooming
            //         },
            //         wheel: {
            //         enabled: true       // Enable wheel zooming
            //         },
            //         mode: 'x'             // Allow zooming in the x direction
            //     } 
            // },
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
        },
    }}/>
  )
}

export default Graph