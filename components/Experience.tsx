export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Industry Experience</h2>
        <p className="text-center text-gray-600 mb-12">
          Professional hands-on practice
        </p>

        {/* Internship Card */}
        <div className="border rounded-lg shadow-md p-6 bg-gray-50">
          <h3 className="text-xl font-semibold text-green-600">
            Full Stack Developer Intern
          </h3>
          <p className="text-gray-600">Feb 2026 – Mar 2026</p>
          <p className="text-gray-600">Conspicuous Solutions, Bhopal, India</p>

          <p className="mt-4 text-gray-700">
            Successfully completed an intensive internship designing and deploying full-stack digital solutions. Contributed directly to multiple projects including:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Lost & Found mobile application</li>
            <li>Dynamic Task Tracker web service</li>
            <li>Resume Builder with ATS integration</li>
          </ul>

          <p className="mt-4 text-gray-700">Key Contributions:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Implemented secure Firebase & Google Authentication systems</li>
            <li>Built structured REST APIs integrating MongoDB & Express</li>
            <li>Developed cross-platform mobile views using React Native & TypeScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
