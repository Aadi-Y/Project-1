import React from 'react';
import "./Landing.css"
import wordmark from "../assets/wordmark.png"
import logomark from "../assets/logomark.png"

function Landing() {
  return (
    <>
      <div className="index-main-container">
        <header>
          <div className="index-header-images">
            <img src={logomark} alt="Logo" className="logoImage" />
            <img src={wordmark} alt="Wordmark" className="wordImage" />
          </div>
        </header>
        <main>
          <section className="index-video-container">
            <video src=""></video>
            <h1>Video</h1>
          </section>
          <section className="index-section-1">
            <div className="index-division-1 glass-effect">
              <h2>"Sketching exceptional apps, one pixel at a time"</h2>
              <p>
                Experience the best in class UI/UX Design with our team of experts.
                We specialize in carefully crafting unique and intuitive app and web
                user interfaces, ensuring user-friendly and visually appealing
                digital experiences.
              </p>
            </div>
          </section>
          <div className="index-division-extra">
            <section className="index-section-2">
              <div>
                <div className="index-division-2 glass-effect-division-2">
                  <h2>"Maximize the Impact of Your Brand with Strategic Branding Choices"</h2>
                  <p>
                    We specialize in creating professional branding resources, including
                    logos, packaging designs, pitch decks, custom T-shirts, and more to help
                    businesses effectively communicate their brand identity and values to
                    their target audience.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <section className="index-section-3">
            <div className="index-division-3 glass-effect">
              <h2>Leave the Heavy Lifting to</h2>
              <h2>us, watch your brand</h2>
              <h2>Thrive</h2>
              <p>
                As your partner in growth, we’re invested in your success just as much as 
                you are. Our team of experts will handle all the marketing research and 
                strategy development, so you can focus on what truly matters—expanding
                your brand.
              </p>
            </div>
          </section>
          <section className='index-section-4'>
            <div className='index-division-4'>
                <h2>Services</h2>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Landing;
