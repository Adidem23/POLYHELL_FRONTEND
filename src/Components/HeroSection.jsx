import '../CSS/HeroSection.css';
import Polyhell from '../Images/Polyhell.png'

const HeroSection = () => {
    return (
        <section className="hero" style={{ display: "block", margin: "auto", marginTop: "35px", height: "fit-content", width: "fit-content" ,justifyItems:'center',alignItems:'center'}}>
            
            <img src={Polyhell}   alt='Image Not loaded...'/>

            <button className='but2' id='buttonnichewala' style={{display:"block",margin:"auto" ,marginBottom:'auto',marginTop:'20px'}}>Explore</button>
        
        </section>
    );
};

export default HeroSection;