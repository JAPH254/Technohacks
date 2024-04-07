import React from 'react'
import './Header.css'

function CTA() {
  return (
    <div className="cta">
        <a href="src\assets\cv.pdf" className='btn' download onClick={() => alert('Thanks for downloading the resume. Your download will begin shortly')} >Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a> 
    </div>
  )
}

export default CTA