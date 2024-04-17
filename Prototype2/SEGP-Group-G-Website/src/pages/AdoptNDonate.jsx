// AdoptNDonate.jsx

// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './AdoptNDonate.css';

export const AdoptNDonate = () => {
    const navigate = useNavigate();
    const [donationAmount, setDonationAmount] = useState('');
    const [isBlurred, setIsBlurred] = useState(true);
    const [scrollPosition, setScrollPosition] = useState('center');
    const [isAnonymously, setIsAnonymously] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    const handleDonationChange = (e) => {
        // 限制输入的最大值为100000
        let newValue = Math.min(parseInt(e.target.value, 10) || 0, 100000);
        if (newValue === 0) {
            newValue = '';
        }
        setDonationAmount(newValue.toString());
    };

    const handleDonate = (param) => {
        let temp = param;
        if (selectedButton === '' || selectedButton !== param) {
            setSelectedButton(param)
        } else {
            setSelectedButton('')
        }
    };


    const handleBlur = () => {
        // 如果输入框为空，表示失焦时用户删除了数字，将 isBlurred 设置为 true
        setIsBlurred(donationAmount === '');
    };

    const handleScroll = () => {
        // 根据滚动条位置设置显示的位置
        setScrollPosition(
            window.scrollX === 0 ? 'flex-start' : window.scrollX + window.innerWidth >= document.body.scrollWidth - 16 ? 'flex-end' : 'center'
        );
    };

    const handleAnonymousChange = (e) => {
        setIsAnonymously(e.target.checked);
    };

    const submit = () => {
        if (!isAnonymously) {
            navigate('/Login');
        } else {
            handleDonate(donationAmount); // 匿名捐赠时执行捐赠逻辑
        }
    }

    useEffect(() => {
        // 添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);
        return () => {
            // 移除滚动事件监听器
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container main-container">
            {/*捐赠模块*/}
            <div className="adoption-container">
                <div className="adoption-title">Donation</div>
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
                               maxLength="6" // 限制输入长度为六位数
                               placeholder={isBlurred ? 'Any amount' : null} // 根据 isBlurred 显示虚化的单位
                        />
                    </div>
                </div>

                <div className="anonymous-donation">
                    <div className="input-style">
                        <input id="btn-item-input-checkbox"
                               type="checkbox"
                               name="donate-anonymously"
                               checked={isAnonymously} // 设置复选框的选中状态
                               onChange={handleAnonymousChange} // 监听复选框的变化
                        />
                    </div>
                    <div>Donate Anonymous</div>
                </div>

                <div className="adoption-submit" onClick={() => submit()}>
                    CONFIRM
                </div>
            </div>

        </div>
    )
}

