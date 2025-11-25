import React from "react";

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-white text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all bg-linear-to-r from-amber-500 via-orange-500 to-red-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsAndExpertiseSection = () => {
  return (
    <section className="px-6 py-16 text-white" id="skills-and-expertise">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills and Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Frontend Development</h3>
          <p className="text-white mb-6">
            Experience creating simple games, portfolio websites, and online store
            layouts. Explored React for building user interface and user
            experience components.
          </p>
          <SkillBar name="JavaScript + CSS" level={50} />
          <SkillBar name="React" level={30} />
        </div>


        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Cross-Platform Development</h3>
          <p className="text-white mb-6">
            Created applications for listing, recording, calculators, and simple
            games such as tic-tac-toe using Flutter and Dart.
          </p>
          <SkillBar name="Flutter + Dart" level={50} />
        </div>


        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Backend Development</h3>
          <p className="text-white mb-6">
            Built a case-study online service in C# with both local and cloud
            databases. Developed a Python educational app featuring a mini AI for
            generating periodic-table study questions.
          </p>
          <SkillBar name="C#" level={75} />
          <SkillBar name="Python" level={60} />
        </div>


        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Database Management</h3>
          <p className="text-white mb-6">
            Created and managed databases for listing systems, storage needs, and
            various case studies.
          </p>
          <SkillBar name="SQL" level={60} />
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg md:col-span-2">
          <h3 className="text-2xl font-bold mb-3">Design & Creative Tools</h3>
          <p className="text-white mb-6">
            Skilled in photo editing, graphic design, and digital art using
            Photoshop. Currently exploring Affinity with increasing familiarity.
          </p>
          <SkillBar name="Photoshop" level={60} />
          <SkillBar name="Affinity" level={40} />
        </div>

      </div>
    </section>
  );
};

export default SkillsAndExpertiseSection;
