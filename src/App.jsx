import { Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function AlejandroPortfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <section className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Alejandro Salido Gómez
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto">
          Soy técnico en sistemas y desarrollador con pasión por la tecnología y el aprendizaje continuo. Me especializo en entornos IT, mantenimiento de equipos y desarrollo de soluciones eficientes. En cada proyecto busco combinar creatividad, funcionalidad y experiencia de usuario. Siempre abierto a nuevos retos y colaboraciones.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold">Mokento App</h3>
            <p className="mb-2">Aplicación web desarrollada como portfolio interactivo y escaparate de habilidades técnicas.</p>
            <a 
              href="https://github.com/alsalgom9/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Descargar CV</h2>
        <a 
          href="/CV_salido_gomez-Alejandro-IT.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full"
        >
          <Download className="w-5 h-5" /> Descargar CV
        </a>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/alsalgom9" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-salido-gomez/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-400" />
          </a>
        </div>
      </section>
    </main>
  );
}