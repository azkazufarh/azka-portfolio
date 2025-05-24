import Image from 'next/image';
import React from 'react'

const Portfolio = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-0">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
          <p className="text-gray-700">
            A collection of my projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <a className="bg-white border-2 border-gray-300 rounded-2xl shadow">
            <Image
              src="/images/project.png"
              width={400}
              height={300}
              alt="Project 1"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Haniza</h3>
              <div className="flex items-center gap-2 mb-1">
                <p className="bg-gray-200 rounded py-1 px-2 text-xs text-gray-700">
                  Laravel
                </p>
                <p className="bg-gray-200 rounded py-1 px-2 text-xs text-gray-700">
                  TailwindCSS
                </p>
              </div>
              <p className="text-sm text-gray-700">
                A collection of my projects that showcase my skills and
                creativity.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio