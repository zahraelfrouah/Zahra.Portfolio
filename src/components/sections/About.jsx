import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Next.js",
    "typescript",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        {/* skills */}
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            My journey in web development started with a curiosity about how
            websites work. Since then, I've honed my skills in HTML, CSS, and
            JavaScript, and I'm constantly exploring new frameworks and tools to
            enhance my projects.<br />
          
            When I'm not coding, you can find me exploring new technologies,
            reading tech blogs, or working on personal projects that challenge
            me to grow as a developer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className=" flex flex-wrap gap-2">
                {frontendSkills.map((skills, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className=" flex flex-wrap gap-2">
                {backendSkills.map((skills, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <p className="text-gray-300 mb-2">Diploma in Computer Science</p>
            <p className="text-gray-400">University of X, 2022 - 2024</p>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <p className="text-gray-300 mb-2">Web Developer Intern</p>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
