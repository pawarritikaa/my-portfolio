export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Toolkit</h2>
        <p className="text-center text-gray-600 mb-12">
          Languages & frameworks I work with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Languages</h3>
            <ul className="space-y-1">
              <li>Java</li>
              <li>C++</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-600 mb-2">Web Development</h3>
            <ul className="space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-600 mb-2">Databases & Mobile</h3>
            <ul className="space-y-1">
              <li>MongoDB</li>
              <li>SQL</li>
              <li>React Native</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-600 mb-2">Core Foundations</h3>
            <ul className="space-y-1">
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>OOP</li>
              <li>DBMS</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
