export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Credentials</h2>
        <p className="text-center text-gray-600 mb-12">
          Certifications & verified achievements
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-green-600">Problem Solving</h3>
            <p className="text-gray-600">Issued by HackerRank</p>
            <a href="#" className="text-blue-600 underline">Verify</a>
          </div>

          <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-green-600">Java Programming Basic</h3>
            <p className="text-gray-600">Issued by HackerRank</p>
            <a href="#" className="text-blue-600 underline">Verify</a>
          </div>
        </div>
      </div>
    </section>
  );
}
