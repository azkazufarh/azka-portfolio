import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-white" id='home'>
      <div className="relative max-w-5xl md:h-[calc(100vh-64px)] mx-auto flex flex-col justify-between items-center gap-4">
        <div className="text-center mt-6 md:mt-12">
          <p className="text-sm md:text-lg text-gray-700 mb-2">
            👋 My name is Azka and I am a
          </p>
          <h1 className='md:text-6xl'>
            Fullstack Developer <br /> &<span className="text-blue-800"> UI Designer</span>
          </h1>
        </div>
        <div className="md:absolute bottom-8 flex gap-4">
          <a href="#" className="button">
            Need for collaboration?
          </a>
        </div>
        <Image
          src="/images/profile.png"
          width={300}
          height={300}
          alt="Azka Zufar Hanif"
          className="h-[600px] w-[500px] md:h-[400px] md:w-[400px] object-top object-cover"
        />
      </div>
    </div>
  );
}

export default Hero