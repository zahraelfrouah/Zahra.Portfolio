import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16 ">
          <a href="#home" className="font-mono text-xl text-white">
            Zahra<span className="text-blue-500">.Portfolio</span>
          </a>
          {/* mobile menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            // uses the previous state value to switch between true and false.
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776; {/* hamburger icon */}
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
