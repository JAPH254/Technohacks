import React from 'react';
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { FaPeopleRoof } from "react-icons/fa6";
import './about.css';

function About() {
    return (
       <section id='about'>
        <h5>Get To Know</h5>
        <h2>Me</h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="aboutme_image">
                    <img src="src\assets\pexels-lukas-574071.jpg" alt="No image" />
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                    <FcAbout className='about_icon' />
                        <h5>Experience</h5>
                        <small>
                            3 years of experience in web development
                        </small>
                    </article>
                    <article className='about_card'>
                    <FaPeopleRoof className='about_icon' />
                        <h5>clients</h5>
                        <small>
                            Over 500+ happy clients
                        </small>
                    </article>
                    <article className='about_card'>
                    <GrProjects className='about_icon' />
                        <h5>Projects</h5>
                        <small>
                            200+ completed projects
                        </small>
                    </article>
                </div>
                <div className="about_content">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, nesciunt nisi nostrum reiciendis quam consequatur voluptatibus animi aliquam ipsum. Fuga, ab! Asperiores nostrum, dolores eaque hic aspernatur in aliquam sit.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
                </div>

            </div>
        </div>
       </section>
    );
}

export default About;