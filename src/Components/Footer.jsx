import '../CSS/Footer.css'
import Logo from '../Images/PolyHell_Logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={Logo} alt="Company Logo" className="company-logo" />
                </div>
                <div className="footer-right">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p>PolyHell@gmail.com</p>
                        <p>8527697017</p>
                    </div>
                    <div className="footer-features">
                        <h3>Features</h3>
                        <ul>
                            <li>NFT</li>
                            <li>ERC20</li>
                            <li>Testnet Ethers</li>
                        </ul>
                    </div>
                    <div className="footer-resources">
                        <h3>Resources</h3>
                        <ul>
                            <li>MLSC</li>
                            <li>VIT</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 PolyHell  All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
