import React, { useState } from 'react';
import unimep from '../img/unimep.jpg';
import uninter from '../img/uninter.jpg';
import inlingua from '../img/inlingua.jpg';
import inpg from '../img/inpg.jpg';
import trybeCertificate from '../img/trybeCertificate.png';
import '../styles/Global.css';

function Qualification() {
  const[qualific, setQualific] = useState(false);

  function handleEducation() {
    setQualific(false);
  }

  function handleWork() {
    setQualific(true);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex" onClick={ handleEducation }>
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div className="qualification__button button--flex" onClick={ handleWork }>
            <i className="uil uil-briefcase-alt qualification__icon" />
            Work
          </div>
        </div>
        <div className="qualification__sections">

          <div className={ qualific ? "qualification__content" : "qualification__content qualification__active"} data-content id="education">
            <div className="qualification__data">
              <div>
                <img src={ unimep } className="qualification__img" alt="University Degree" />
                <h3 className="qualification__title">Bachelor in Business Administration</h3>
                <span className="qualification__subtitle">Unimep University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2002 - 2008
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>         
            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>    
              <div>
                <img src={ inpg } className="qualification__img" alt="University Degree" />
                <h3 className="qualification__title">MBA in Business Management</h3>
                <span className="qualification__subtitle">INPG</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2008 - 2010
                </div>
              </div>    
            </div>
            <div className="qualification__data">
              <div>
                <img src={ inlingua } className="qualification__img" alt="Interchange Certificate" />
                <h3 className="qualification__title">English Interchange</h3>
                <span className="qualification__subtitle">Canada - Vancouver/BC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  10/2011 - 1 Month
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>         
            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>    
              <div>
                <img src={ uninter } className="qualification__img" alt="University Degree" />
                <h3 className="qualification__title">Technologist in System Analysis/Development</h3>
                <span className="qualification__subtitle">UNINTER University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2019 - 2021
                </div>
              </div>    
            </div>
            <div className="qualification__data">
              <div>
                <img src={ trybeCertificate } className="qualification__img" alt="Trybe Certificate" />
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Trybe</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>         
            </div>
          </div>
          <div className={ qualific ? "qualification__content qualification__active" : "qualification__content" } data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Clerk</h3>
                <span className="qualification__subtitle">Bank Bradesco</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2003 - 2007
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>         
            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>    
              <div>
                <h3 className="qualification__title">Bank teller</h3>
                <span className="qualification__subtitle">Bank Bradesco</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2007 - 2011
                </div>
              </div>    
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bank manager</h3>
                <span className="qualification__subtitle">Bank Bradesco</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2011 - 2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>         
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>    
              <div>
                <h3 className="qualification__title">Monitoring coordinator</h3>
                <span className="qualification__subtitle">GF Alarms</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2015 - 2016
                </div>
              </div>     
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Seller</h3>
                <span className="qualification__subtitle">Passarela shoes</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2017 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>         
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>    
              <div>
                <h3 className="qualification__title">Development Analyst</h3>
                <span className="qualification__subtitle">Blip</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2021 - 2023
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
