import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (  
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-text">
                    Follow us on social media
                </div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i style={{color:"red"}} className="bi bi-instagram"></i>
                    </div>

                    <div className="footer-social-media-icon">
                        <i style={{color:"#2980b9"}} className="bi bi-facebook"></i>
                    </div>

                    <div className="footer-social-media-icon">
                        <i style={{color:"red"}} className="bi bi-youtube"></i>
                    </div>

                    <div className="footer-social-media-icon">
                        <i style={{color:"skyblue"}} className="bi bi-twitter"></i>
                    </div>

                    <div className="footer-social-media-icon">
                        <i style={{color:"darkblue"}} className="bi bi-telegram"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Usefull Links</h3>
                    <ul className="footer-links">
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/authors" className="footer-link">Authors</Link>
                        <Link to="about" className="footer-link">About Us</Link>
                        <Link to="contact" className="footer-link">Contact Us</Link>
                        <Link to="register" className="footer-link">Register</Link>
                        
                    </ul>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Information</h3>
                      <div className="footer-address-wrapper">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"> </i>
                            Egypt - Cairo- Nasr city
                        </div>

                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill">
                            </i>
                            123-456-789
                        </div>

                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill">
                                
                            </i>
                            info@gmail.com
                        </div>
                      </div>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About Us</h3>
                     <p className="footer-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, similique. Suscipit minima cupiditate nostrum maxime amet esse saepe voluptatum sequi mollitia asperiores. Ad aspernatur fugiat quaerat autem iusto perferendis incidunt!</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;