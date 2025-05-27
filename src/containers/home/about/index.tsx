import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-0" id='about'>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 justify-center items-center">
          <div>
            <p className="md:text-xl text-gray-900">Azka Zufar Hanif</p>
            <h1 className='mb-4'>
              A Tech & <br /> Design Enthusiast
            </h1>
            <a
              href="https://drive.google.com/file/d/1CoWx0zm-9tSmfcz7FoN1I3-0uJyTOgt8/view?usp=sharing"
              target="_blank"
              className="button"
            >
              See My Resume
            </a>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-bold text-blue-800 mb-2">
              &quot;Turning ideas into functional art—where code meets
              creativity&quot;
            </p>
            <p>
              With 3+ years of coding experience, I blend technical skills and
              design thinking to build impactful digital solutions. My journey
              includes interning at PT. Mattel Indonesia as a Quality Intern,
              where I developed internal web systems, and leading design
              initiatives as Vice Director of Design at PUMA Computing in my
              university. Passionate about merging logic with aesthetics, I
              thrive on creating intuitive, user-driven experiences—let’s
              collaborate and bring ideas to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About