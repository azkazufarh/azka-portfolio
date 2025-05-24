import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative max-w-5xl md:h-[calc(100vh-64px)] mx-auto flex flex-col justify-between items-center gap-4">
        <div className="text-center mt-12">
          <p className="md:text-lg text-gray-700 mb-2">
            👋 My name is Azka and I am a Freelance
          </p>
          <h1 className="text-3xl md:text-6xl text-center font-extrabold text-gray-800">
            Fullstack Developer <br /> <span className="">& UI Designer</span>
          </h1>
        </div>
        <Image
          src="/images/profile.png"
          width={300}
          height={300}
          alt="Azka Zufar Hanif"
          className=""
        />
        <div className="absolute bottom-8 flex gap-4">
          <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded">
            Need a developer?
          </a>
          <a href="#" className="bg-transparent text-gray-900 outline outline-gray-900 px-4 py-2 rounded">
            Need a designer?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero