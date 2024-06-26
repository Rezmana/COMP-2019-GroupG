// AdoptNDonate.jsx

// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AdoptNDonate.css';
import Footer from "../components/Footer"

export const AdoptNDonate = () => {
    const navigate = useNavigate();
    const [donationAmount, setDonationAmount] = useState('');
    const [isBlurred, setIsBlurred] = useState(true);
    const [scrollPosition, setScrollPosition] = useState('center');
    const [isAnonymously, setIsAnonymously] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    const [donors, setDonors] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDonationChange = (e) => {
        // 100000 (Limit input to a maximum value of 100000)
        let newValue = Math.min(parseInt(e.target.value, 10) || 0, 100000);
        if (newValue === 0) {
            newValue = '';
        }
        setDonationAmount(newValue.toString());
    };

    const handleDonate = (param) => {
        if (selectedButton === '' || selectedButton !== param) {
            setSelectedButton(param);
            setDonationAmount(param); // set donationAmount
        } else {
            setSelectedButton('');
            setDonationAmount(''); // clear donationAmount
        }
    };


    const handleBlur = () => {
        //  isBlurred  true (If the input box is empty, it means the user deleted the number when out of focus, set isBlurred to true)
        setIsBlurred(donationAmount === '');
    };

    const handleScroll = () => {
        //  (Set the displayed position based on the scroll bar position)
        setScrollPosition(
            window.scrollX === 0 ? 'flex-start' : window.scrollX + window.innerWidth >= document.body.scrollWidth - 16 ? 'flex-end' : 'center'
        );
    };

    const handleAnonymousChange = (e) => {
        setIsAnonymously(e.target.checked);
    };

    const submit = () => {
        if (!donationAmount) {
            // if donationAmount is empty, show the msg and stop the submit
            alert('You didnt select any amount, please chosen one when you click CONFIRM button');
            return;
        }
        //change string to double
        const donationAmountDouble = parseFloat(donationAmount);

        if (!isAnonymously && !isLoggedIn) {
            alert('You need to be logged in or select Anonymous donation');
            sessionStorage.setItem('donating', true);
            navigate('/login');
        } else if (!isAnonymously && isLoggedIn) {
            //  (User logged in and not anonymous)
            axios.post('http://localhost:8000/api/donate', {
                username,
                donationAmount: donationAmountDouble,
                isAnonymously: false 
            })
            .then(response => {
                console.log(response.data.message); // (show msg returned from backend)
                alert('Thank for your donation, ' + username + '!');
                setDonationAmount(''); //  (clear donation amount)
                sessionStorage.removeItem('donating');
            })
            .catch(error => {
                console.error('Error donating:', error);
            });
        } else {
            // user select anonymous whatever it is loggedin or not
            axios.post('http://localhost:8000/api/donate', {
                username,
                donationAmount: donationAmountDouble,
                isAnonymously: true
            })
            .then(response => {
                console.log(response.data.message); //  (show msg returned from backend)
                alert('Thank for your donation!');
                setDonationAmount(''); //  (clear donation amount)
            })
            .catch(error => {
                console.error('Error donating:', error);
            });
        }
    }
    

    useEffect(() => {
        // 添加滚动事件监听器 (Add scroll event listener)
        window.addEventListener('scroll', handleScroll);
        return () => {
            // 移除滚动事件监听器 (Remove scroll event listener)
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        //  (Get username data in sessionStorage)
        const storedUsername = sessionStorage.getItem('username');
        setUsername(storedUsername); // (Set username data to state)

        setIsLoggedIn(typeof storedUsername === 'string' && storedUsername.trim() !== '');

        if (sessionStorage.getItem('donating')) {
            sessionStorage.removeItem('donating');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/donors')
            .then(response => {
                setDonors(response.data.donors);
                console.log(response.data.donors);
            })
            .catch(error => {
                console.error('Error fetching donors:', error);
            });

        axios.get('http://localhost:8000/api/totalamount')
            .then(response => {
                setTotalAmount(response.data.totalAmount);
                console.log(response.data.totalAmount);
            })
            .catch(error => {
                console.error('Error fetching total donation:', error);
            });
    }, []);
    
    return (
        <div>
            <br/>
        <div className="donation-page-container main-container">
            {/* (donation module)*/}
            <div className="adoption-container"> 
                <div className="adoption-title">Welcome to Donation Page{username ? ', '+username : ''}!</div>
                <div className="adoption-buttons-list">
                    <div className="btn-item">
                        <button id="btn-style" className={selectedButton === '10' ? 'selected' : ''} onClick={() => handleDonate('10')}>10</button>
                    </div>
                    <div className="btn-item">
                        <button id="btn-style" className={selectedButton === '20' ? 'selected' : ''} onClick={() => handleDonate('20')}>20</button>
                    </div>
                    <div className="btn-item">
                        <button id="btn-style" className={selectedButton === '50' ? 'selected' : ''} onClick={() => handleDonate('50')}>50</button>
                    </div>
                    <div className="btn-item">
                        <button id="btn-style" className={selectedButton === '100' ? 'selected' : ''} onClick={() => handleDonate('100')}>100</button>
                    </div>
                    <div className="btn-item">
                        <button id="btn-style" className={selectedButton === '500' ? 'selected' : ''} onClick={() => handleDonate('500')}>500</button>
                    </div>
                    <div className="btn-item">
                        <input id="btn-item-input-text" type="text"
                               value={donationAmount}
                               onChange={handleDonationChange}
                               onBlur={handleBlur}
                               maxLength="6" //(Limit input length to six digits)
                               placeholder={isBlurred ? 'Any amount' : null} //  isBlurred
                        />
                    </div>
                </div>

                <div className="anonymous-donation">
                    <div className="input-style">
                        <input id="btn-item-input-checkbox"
                               type="checkbox"
                               name="donate-anonymously"
                               checked={isAnonymously} // (Set the checked state of a checkbox)
                               onChange={handleAnonymousChange} //  (Listen for checkbox changes)
                        />
                    </div>
                    <div>Donate Anonymous</div>
                </div>

                <div className="adoption-submit" onClick={() => submit()}>
                    CONFIRM
                </div>
            </div>

        <div className="donations-layout-container">
            <div className="scrollable-container">
            <table className="top-donors-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        {/* <th>UserID</th>
                        <th>Username</th> */}
                        <th>Donation</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map((donor, index) => (
                        <tr key={index}>
                            <td>{donor.rank}</td>
                            {/* <td>{donor.user.UserID}</td> */}
                            {/* <td>{donor.user.Username}</td> */}
                            <td>RM{donor.totalDonation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
                <div className="total-donation-container">
                    <p className="total-donation-amount">RM{totalAmount}</p>
                </div>
        </div>
        </div>

    )
}

