export default function Skills() {
  const techSkills = [
    { 
      name: "JS", 
      color: "from-yellow-400 via-yellow-300 to-orange-500",
      icon: "⚡",
      textColor: "text-gray-900"
    },
    { 
      name: "TS", 
      color: "from-blue-500 via-blue-400 to-cyan-400",
      icon: "🔷",
      textColor: "text-white"
    },
    { 
      name: "React", 
      color: "from-cyan-400 via-blue-400 to-blue-500",
      icon: "⚛️",
      textColor: "text-white"
    },
    { 
      name: "Tailwindcss", 
      color: "from-teal-400 via-cyan-400 to-blue-400",
      icon: "🎨",
      textColor: "text-white"
    },
    { 
      name: "Premierepro", 
      color: "from-purple-500 via-pink-400 to-rose-500",
      icon: "🎬",
      textColor: "text-white"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text text-center">
            Tech Skill
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {techSkills.map((skill, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div 
                  className={`relative px-6 py-3 rounded-full bg-gradient-to-r ${skill.color}
                            shadow-lg group-hover:shadow-xl transform group-hover:scale-105 
                            transition-all duration-300 cursor-pointer
                            flex items-center gap-2 backdrop-blur-sm`}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className={`font-bold ${skill.textColor} tracking-wide drop-shadow-md`}>
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
