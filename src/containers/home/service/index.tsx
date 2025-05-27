import { services } from '@/data/services';
import { Service as Type } from '@/types/Service';
import Image from 'next/image';
import React from 'react'


const Service = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto py-12 md:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="col-span-1">
          <h1>
            Let’s Build Something Great Together{" "}
            <span className="text-blue-800">— Here’s How I Can Help</span>
          </h1>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-nowrap">
          {
            services.map((data: Type) => (
              <div key={data.id} className="p-4 rounded outline outline-gray-300 text-center">
                <Image src={data.image} width={140} height={140} alt={data.title} className='mx-auto h-40' />
                <h2 className="text-xl font-bold mb-2 text-gray-900">{data.title}</h2>
                <p>{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Service