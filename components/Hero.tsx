export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6"
    >
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 #7C5CFC">
         Hello, I am Ritika Pawar
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl text-lg text-gray-700 mb-6">
        Building scalable full‑stack software. Motivated B.Tech Computer Science graduate passionate about building robust applications. Skilled in the MERN stack, mobile systems via React Native, and robust cloud integrations.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Contact Me
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-8 text-sm text-gray-600">
        <p>
          Email:{" "}
          <a
            href="mailto:ritika.0112cs221107@gmail.com"
            className="underline"
          >
            ritika.0112cs221107@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/ritika-pawar-613993294"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/ritika-pawar-613993294
          </a>
        </p>
      </div>
    </section>
  );
}
