// components/Skills.tsx
import { Code, Database, Brain, Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section className="mb-10" id="skills">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-1 border-gray-200">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Programming Languages */}
        <div className="p-4 rounded-xl border bg-white/10 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-blue-500">
            <Code size={20} />
            <h3 className="text-lg font-semibold">Languages</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            <li className="bg-blue-600 px-3 py-1 rounded-full">Python</li>
            <li className="bg-blue-600 px-3 py-1 rounded-full">
              JavaScript/Typecript
            </li>
            <li className="bg-blue-600 px-3 py-1 rounded-full">Golang</li>
            <li className="bg-blue-600 px-3 py-1 rounded-full">Java</li>
            <li className="bg-blue-600 px-3 py-1 rounded-full">C++</li>
          </ul>
        </div>

        {/* Frameworks & Libraries */}
        <div className="p-4 rounded-xl border bg-white/10 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-green-500">
            <Wrench size={20} />
            <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            <li className="bg-green-600 px-3 py-1 rounded-full">React</li>
            <li className="bg-green-600 px-3 py-1 rounded-full">Redux</li>
            <li className="bg-green-600 px-3 py-1 rounded-full">GraphQL</li>
            <li className="bg-green-600 px-3 py-1 rounded-full">Next.js</li>
            <li className="bg-green-600 px-3 py-1 rounded-full">
              Tailwind CSS
            </li>
            <li className="bg-green-600 px-3 py-1 rounded-full">Node.js</li>
            <li className="bg-green-600 px-3 py-1 rounded-full">Flask</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="p-4 rounded-xl border bg-white/10 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-yellow-500">
            <Brain size={20} />
            <h3 className="text-lg font-semibold">Tools & DevOps</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            <li className="bg-yellow-600 px-3 py-1 rounded-full">Git</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">Docker</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">Postman</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">Vercel</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">Figma</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">AWS</li>
            <li className="bg-yellow-600 px-3 py-1 rounded-full">
              Github Actions
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div className="p-4 rounded-xl border bg-white/10 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-purple-500">
            <Database size={20} />
            <h3 className="text-lg font-semibold">Databases</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            <li className="bg-purple-600 px-3 py-1 rounded-full">PostgreSQL</li>
            <li className="bg-purple-600 px-3 py-1 rounded-full">MongoDB</li>
            <li className="bg-purple-600 px-3 py-1 rounded-full">MySQL</li>
            <li className="bg-purple-600 px-3 py-1 rounded-full">SQLite</li>
            <li className="bg-purple-600 px-3 py-1 rounded-full">Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
