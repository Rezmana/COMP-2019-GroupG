// AdoptNDonate.jsx

// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AdoptNDonate.css';

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
        // 限制输入的最大值为100000 (Limit input to a maximum value of 100000)
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
        // 如果输入框为空，表示失焦时用户删除了数字，将 isBlurred 设置为 true (If the input box is empty, it means the user deleted the number when out of focus, set isBlurred to true)
        setIsBlurred(donationAmount === '');
    };

    const handleScroll = () => {
        // 根据滚动条位置设置显示的位置 (Set the displayed position based on the scroll bar position)
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
            alert('You need to LoggedIn or select Anonymous donation');
            navigate('/login');
            return;
        } else if (!isAnonymously && isLoggedIn) {
            // 用户登录且不匿名 (User logged in and not anonymous)
            axios.post('http://localhost:8000/api/donate', {
                username,
                donationAmount: donationAmountDouble,
                isAnonymously: false 
            })
            .then(response => {
                console.log(response.data.message); // 打印后端返回的消息 (show msg returned from backend)
                alert('Thank for your donation!,' + username + '!');
                setDonationAmount(''); // 清空捐赠金额 (clear donation amount)
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
                console.log(response.data.message); // 打印后端返回的消息 (show msg returned from backend)
                alert('Thank for your donation!');
                setDonationAmount(''); // 清空捐赠金额 (clear donation amount)
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
        // 获取sessionStorage中的用户名数据 (Get username data in sessionStorage)
        const storedUsername = sessionStorage.getItem('username');
        setUsername(storedUsername); // 设置用户名数据到state中 (Set username data to state)

        setIsLoggedIn(typeof storedUsername === 'string' && storedUsername.trim() !== '');
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
        <div className="container main-container">
            {/*捐赠模块 (donation module)*/}
            <div className="adoption-container"> 
                <div className="adoption-title">Welcome to Donation Page, {username ? username : 'Guest'}</div>
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
                               maxLength="6" // 限制输入长度为六位数 (Limit input length to six digits)
                               placeholder={isBlurred ? 'Any amount' : null} // 根据 isBlurred 显示虚化的单位
                        />
                    </div>
                </div>

                <div className="anonymous-donation">
                    <div className="input-style">
                        <input id="btn-item-input-checkbox"
                               type="checkbox"
                               name="donate-anonymously"
                               checked={isAnonymously} // 设置复选框的选中状态 (Set the checked state of a checkbox)
                               onChange={handleAnonymousChange} // 监听复选框的变化 (Listen for checkbox changes)
                        />
                    </div>
                    <div>Donate Anonymous</div>
                </div>

                <div className="adoption-submit" onClick={() => submit()}>
                    CONFIRM
                </div>
            </div>

            {/*Show username*/}
            <div>
                <h2>Welcome, {username ? username : 'Guest'}</h2>
            </div>

            <div classNam="show-donation">
                <div className="top-donors">
                    <h2>Top Donors</h2>
                    <ul>
                        {donors.map((donors, index) => (
                            <li key={index}>
                                Rank: {donors.rank},
                                UserID: {donors.user.UserID}, 
                                Username: {donors.user.Username}, 
                                Donation Amount: {donors.totalDonation}, 
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="total-donation">
                    <h2>Total Donation</h2>
                    <p>{totalAmount}</p>
                </div>
            </div>

        </div>
    )
}

