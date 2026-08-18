export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-green-600">Education</h3>
          <p className="mt-2 text-gray-700">
            Rooted in computer science & clean engineering
          </p>
          <p className="mt-2 font-medium">
            Bansal Institute of Science and Technology
          </p>
          <p className="text-gray-600">2022 – 2026</p>
          <p className="mt-2 text-gray-700">
            Bachelor of Technology in Computer Science & Engineering
          </p>
          <p className="mt-4 text-gray-700">
            I am a B.Tech Computer Science and Engineering graduate from Bhopal,
            motivated by solving hard problems through code. My approach couples
            structured system design with efficient implementation, seeking
            always to continuously level up my technical capability.
          </p>
          <p className="mt-2 text-gray-600">Bhopal, MP, India</p>
          <p className="mt-2 text-gray-600">CGPA: 7.82</p>
        </div>
      </div>
    </section>
  );
}
