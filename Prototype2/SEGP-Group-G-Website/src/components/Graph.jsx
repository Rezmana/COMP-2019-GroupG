import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'
import { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";
import axios from "axios";

const Graph = () => {
    const [graphData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    var temp = [];
    var humd = [];
    var time = [];

    useEffect(() => {
        axios.get('http://localhost:8000/api/getGraphData')
            .then(response => {
                setData(response.data);
                console.log(response.data); // Process the data received from the API
            })
            .catch(error => {
                console.error('Error fetching data:', error.response.graphData);
            });
    }, []);

    //This is to append the data from the 
    for(let i = 0; i < graphData.length ; i++) {
        temp.push(graphData[i].Temperature);
        humd.push(graphData[i].Humidity);
        time.push(graphData[i].Time);
    };

    const data = {
        labels: time,
        datasets: [
        {
            label: 'Temperature',
            data: temp,
            backgroundColor: 'rgb(255, 99, 132)',
            yAxisID: 'y'
        },
        {
            label: 'Humidity',
            data: humd,
            backgroundColor: 'rgb(10, 99, 132)',
            yAxisID: 'y2'
        }
        ]
    };

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