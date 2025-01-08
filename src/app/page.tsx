import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <section id="about" className="py-10">
        <About />
      </section>
      
      <section id="projects" className="py-10">
        <Projects />
      </section>
      
      <section id="skills" className="py-10">
        <Skills />
      </section>
      
      <section id="contact" className="py-10">
        <Contact />
      </section>
    </main>
  )
}