export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <div className="text-center z-10 px-4 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to bg-purple-500 bg-clip-text text-transparent  leading-tight">
          Hi, I'm zahra a web developer
          <br />
          who loves to create beautiful and functional websites.
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto ">
          I'm passionate about coding and always eager to learn new
          technologies. I enjoy working on projects that challenge me and allow
          me to grow as a developer.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
