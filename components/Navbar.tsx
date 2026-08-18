export default function Navbar() {
    return (
        <nav className="w-full pt-20 px-20 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl  text-black font-[cursive]">ritika pawar</h1>
                <span className="text-2xl font-bold">.</span>
                <span className="text-green-600 font-medium">Open to Roles</span>
            </div>
        
        <div className="flex items-center space-x-6">
        <a href="#about" className="text-gray-600 hover:text-black">About</a>
        <a href="#skills" className="text-gray-600 hover:text-black">Skills</a>
        <a href="#experience" className="text-gray-600 hover:text-black">Experience</a>
        <a href="#projects" className="text-gray-600 hover:text-black">Projects</a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Contact
        </a>
      </div>
    </nav>
    );
}