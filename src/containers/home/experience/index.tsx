import { experiences } from "@/data/experiences";
import { Experience as Type } from "@/types/Experience";
import React from "react";

const Experience = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-0">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Experience</h2>
          <p className="text-gray-700">
            My journey in the tech world has been a blend of learning, growth,
            and impactful contributions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-8">
          {experiences.map((data: Type) => (
            <div key={data.id} className="border border-gray-400 p-4 rounded">
              <div className="md:flex justify-between items-cente mb-2">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {data.title}
                  </h4>
                  <p className="text-gray-700">{data.position}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">{data.duration}</p>
              </div>
              <p className="text-gray-700">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 py-8 px-4 md:px-0 ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Awards</h2>
              <p className="text-gray-700">
                My achievements and recognition in the tech world.
              </p>
            </div>
            <div className="border border-gray-400 rounded md:flex justify-between items-center mb-2 p-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Champion Winner Mattel Global Internship Competition 2024
                </h4>
                <p className="text-gray-700">PT. Mattel Indonesia</p>
                <a
                  href="https://drive.google.com/file/d/1oLyw2IwWqgS1TNKNJs9gnf8idPExSuxI/view?usp=sharing"
                  className="underline text-blue-700"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
              <p className="text-gray-500 mb-2">2025</p>
            </div>
            <div className="border border-gray-400 rounded md:flex justify-between items-center mb-2 p-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Distinction Graduate Bangkit Academy 2023
                </h4>
                <p className="text-gray-700">Bangkit Academy</p>
                <a
                  href="https://drive.google.com/file/d/1U5sKjEuQWWf5uHl2pEeWso8DdDewdmS8/view?usp=sharing"
                  className="underline text-blue-700"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
              <p className="text-gray-500">2023</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Education
              </h2>
              <p className="text-gray-700">
                My achievements and recognition in the tech world.
              </p>
            </div>
            <div className="border border-gray-400 rounded md:flex justify-between items-center mb-2 p-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  President University
                </h4>
                <p className="text-gray-700">Informatics - Computer Science</p>
              </div>
              <p className="text-gray-500">2021 - 2024</p>
            </div>
            <div className="border border-gray-400 rounded md:flex justify-between items-center mb-2 p-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  SMK Al-Wafa
                </h4>
                <p className="text-gray-700">Multimedia</p>
              </div>
              <p className="text-gray-500">2018 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
