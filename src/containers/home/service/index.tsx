import React from 'react'

const Service = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto py-8 md:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="col-span-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
            What can i do for you?
          </h2>
        </div>
        <div className="col-span-2 flex flex-wrap gap-4 md:flex-nowrap">
          <div className="p-4 rounded outline outline-gray-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Web Development
            </h3>
            <p className="text-gray-700">
              Build fast, secure, and scalable websites tailored to your
              needs—from sleek portfolios to dynamic e-commerce platforms.
            </p>
          </div>
          <div className="p-4 rounded outline outline-gray-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              UI/UX Design
            </h3>
            <p className="text-gray-700">
              Create intuitive digital experiences that users love. I design
              wireframes, prototypes, and pixel-perfect interfaces focused on
              usability and aesthetics.
            </p>
          </div>
          <div className="p-4 rounded outline outline-gray-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Graphic Design  
            </h3>
            <p className="text-gray-700">
              Craft memorable visuals for your brand, including logos, social
              media assets, and marketing materials that stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service