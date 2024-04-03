// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import "./Contact.css";
import Image1 from '../assets/images/Teammember1.jpg';
import Image2 from '../assets/images/Teammember2.jpg';
import Image3 from '../assets/images/Teammember3.jpg';


export const Contact = () => {
    let [email, setEmail] = useState('');
    let [wordContent, setWordContent] = useState('');
    let [wordCount, setWordCount] = useState(0);
    const maxWordCount = 50;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleTextChange = (e) => {
        const value = e.target.value;
        if (value.length <= maxWordCount) {
            setWordContent(value);
            setWordCount(value.length);
        }
    };

    useEffect(() => {
        let imgs = document.querySelectorAll(".swiper-img");
        let swiperBtn = document.querySelectorAll(".swiper-btn span");
        let current = 0;
        let len = imgs.length;

        function imgMove() {
            let mlen = Math.floor(len / 2);
            let translateValue = 150 / mlen; // 根据图片数量动态计算 translateX 的值
            let leftImgIndex, rightImgIndex;

            for (let i = 0; i < mlen; i++) {
                leftImgIndex = current - 1 - i;
                rightImgIndex = current + 1 + i;
                if (leftImgIndex < 0) {
                    leftImgIndex += len;
                }
                if (rightImgIndex >= len) {
                    rightImgIndex -= len;
                }

                imgs[leftImgIndex].style.transform = `translateX(${translateValue * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`;
                imgs[rightImgIndex].style.transform = `translateX(${-translateValue * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`;
            }

            imgs[current].style.transform = `translateZ(300px)`;
        }

        function swiperBtnClick() {
            for (let i = 0; i < swiperBtn.length; i++) {
                swiperBtn[i].onclick = function () {
                    if (i === 0) {
                        current = (current <= 0) ? len - 1 : current - 1;
                    } else {
                        current = (current >= len - 1) ? 0 : current + 1;
                    }
                    imgMove();
                };
            }
        }

        imgMove();
        swiperBtnClick();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="container custom-container-style">
            <div className="scrolling-wrapper">
                <div className="scrolling-content">
                    <img className="swiper-img" src={Image1} alt="Teammember1" style={{width: '35%'}}/>
                    <img className="swiper-img" src={Image2} alt="Teammember2" style={{width: '35%'}}/>
                    <img className="swiper-img" src={Image3} alt="Teammember3" style={{width: '35%'}}/>
                    {/* 重复图片以实现无缝滚动 */}
                </div>
                <div className="swiper-btn" id="swiper-btn">
                    <span className="btn-left"> &lt; </span>
                    <span className="btn-right"> &gt; </span>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-info-left">
                    <h4>团队联系方式</h4>
                </div>
                <div className="contact-info-right">
                    <p>Contact number: 123-456-7890</p>
                    <p>Email: example@example.com</p>
                </div>
            </div>
            <div className="feedback-content">
                <div className="email-input-content">
                    <label htmlFor="emailInput" className="email-label">Please enter your e-mail here：</label>
                    <input
                        type="text"
                        id="emailInput"
                        value={email}
                        onChange={handleEmailChange}
                        className="email-input"
                    />
                </div>
                <div className="inquire-input-content">
                    <div className="textarea-container">
                        <textarea
                            id="inquireInput"
                            value={wordContent}
                            onChange={handleTextChange}
                            className="inquire-textarea"
                        />
                    </div>
                    <div className="word-count">{wordCount}/{maxWordCount} words</div>
                </div>
                <div className="send-button-container">
                    <button className="send-btn">Send</button>
                </div>
            </div>

        </div>
    );
};
