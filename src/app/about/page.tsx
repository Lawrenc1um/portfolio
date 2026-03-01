export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">About Me</h1>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">🎓 Education</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold">University of Waterloo</h3>
          <p className="text-gray-400">Honours Computer Science (Co-op)</p>
          <p className="text-gray-500 text-sm mt-2">2025 - Present · Currently 1B (Sequence 4)</p>
          <div className="mt-4">
            <p className="text-gray-400 text-sm">Relevant Courses:</p>
            <div className="flex gap-2 flex-wrap mt-2">
              {["Data Structures", "Algorithms", "Computer Organization", "Calculus", "Linear Algebra"].map(
                (course) => (
                  <span key={course} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {course}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-4">
          <h3 className="text-xl font-bold">Beijing Wangfu School</h3>
          <p className="text-gray-400">High School (CIE Curriculum)</p>
          <p className="text-gray-500 text-sm mt-2">Graduated</p>
        </div>
      </section>

      {/* Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">💻 Technical Background</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-gray-300 leading-relaxed">
            Started programming in 6th grade with C++ and have been coding for about <span className="text-blue-400 font-bold">5 years</span>. 
            Passionate about <span className="text-green-400">algorithms</span> and <span className="text-green-400">competitive programming</span>.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Languages</p>
              <p className="text-white">C++, Python, TypeScript, Racket, Bash</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tools</p>
              <p className="text-white">Linux, Git, Docker, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">❤️ Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { emoji: "🎮", title: "Game Development", desc: "Aspiring game company founder" },
            { emoji: "📷", title: "Photography", desc: "Canon R6 Mark II" },
            { emoji: "🥏", title: "Ultimate Frisbee", desc: "Ex-captain of Beijing Infinites" },
            { emoji: "🎿", title: "Snowboarding", desc: "Love hitting the slopes" },
          ].map((interest) => (
            <div
              key={interest.title}
              className="bg-white/5 rounded-xl p-4 border border-white/10 card-hover"
            >
              <span className="text-2xl">{interest.emoji}</span>
              <h3 className="font-bold mt-2">{interest.title}</h3>
              <p className="text-gray-500 text-sm">{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">🎯 Goals</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-gray-300 leading-relaxed">
            My ultimate goal is to <span className="text-purple-400 font-bold">start my own game company</span>. 
            I believe the combination of technical skills and entrepreneurial mindset will help me create 
            meaningful gaming experiences. Currently focusing on building a strong foundation in CS 
            and gaining industry experience through internships.
          </p>
        </div>
      </section>
    </div>
  );
}
