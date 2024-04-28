import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'
import { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";
import axios from "axios";

const Graph = () => {
    const [graphData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    var temperature = [];
    var humidity = [];
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

    //This is to append the data from the database and then sort it.
    for(let i = 0; i < graphData.length ; i++) {
        temperature.push(graphData[i].Temperature);
        humidity.push(graphData[i].Humidity);
        time.push(graphData[i].Time);
        
        if (i != 0) {  
            for (let x = i; x > 0; x--) {
                let t1 = new Date(time[x]);
                let t2 = new Date(time[x-1]);
                if (t1 < t2){ 
                    time[x] = time.splice(x - 1, 1, time[x])[0];
                    temperature[x] = temperature.splice(x - 1, 1, temperature[x])[0];
                    humidity[x] = humidity.splice(x - 1, 1, humidity[x])[0];
                };
            };
        };
    };

    const data = {
        labels: time,
        datasets: [
        {
            label: 'Temperature (deg C)',
            data: temperature,
            backgroundColor: 'rgb(255, 99, 132)',
            yAxisID: 'y'
        },
        {
            label: 'Humidity (%)',
            data: humidity,
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
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 16
                        }
                    }
                },
            },
            scales: {
                y: {
                    type: 'linear', 
                    position: 'left',
                    ticks: { 
                        color: 'rgb(255, 99, 132)',
                        font: {
                            size: 14
                        }
                    },
                },
                y2: {
                    type: 'linear',
                    position: 'right',
                    ticks: { 
                        color: 'rgb(10, 99, 132)',
                        font: {
                            size: 14
                        }
                    },
                },
                x: {
                    ticks: { 
                        font: {
                            size: 12
                        }
                    },
                }
            },
            layout: {
                padding: 0
            },
        }}/>
    )
}

export default Graph