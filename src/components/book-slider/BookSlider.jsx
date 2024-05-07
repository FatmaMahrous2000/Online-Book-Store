import { useContext, useState } from "react";
import "./BookSlider.css"
import Rating from "./Rating";
import Modal from "../modal/Modal";
import cartContext from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookSlider = ({ data }) => {
    const [slideIndex,setSlideIndex]=useState(0)
    const [openModal,setOpenModal]=useState(false)
    const [bookData,setBookData]=useState(null)
    const {addToCart}=useContext(cartContext)
    //handle modal
    const handleModal=(book)=>{
        setOpenModal(true)
        setBookData(book)
        
    }



    //handle click
    const handleClick=(direction)=>{
        if(direction==="left")
        {
         setSlideIndex(slideIndex>0? slideIndex-1:data.length-1)
      
        }
         else
         setSlideIndex(slideIndex<2? slideIndex+1:0)
     
     }
    return (
        <div className="book-slider-container">
            <ToastContainer theme="colored" />
            <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left book-slider-arrow-left "></i>
            <div style={{transform:`translateX(${slideIndex*-340}px)`}} className="book-slider-wrapper">
               {data.map(item=>
               <div key={item.id} className="book-slide-item">
                    <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
                    <h3 className="book-slide-item-title">{item.title}</h3>
                    <Rating rating={item.rating} reviews={item.reviews}/>
                    <div className="book-slider-item-price">$ {item.price}</div>
                    <div className="book-slider-icons-wrapper">
                        <i className="bi bi-eye-fill" onClick={()=>handleModal(item)}></i>
                        <i onClick={()=>addToCart({...item,quantity:1})} className="bi bi-cart-plus"></i>
                    </div>
               </div>)}
            </div>
            <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right book-slider-arrow-right "></i>
      {openModal&& <Modal bookData={bookData} setOpenModal={setOpenModal}/> }
        </div>
    );
}

export default BookSlider;