const experiences = [
  {
    type: "internship",
    title: "Algorithm Intern (算法部实习生)",
    organization: "InferVision (推想医疗科技)",
    period: "2024",
    description: "AI medical company. Developed C++ file processing tools for healthcare data, among other tasks.",
    highlights: ["C++ Development", "Python", "File Processing", "Healthcare AI"],
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      <p className="text-gray-500 mb-12">Internships and more</p>

      {/* Internships */}
      <section>
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
                <div className="flex gap-2 mt-4 flex-wrap">
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
