import React, {useEffect, useState} from 'react';
import './Rollingpic.css'
import Image1 from '../assets/images/Teammember1.jpg';
import Image2 from '../assets/images/Teammember2.jpg';
import Image3 from '../assets/images/Teammember3.jpg';

export default function Rollingpic() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    let imgs = document.querySelectorAll(".swiper-img");
    let swiperBtn = document.querySelectorAll(".swiper-btn span");
    let current = 0;
    let len = imgs.length;

    function imgMove() {
        let mlen = Math.floor(len / 2);
        let translateValue = 150 / mlen; // translateX 
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

            imgs[leftImgIndex].style.transform = `translateX(${translateValue * (i + 1)}px) translateZ(${200 - i * 100}px)`;
            imgs[rightImgIndex].style.transform = `translateX(${-translateValue * (i + 1)}px) translateZ(${200 - i * 100}px)`;
        }

        imgs[current].style.transform = `translateZ(300px)`;
    }

    const autoMoveTimer = setInterval(() => {
      current = (current + 1) % len; 
      imgMove(); 
    }, 5000); 
  
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

    return () => {
      clearInterval(autoMoveTimer);
    };
}, []); // Empty dependency array ensures this effect runs only once after initial render


return (
    <div className='Content'>
        <div className="scrolling-wrapper">
        <div className="scrolling-content">
          {[Image1, Image2, Image3].map(img => (
            <img key={img} src={img} alt="Teammember" className="swiper-img" onClick={() => { setCurrentImage(img); setModalOpen(true); }}/>
          ))}
        </div>
        <div className="swiper-btn">
          <span className="btn-left" onClick={() => {}}> &lt; </span>
          <span className="btn-right" onClick={() => {}}> &gt; </span>
        </div>
      </div>

      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="modal-content">
            <img src={currentImage} alt="Enlarged image" />
            <span style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer', color: 'white', fontSize: '24px', fontWeight: 'bold' }} onClick={() => setModalOpen(false)}>X</span>
          </div>
        </div>
      )}
    </div>
)
}
