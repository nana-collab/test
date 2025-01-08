export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-transparent bg-clip-text text-center">
            Contact Me
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="relative w-full px-4 py-3 bg-gray-800 border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="relative w-full px-4 py-3 bg-gray-800 border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <textarea
                  rows={4}
                  placeholder="메시지를 입력하세요"
                  className="relative w-full px-4 py-3 bg-gray-800 border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="relative group w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-semibold text-center transform group-hover:scale-105 transition-all duration-300">
                  보내기
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
