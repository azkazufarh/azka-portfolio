import React from 'react'

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
        <div className="grid grid-cols-1 gap-4">
          <div className="border border-gray-400 rounded md:flex justify-between items-center p-4">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                PT. Mattel Indonesia
              </h4>
              <p className="text-gray-700">Fullstack Developer Intern</p>
            </div>
            <p className="text-gray-500">Aug 2023 - Dec 2024</p>
          </div>
          <div className="border border-gray-400 rounded md:flex justify-between items-center p-4">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                PUMA Computing (BEM Fakultas)
              </h4>
              <p className="text-gray-700">Vice Of Division Communication & Design </p>
            </div>
            <p className="text-gray-500">Dec 2022 - Dec 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience