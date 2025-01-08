export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      description: "프로젝트 설명이 들어갑니다.",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "from-blue-500 via-indigo-500 to-purple-500"
    },
    // 더 많은 프로젝트 추가 가능
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text text-center">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`h-48 mb-4 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    {/* 프로젝트 이미지나 아이콘 */}
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
