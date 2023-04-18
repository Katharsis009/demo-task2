import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <h2>About the GT-R</h2>
                <p>The Nissan GT-R is widely regarded as one of the most iconic nameplates of all time, and not just in tuner culture but amongst car enthusiasts around the globe. This cachet, as well as the GT-R’s inherent capabilities, has allowed Nissan to stretch the lifespan of the current-gen R35 model, which entered the market way back in 2009.</p>
                <p>To be fair, the Japanese automaker has refined the GT-R since then, but the core formula remains the same:</p>
                <ul>
                    <li>3.8-liter V-6 engine</li>
                    <li>Two turbochargers</li>    
                    <li>A 6-speed dual-clutch transmission</li>   
                    <li>ATTESA E-TS all-wheel drive system</li>   
                </ul>
                <p>These ingredients once allowed Nissan’s supercoupe to reign supreme—including hard-to-believe Nurburgring lap times—but it has since been dethroned by rivals like the Chevrolet Corvette Z06 and Porsche 911 Turbo. On top of being outmuscled by most of its competitors, the GT-R’s spartan interior means it’s also outclassed.</p>
                <p>Despite these shortcomings, the GT-R is still an exemplary machine that can pound out sprints in about 3 seconds, and we will likely look back at it endearingly once it performs one last smokey burnout and blasts off into the tire smoke of history.</p>
                <Link to = "/">Back</Link>
        </div>
    );
}

export default About;