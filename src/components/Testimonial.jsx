import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import network1 from '../img/network1.png';
import network2 from '../img/network2.png';
import network3 from '../img/network3.png';
import network4 from '../img/network4.png';
import network5 from '../img/network5.png';
import network6 from '../img/network6.png';
import network7 from '../img/network7.png';
import "swiper/css";
import 'swiper/css/pagination';
import '../styles/Global.css';

function Testimonial() {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My network saying</span>
      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper 
            modules={[Pagination]}
            pagination={{ "dynamicBullets": true }}
            breakpoints={{ 568: { slidesPerView: 2 } }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network1 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Renan Antunes</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" I'm very lucky to work with André on our latest project, the Recipes App. In addition to being extremely competent, André proved to be organized, flexible and above all a very nice person. His qualities undoubtedly contributed directly to the final result of the project, which was amazing. "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network2 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Anderson Pedrosa</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" André worked with me and two other people on a project, it was an excellent experience and one that would take into my life. André was very collaborative, empathetic and solicitous in everything, not to mention the technical ability in React, Context API and React Router Dom. Very happy to have worked with him. "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network3 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Abimael Albuquerque</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" When I think about perfection and excellence, I remember André! We work together in a team project and his concern and care have always been consistent with his capacity and technical performance! What he promises, he does! "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network4 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Adão Benites</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
              <p className="testimonial__description">" André is a very helpful and collaborative person, it was great to work with him on the project we did together, his innovative spirit and technical mastery were decisive for the success of our project. "</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network5 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Ismael Torres</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
              <p className="testimonial__description">" Work with André was a great experince for both, me and the team we were on. His communication skills and technical knowledge made difference in the whole project. In fact, an excellent professional! "</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network6 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Mariana Savoldi</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
              <p className="testimonial__description">" André has many good ideas, is very creative and communicative. We did a lot of soft skill dynamics at Trybe and I could recognize that these are his strongest points. I haven't had a chance to work on a project with him yet, but I believe that hard skills are just as good as soft skills!! "</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network7 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Alexandre Damasceno</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
              <p className="testimonial__description">" I believe that André has the best of both worlds, on the one hand the ability to abstract the problem and on the other the ability to put in a clean and concise code what was abstracted, a task that is not so easy to be performed. I could see this in one of the group projects we did at Trybe, where we had to develop an application in React using Redux, working with component lifecycles, among other tools. And, of course, all this together with proactivity, efficient communication and the sense of team developed in teamwork. "</p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
