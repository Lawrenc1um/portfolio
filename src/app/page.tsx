import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Hero Section */}
        <div className="animate-fade-in">
          <p className="text-blue-400 font-medium mb-4">Hello, I&apos;m</p>
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Cheng Li</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            University of Waterloo, CS (Co-op)
          </p>
          <p className="text-lg text-gray-500 mb-8">
            1B Student · Aspiring Game Developer · AI Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div className="animate-fade-in delay-200 flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all card-hover"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all"
          >
            About Me
          </Link>
          <Link
            href="/experience"
            className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all"
          >
            Experience
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 animate-fade-in delay-300">
          <p className="text-gray-500 text-sm mb-4">Tech I work with</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["C++", "Python", "TypeScript", "React", "Node.js", "Linux", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 animate-fade-in delay-400">
          <div>
            <p className="text-3xl font-bold gradient-text">5+</p>
            <p className="text-gray-500 text-sm">Years Coding</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">10+</p>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">3+</p>
            <p className="text-gray-500 text-sm">Hackathons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
