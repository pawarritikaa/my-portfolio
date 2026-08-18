export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-700 mb-6">
          Let's build something beautiful together. I am looking for full-stack, backend, or mobile engineering roles where I can contribute to shipping scalable user features.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-600 mb-8">
          <p>Email: <a href="mailto:ritika.0112cs221107@gmail.com" className="underline">ritika.0112cs221107@gmail.com</a></p>
          <p>Phone: +91 6264927728</p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/ritika-pawar-613993294" target="_blank" rel="noopener noreferrer" className="underline">
              linkedin.com/in/ritika-pawar-613993294
            </a>
          </p>
        </div>

        {/* Contact Form (optional) */}
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" defaultValue="Ritika Pawar" className="w-full border rounded-md p-2" />
          <input type="email" placeholder="Email Address" className="w-full border rounded-md p-2" />
          <textarea placeholder="Message" className="w-full border rounded-md p-2 h-32"></textarea>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
