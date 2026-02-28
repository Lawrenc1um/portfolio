const experiences = [
  {
    type: "internship",
    title: "C++ File Processing Tool Developer",
    organization: "推想医疗科技股份有限公司 (InferVision)",
    period: "2024",
    description: "AI医疗公司实习。开发C++文件处理工具，用于医疗数据处理。",
    highlights: ["C++ Development", "File Processing", "Healthcare AI"],
  },
  {
    type: "hackathon",
    title: "MakeUofT",
    organization: "University of Toronto",
    period: "2025",
    description: "参与 MakeUofT hackathon，构建创新项目。",
    highlights: ["Hackathon", "Team Project", "Innovation"],
  },
  {
    type: "hackathon",
    title: "Other Hackathons",
    organization: "Various",
    period: "2024-2025",
    description: "积极参与各类hackathon，提升实践能力。",
    highlights: ["Problem Solving", "Fast Prototyping", "Teamwork"],
  },
  {
    type: "sports",
    title: "Captain - Beijing Infinites",
    organization: "Ultimate Frisbee",
    period: "High School",
    description: "高中 Ultimate Frisbee 队长，带领队伍参加比赛。",
    highlights: ["Leadership", "Team Management", "Competition"],
  },
  {
    type: "sports",
    title: "Lethal Violet",
    organization: "清华附属联队",
    period: "High School",
    description: "代表清华附属参加联赛，主handler位置。",
    highlights: ["Handler", "Team Player", "Sports"],
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      <p className="text-gray-500 mb-12">Internships, hackathons, and more</p>

      {/* Internships */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">💼 Internship</h2>
        <div className="space-y-4">
          {experiences
            .filter((e) => e.type === "internship")
            .map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-blue-400">{exp.organization}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
                <div className="flex gap-2 mt-4">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Hackathons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-purple-400">🛠️ Hackathons</h2>
        <div className="space-y-4">
          {experiences
            .filter((e) => e.type === "hackathon")
            .map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-purple-400">{exp.organization}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
                <div className="flex gap-2 mt-4">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Sports */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-green-400">🥏 Ultimate Frisbee</h2>
        <div className="space-y-4">
          {experiences
            .filter((e) => e.type === "sports")
            .map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-green-400">{exp.organization}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
                <div className="flex gap-2 mt-4">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
