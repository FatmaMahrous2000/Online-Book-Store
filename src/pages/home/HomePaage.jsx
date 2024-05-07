import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import BookSlider from '../../components/book-slider/BookSlider';
import {books} from '../../data/books'
const HomePage = () => {
    return (
        <>
        <Slider/>
       <Services/>
       <HeadingTitle title={"Most gifted"}/>
       <BookSlider data={books}/>

       <HeadingTitle title={"Best seller"}/>
       <BookSlider data={books}/>

       <HeadingTitle title={"Most wished for you"}/>
       <BookSlider data={books}/>
        </>
        
        );
}
 
export default HomePage;