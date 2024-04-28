import React, {useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Email from '../components/Email';
import "./Contact.css";
import Image1 from '../assets/images/Teammember1.jpg';
import Image2 from '../assets/images/Teammember2.jpg';
import Image3 from '../assets/images/Teammember3.jpg';

export const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r3vbrxd', 'template_057ur2c', form.current, {
        publicKey: 'b_1jIXYInLL0ONMuP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
    <div className='Content'>
      <h1>Contact Us</h1>
      <p>If you have any queries please do not hesitate to ask.<br></br> We will do our best to get back to you within 24 hours.</p>
      <Email></Email>

      <div className="scrolling-wrapper">
        <div className="scrolling-content">
          <img className="swiper-img" src={Image1} alt="Teammember1" style={{width: '35%'}}/>
          <img className="swiper-img" src={Image2} alt="Teammember2" style={{width: '35%'}}/>
          <img className="swiper-img" src={Image3} alt="Teammember3" style={{width: '35%'}}/>
        </div>
        <div className="swiper-btn" id="swiper-btn">
          <span className="btn-left"> &lt; </span>
          <span className="btn-right"> &gt; </span>
        </div>
       </div>
      </div>
    
  );
};
