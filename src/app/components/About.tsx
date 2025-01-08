export default function About() {
  const techSkills = [
    { 
      name: "JS", 
      color: "from-yellow-400 via-yellow-300 to-orange-500",
      icon: "⚡"
    },
    { 
      name: "TS", 
      color: "from-blue-500 via-blue-400 to-cyan-400",
      icon: "🔷"
    },
    { 
      name: "React", 
      color: "from-cyan-400 via-blue-400 to-blue-500",
      icon: "⚛️"
    },
    { 
      name: "Tailwindcss", 
      color: "from-teal-400 via-cyan-400 to-blue-400",
      icon: "🎨"
    },
    { 
      name: "Premierepro", 
      color: "from-purple-500 via-pink-400 to-rose-500",
      icon: "🎬"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white border-0 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Profile : Title
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl">
                사진
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 space-y-6">
              <div className="transform hover:scale-105 transition-transform">
                <h3 className="font-bold mb-2 text-blue-600">I AM</h3>
                <p className="text-gray-700">이름 : 강이나</p>
                <p className="text-gray-700">포지션: 마케팅 서비스 기획 / FE Developer(jr)</p>
              </div>
              
              <div className="transform hover:scale-105 transition-transform">
                <h3 className="font-bold mb-2 text-purple-600">Contact</h3>
                <p className="text-gray-700">Email : leepro@naver.com</p>
                <p className="text-gray-700">Phone : +082 - 1234-5678</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2 text-indigo-600">Channel</h3>
                <div className="space-y-2">
                  <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="text-pink-500">SNS :</span>
                  </div>
                  <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="text-gray-900">GitHub :</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduce Card */}
        <div className="bg-white border-0 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            Introduce
          </h2>
          <div className="border rounded-xl p-6 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors">
            <p className="text-gray-700">간단한 자기소개 및 인삿말</p>
          </div>
        </div>

        {/* Tech Skill Card */}
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
                  <span className="font-bold text-white tracking-wide">{skill.name}</span>
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