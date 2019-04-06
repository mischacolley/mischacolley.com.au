import React from 'react'

class WhatIDo extends React.Component {
  render() {
    return (
      <div className="about-detail-inner">
        <div className="intro-text">I love writing HTML, CSS and JavaScript. I am passionate about building great user experiences upon responsive, progressively enhanced foundations that deliver fast, easy to use sites and services.</div>
        <div className="box-container">
          <div className="box">
            <h3>For Agencies</h3>
            <p>As a Front-End Developer the work I do in teams lies at the crossroads between design and development. I pride myself on my ability to work collaboratively with designers to bring designs to life in the browser and engineers to apply those designs to the underlying functionality and logic that makes websites and apps do what they do. I've done a bunch of work with WordPress, Drupal, Ruby on Rails and I'm currently working with Craft CMS a lot.</p>
            <a className="cta contact-toggle" href="#contact">Hire Me</a>
          </div>
          <div className="box">
            <h3 className="ec">For Small Business</h3>
            <p>The time I've spent building for the web has given me a diverse set of skills that enable me to help small business owners. Through my business, Exposé Creative, I help businesses interact and transact with their customers by providing knowledge and simple tools to make the web work for them. I pride myself on delivering simple solutions where people come before technology.</p>
            <a target="_blank" className="cta ec" href="http://www.exposecreative.com">Hire EC</a>
          </div>
        </div>
        <div className="box-full">
          <h3 className="ec">For Myself</h3>
          <p>I'm very passionate about the web work I do but I also have a life and interests outside of the web. I have a young daughter and son and love spending time with them and their mum and our network of friends and family. I love to Travel and I have a passion for Education, Technology and the Creative Arts. Starting a family has brought a lot of my youthful desires for making the world a better place to the surface. Those desires have found a real home at AIME. I believe strongly in the enabling power of the web, that being what drew me to it in the first place.</p>
        </div>
      </div>
    )
  }
}

export default WhatIDo
