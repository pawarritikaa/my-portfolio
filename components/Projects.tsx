export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Works</h2>
        <p className="text-center text-gray-600 mb-12">
          Selected projects built by me
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Flatfinder */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-green-600">Flatfinder</h3>
            <p className="mt-2 text-gray-700">
              A complete full-stack web application designed for listing,
              discovering, and seamlessly managing rental flats with deep routing logic and form validation.
            </p>
            <p className="mt-2 text-sm text-gray-600">MongoDB • Express.js • EJS • Node.js</p>
          </div>

          {/* Task Tracker */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-green-600">Task Tracker</h3>
            <p className="mt-2 text-gray-700">
              Dynamic responsive task management web interface optimizing daily organization with CRUD utilities synced with database pipelines.
            </p>
            <p className="mt-2 text-sm text-gray-600">JavaScript • MongoDB • Express.js • HTML/CSS</p>
          </div>

          {/* Lost & Found Mobile */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-green-600">Lost & Found Mobile</h3>
            <p className="mt-2 text-gray-700">
              A modern mobile utility centered around real-time location mapping, tracking, and recovery of lost goods.
            </p>
            <p className="mt-2 text-sm text-gray-600">React Native • TypeScript • Firebase • Location Services</p>
          </div>

          {/* Resume Builder */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-green-600">Resume Builder & ATS Checker</h3>
            <p className="mt-2 text-gray-700">
              Specialized engineering resource analyzing uploaded resume formats against industry-standard ATS parsers.
            </p>
            <p className="mt-2 text-sm text-gray-600">Node.js • Full Stack • PDF Parsing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
