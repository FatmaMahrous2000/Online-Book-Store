import "./Slider.css";
import firstBook from "../../images/book1.png";
import secondBook from "../../images/book2.png";
import thirdBook from "../../images/book3.png";
import { useState } from "react";
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
       if(direction==="left")
       {
        setSlideIndex(slideIndex>0? slideIndex-1:2)
     
       }
        else
        setSlideIndex(slideIndex<2? slideIndex+1:0)
    
    }
    return (
        <div className="slider-container">
          <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
            <div style={{transform:`translateX(${slideIndex*-100}vw)`}} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-image-wrapper">
                        <img src={firstBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                       <h1 className="slide-info-title">
                        Book Store
                       </h1>
                       <p className="slide-info-desc">
                        It's not just reading. It's living adventure.
                       </p>
                    </div>
                </div>

                <div className="slide second-slide">
                    <div className="slide-image-wrapper">
                        <img src={secondBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                       <h1 className="slide-info-title">
                        The Books For Everyone
                       </h1>
                       <p className="slide-info-desc">
                        You can read at home or at the book store.
                       </p>
                    </div>
                </div>

                <div className="slide third-slide">
                    <div className="slide-image-wrapper">
                        <img src={thirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                       <h1 className="slide-info-title">
                         Check Out The New Titles
                       </h1>
                       <p className="slide-info-desc">
                        We send you the book you want at home. 
                       </p>
                    </div>
                </div>
            </div>
            <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
        </div>
    );
}

export default Slider;