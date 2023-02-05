import React from 'react';
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <div className='hero'>
            <div className='card'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(110)
                            .typeString('Hello! Meet Matt. ')
                            .pauseFor(500)
                            .typeString('He visited <strong>23 countries. </strong> ')
                            .pauseFor(500)
                            .typeString('Lived in <strong>5 cities. </strong> ')
                            .pauseFor(500)
                            .typeString('He is in <strong>Canada</strong> now. ')
                            .pauseFor(500)
                            .typeString('He is an <strong style="color: #27ae60;">educator</strong>')
                            .pauseFor(500)
                            .deleteChars(10)
                            .typeString('<strong style="color: #27ae60;"> front-end developer</strong>')
                            .deleteChars(19)
                            .typeString('<strong style="color: #27ae60;">content creator</strong>')
                            .pauseFor(100)
                            .deleteChars(15)
                            .typeString('<strong style="color: #27ae60;">lifelong learner</strong>')
                            .pauseFor(700)
                            .deleteChars(16)
                            .typeString('<strong style="color: #27ae60;">full-stack enthusiast</strong>')
                            .pauseFor(100)
                            .deleteChars(21)
                            .typeString('<strong style="color: #27ae60;">coffee lover! </strong>')
                            .pauseFor(1000)
                            .typeString('Here, you can <strong style="color: #27ae60;">find his resume</strong>')
                            .pauseFor(600)
                            .deleteChars(16)
                            .typeString('<strong style="color: #27ae60;">see his portfolio</strong>')
                            .pauseFor(300)
                            .deleteChars(17)
                            .typeString('<strong style="color: #27ae60;">read his blogposts. </strong>')
                            .typeString('Thanks for your time to visit the page.')
                            .start();
                    }}
                />
            </div>

        </div>
    )
}

export default Home