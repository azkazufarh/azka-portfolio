import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { portfolios } from "@/data/portfolio";
import { Portfolio } from "@/types/Portfolio";
import Image from "next/image";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

const PortfolioDetail = ({ params }: Params) => {
  const data: Portfolio = portfolios.find((p) => p.slug === params.slug);

  if (!data) {
    return <div>Portfolio not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.title}</h2>
        <p className="text-gray-700 mb-2">{data?.duration}</p>

        <div className="flex gap-4 flex-wrap">
          {data.technologies.map((tech) => (
            <p
              key={tech}
              className="bg-gray-200 rounded py-1 px-2 text-gray-700"
            >
              {tech}
            </p>
          ))}
        </div>

        <Image
          src={data.image}
          alt={data.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain my-4"
        />

        <p className="text-gray-700">{data.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioDetail;
