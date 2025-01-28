import { useNavigate } from 'react-router-dom'; 
import './HomePage.css'


function HomePage() {

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
      
      };

    return (
        <div className="background-image">
             <div className="overlay"></div> {/* Dark overlay */}
            <div className="content">
                <div className= "content2">
                <br /> <br /> <br /><br /> 
                    <h1 className='h1'>DR. CEDRIC SPITH</h1>
                    <p className='Para'>Psychologist who specializes in PTSD</p>
                    <br /><br /> <br /> <br /><br /> 
                    
                    <p className='desc'>Dr. Cedric Spith is a compassionate psychologist specializing in PTSD recovery. With a deep commitment <br />
                        to helping individuals heal from trauma, Dr. Spith uses proven methods like Cognitive Behavioral Therapy <br />
                        (CBT) and EMDR to guide patients toward emotional resilience and renewed strength. Known for his empathetic <br />
                        approach and personalized care, Dr. Spith creates a safe space for healing, empowering clients to overcome <br />
                        anxiety, flashbacks, and other PTSD challenges. Take the first step toward reclaiming your peace—trust <br />
                        Dr. Cedric Spith to guide you on your journey to recovery.
                    </p>
                    <br /> <br /><br /> 
                    <button className='but' onClick={() => handleClick('/Bookings')}>Book an appointment now!</button>
                   
                </div>
            </div>
        </div>
    )
}

export default HomePage