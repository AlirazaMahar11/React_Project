import Slider_img from '../assets/Slider_Img.avif';
import '../App.css';
import { Custom_Button } from './Button';
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export const Crausal = () => {
    let slideIndex = 0;

    // Define slides within the component to ensure they are accessible
    const slides = [
        Slider_img,
        "image2.jpg",
        "image3.jpg"
    ];

    function showSlide(n) {
        const sliderImages = document.querySelectorAll('.slider img');
        sliderImages.forEach((slide) => slide.classList.remove('active'));
        slideIndex = (n + sliderImages.length) % sliderImages.length;
        sliderImages[slideIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Auto slide
    setInterval(nextSlide, 10000);

    return (
        <>
          <div className="slider">
                <div>
                {slides.map((slide, index) => (
                  <img key={index} src={slide} className={index === 0 ? 'active' : ''} />
                  ))}
                </div>
                  <div className="slider-controls">
                  <button onClick={prevSlide}><FaAngleLeft/></button>
                <button onClick={nextSlide}><FaChevronRight/></button>
            </div>
            </div>
        </>
    );
};
