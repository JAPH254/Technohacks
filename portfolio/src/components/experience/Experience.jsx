import React from 'react'
import './Experience.css'
import { FaClipboardCheck } from "react-icons/fa";
function Experience() {
  return (
   <section id='experience'>
    <h5>What skills i have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience_frontend">
        <h3>Frontend_Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>CSS</h4>
            <small className='text-light'>intermediate</small>
          </article>
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>Django</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      <div className="experience_backend">
      <h3>Backend_Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>CSS</h4>
            <small className='text-light'>intermediate</small>
          </article>
          <article className='experience__details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>Django</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
            <FaClipboardCheck className='experience_icon'/>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience