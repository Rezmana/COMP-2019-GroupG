import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css";
import SeaTurtleImage from "../assets/images/SeaTurtle.jpg";
import TeamPhoto from "../assets/images/TeamPhoto.jpg";
import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import HomeArticles from "../components/HomeArticles";



export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after a short delay to trigger the fade-in effect
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="Content">
            <Fade>
            <div>
                <h1>Adopt a Turtle</h1>
                <div className="row">
                    <div className="column">
                        <img src={SeaTurtleImage} className="turtle" alt="Sea Turtle" width={500} height={400} />
                    </div>
                    <div className="column">
                        <div className="bord">
                            <h3>Sea Turtles in Malaysia</h3>
                            <p>Input information about different sea turtles in Malaysia here. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="bord">
                            <h2>How We Track our Sea Turtles</h2>
                            <p>Input information about the planting of the trackers and how they work. (photo will be changed)</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={TeamPhoto} className="team" alt="Team Photo" width={500} height={400} />
                    </div>

                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col">
                        <h2>1million+</h2>
                        <p>Turtles are poached from 1990 to 2020.</p>
                    </div>
                    {/* <div> HEH EH EH EHE</div> */}
                    <div className="col">
                        <h2>95%</h2>
                        <p>of HawksBill Turtle and LeatherBack Turtle are poached each year</p>
                    </div>
                    <div className="col">
                        <h2>61%</h2>
                        <p>are approximately threathened or extinct due to habitat loss or bycatch</p>
                    </div>
                    <hr/>
                </div>
            </div>
            
            <HomeArticles></HomeArticles>

            </Fade>
        </div>
    )
    // const {data: posts, isLoading, error} = useFetch("http://localhost:8000/api/get");
    // if (isLoading) {
    //     return <h2>Loading...</h2>;
    //   }

    //   // Handle error
    //   if (error) {
    //     return <div className="error">Error: error fetching</div>;
    //   }

    //   return (
    //     <div>
    //       <h1 className='title'>Post of users</h1>
    //       {posts.map((post) => (
    //           <p>{post.body}</p>
    //       ))}
    //     </div>
    //   );
    //     const [data, setData] = useState([]);
    //     const [isLoading, setIsLoading] = useState(true);
    //     const [error, setError] = useState(null);

    //     useEffect(() => {
    //         axios.get('http://localhost:8000/api/getCoordinates')
    //             .then(response => {
    //                 setData(response.data);
    //                 console.log(response.data); // Process the data received from the API
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data:', error);
    //             });
    //     }, []);

    //     return (
    //         <div>
    //         <h1>API Data</h1>
    //         <ul>
    //           {data.map(item => (
    //             <li key={item.id}>
    //               <p>Turtle ID: {item.TurtleID}</p>
    //               <p>Longitude: {item.Longitude}</p>
    //               <p>Latitude: {item.Latitude}</p>
    //               {/* Render more fields as needed */}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )

    //     // axios.get('http://localhost:8000/api/get')
    //     // .then(response => {
    //     //     console.log(response.data); // Process the data received from the API
    //     // })
    //     // .catch(error => {
    //     //     console.error('There was a problem with the axios request:', error);
    //     // });
    // }



    // export const HomePage = () => {

}