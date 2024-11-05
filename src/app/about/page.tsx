"use client";
import image from "next/image";
export default function About(){
    return(
        <section className="section">
        <h1 className="h1">About Me</h1>
        <div className="about">
        <div className="">
            <div>
            <image
                 src="/about.jpg"
                height={400}
                width={300}
                alt="about-image"
                className="about-image">
                    </image>
                    </div>
                
                </div>
                <div className="about-text">
                <p>
                    welcome! I am Aiman Wajid, a professional frontend web developer
                    with a passion for crafting visually captivating and highly 
                    functional websites. My approach merges creativity with technical
                    precision, ensuring that each project looks exceptional and provides
                    a seamless, user-friendly experience. by focusing on clean modern
                    design.
                </p>
                <p>
                    Every websites I develop is designed with attention to detail,
                    prioritizing responsiveness and high performance to bring you
                    vision to life across all devices. I am commited to transforming
                    ideas into engaging effective online experience that stand out 
                    a competitive digital landscape.
                </p>
                
               <div className="skills">
               <div className="skill-item">
                <h5>HTML & CSS</h5>
                <div className="html-css"></div>
                </div>  
                
               <div className="skill-item">
                <h5>Javascript</h5>
                <div className="js"></div>
                </div>
                
               <div className="skill-item">
                <h5>Typescript</h5>
                <div className="ts"></div>
                </div>
                
               <div className="skill-item">
                <h5>React js</h5>
                <div className="react-js"></div>
                </div>
                
               <div className="skill-item">
                <h5>Next js </h5>
                <div className="next-js"></div>
                </div>
                </div>
                </div>
                </div>
                </section>
    );
}

