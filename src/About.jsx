import React from "react";
import "./About.css";
import man from './assets/man.jpg'

function About() {
    return (
        <div className="abcontainer">
            <img className="image" src={man} alt="" style={{width:'400px',height:'600px'}} />
            <header className="header">
                <h1 className="title">ABOUT DR. CEDRIC SPITH</h1>
                <p className="subtitle">An Award-Winning Psychologist</p>
            </header>
            <p className="aboutDesc">Dr. Cedric Spith’s journey into psychology began with a deeply personal motivation—witnessing <br></br> the impact of unaddressed trauma within his own family. Growing up, he saw how life-altering events <br></br> could profoundly affect mental health, sparking his passion to make a difference. This led him to pursue<br></br> a Bachelor’s degree in Psychology, followed by a Master’s and Ph.D. in Clinical Psychology, where he <br></br>focused his research on trauma and its effects on the brain.
                Dr. Spith gained experience working with veterans <br></br>and first responders during his early career, providing him with firsthand insight into the challenges faced by<br></br> those who have experienced severe trauma. He has also collaborated with community organizations to help<br></br> survivors of abuse, natural disasters, and violent crime rebuild their lives.
                Throughout his career, Dr. Spith<br></br> has helped countless individuals regain hope and stability, including a young woman who overcame debilitating<br></br> flashbacks after a car accident and a firefighter struggling with the emotional toll of years on the job. His innovative<br></br> use of therapies like EMDR and mindfulness techniques has earned him recognition among his peers and gratitude <br></br>from his patients.
            </p>
            <br></br>  <br></br>  <br></br>
            <h3 className="foot"> Today, Dr. Cedric Spith continues to dedicate his life to empowering individuals to heal and thrive, proving that recovery is always possible with the right support</h3>

        </div>
    );
};

export default About;
