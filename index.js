import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vansh Agrawal | Portfolio</title>
        <meta name="description" content="Profile of Vansh Agrawal - CEO at SWET India" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-[#eef1f7] to-[#d4dcec] p-6 font-sans">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Vansh Agrawal</h1>
            <p className="text-xl text-gray-700">
              CEO at SWET India | B.Tech CSE @ VIT Bhopal | Silver Medalist – NSO
            </p>
            <p className="text-gray-800">
              Tech enthusiast and student leader with a strong record in academics, coding,
              and leadership. Driven to build impactful solutions in education and technology.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Download Resume</a>
              <a href="mailto:vanshagrawal509@gmail.com" className="border px-4 py-2 rounded text-black hover:bg-gray-200">Contact</a>
              <a href="https://www.linkedin.com/in/vansh-agrawal-b8612a291" target="_blank" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <Image src="/profile.jpg" alt="Vansh Agrawal" width={400} height={500} className="rounded-xl shadow-2xl" />
          </div>
        </div>

        <section className="mt-20 space-y-12">
          <div className="grid md:grid-cols-3 gap-6 text-gray-800">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Education</h2>
              <ul className="list-disc ml-4">
                <li>Sanskaar Valley School (2020)</li>
                <li>Ragendra Swaroop Public School (2021)</li>
                <li>Macro Vision Academy (2021–2023)</li>
                <li>VIT Bhopal University (2023–2027)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
              <ul className="list-disc ml-4">
                <li>Star Pupil (2017, 2018)</li>
                <li>Silver Medal – NSO</li>
                <li>1st Place – Coding @ HyperCity (2020)</li>
                <li>Cleared JEE Mains (2023)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Roles</h2>
              <ul className="list-disc ml-4">
                <li>CEO – SWET India</li>
                <li>Finance Manager – Little Heavens School</li>
                <li>Organizer – ICNACT 2024</li>
                <li>Co-Finance Head – VITERA Club</li>
                <li>Junior Manager – AIESEC</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Vansh Agrawal • +91 8719899303 • vanshagrawal509@gmail.com
        </footer>
      </div>
    </>
  );
}
