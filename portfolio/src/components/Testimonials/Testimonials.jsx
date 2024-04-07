import React from 'react'
import './Testimonials.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="src\assets\pexels-christina-morillo-1181278.jpg" alt="No image" />
          </div>

            <h5 className='client__name'>Client Name</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est eaque dolores consequatur provident sint natus id veniam rerum sequi hic voluptates similique architecto nostrum sit, ut harum voluptatem et?
            </small>
         
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials