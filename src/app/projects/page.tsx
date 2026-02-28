import Link from "next/link";

const projects = [
  {
    title: "C++ File Processing Tool",
    description: "Built at 推想医疗科技 (AI Medical Company) during internship. A file processing utility for medical data.",
    tech: ["C++", "File I/O", "Data Processing"],
    link: "#",
    status: "Internship Project",
  },
  {
    title: "Minecraft Server",
    description: "Custom Minecraft server with mods and configuration. Hosting for friends.",
    tech: ["Java", "Spigot", "Linux"],
    link: "#",
    status: "Personal",
  },
  {
    title: "Algorithm Practice",
    description: "5+ years of competitive programming. Familiar with data structures and algorithms.",
    tech: ["C++", "Algorithms", "OOP"],
    link: "https://github.com/Lawrenc1um",
    status: "Ongoing",
  },
  {
    title: "This Website!",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/Lawrenc1um/portfolio",
    status: "Personal",
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-500 mb-12">Things I&apos;ve built and worked on</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white/5 rounded-xl p-6 border border-white/10 card-hover"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                {project.status}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
            >
              View Code →
            </Link>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">Check out more on GitHub</p>
        <Link
          href="https://github.com/Lawrenc1um"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View GitHub
        </Link>
      </div>
    </div>
  );
}
