import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">
              Azka Zufar Hanif
            </p>
            <p className="text-gray-700">
              Fresh graduate with 3 years of web development experience.
              Expertise in Web Development & Design. Interest in the world of technology opens up
              opportunities to work and contribute to projects.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">Quick Links</p>
            <a href="" className="text-gray-700 mb-2 block">
              About Me
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Projects
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Blog
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Resume
            </a>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">Connects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
