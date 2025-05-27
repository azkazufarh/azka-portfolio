import { portfolios } from "@/data/portfolio";
import { Portfolio as Type } from "@/types/Portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const MAX_DISPLAY = 2;

  return (
    <div className="bg-white" id="portfolio">
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-0">
        <div className="text-center mb-4">
          <h1>Portfolio</h1>
          <p>
            A collection of my projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {portfolios.map((data: Type) => (
            <Link
              key={data.id}
              href={`/portfolio/${data.slug}`}
              className="bg-white border-2 border-gray-300 rounded-2xl hover:shadow-lg hover:border-gray-500 shadow"
            >
              <Image
                src={data.image}
                width={400}
                height={300}
                alt={data.title}
                className="rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {data.title}
                </h3>
                <p className="mb-2">{data.duration}</p>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {data.technologies
                    .slice(0, MAX_DISPLAY)
                    .map((tech: string) => (
                      <p
                        key={tech}
                        className="bg-gray-200 rounded py-1 px-2 text-gray-700"
                      >
                        {tech}
                      </p>
                    ))}

                  {data.technologies.length > MAX_DISPLAY && (
                    <p className="bg-gray-300 rounded py-1 px-2 text-xs text-gray-700">
                      {data.technologies.length - MAX_DISPLAY}+ more
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-700">
                  {data.description.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
