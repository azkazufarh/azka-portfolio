import { tools } from "@/data/tools";
import { Tool as Type } from "@/types/Tool";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-4">
          — Tools I Use to <br /> Build and Design
        </h1>

        {tools.map((tool: Type) => (
          <div key={tool.id} className="mb-4">
            <h3 className="text-lg md:text-3xl font-bold text-gray-900 mb-6">
              {tool.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
              {
                tool.item.map((item) => (
                  <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg hover:outline-3 hover:outline-gray-300">
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.title}
                      className="mx-auto w-fit h-12 object-center object-cover"
                    />
                    <p className="text-gray-800 font-bold text-xs md:text-sm mt-3 text-center">
                      {item.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
