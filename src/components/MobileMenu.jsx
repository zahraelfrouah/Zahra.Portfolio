export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={` fixed top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
   
   
   ${
     menuOpen
       ? "h-screen opacity-100 pointer-events-auto"
       : "h-0 opacity-0 pointer-events-none"
   }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className=" absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer md:hidden"
        aria-label="Close menu"
      >
        &times; {/* close icon */}
      </button>

      <a
        href="#home"
        // this line closes a menu (like a mobile nav menu) when the link is clicked.
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-mono text-white my-4 transform transition-transform duration-300  ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-mono text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        about
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-mono text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-mono text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        contact
      </a>
    </div>
  );
};
