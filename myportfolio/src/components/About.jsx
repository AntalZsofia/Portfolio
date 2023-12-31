import React from 'react'
import './About.css';
import FrontPicture from '../Pictures/frontpicture.png';

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div>
                    <h1 className="title-font">
                        Hi, I'm Zsofia.
                        <br />I love to build amazing
                        apps.
                    </h1>
                    <p>
                        Welcome to my portfolio! I'm a full-stack developer with a passion for building different apps.
                    </p>
                    <div>
                        <a href="#contact" className="button workWithMe">
                            Work With Me
                        </a>
                        <a href="#projects" className="button seeMyWork">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div>
                    <img alt="FrontPicture" src={FrontPicture} className='frontPicture' />
                </div>
            </div>
        </section>
    );
}