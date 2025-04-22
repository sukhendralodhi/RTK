import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeatureBox = ({ icon, title, description, iconColor }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
    <div className={`text-${iconColor}-600 mb-4`}>
      {icon}
    </div>
    <h2 className="text-lg font-bold mb-4 text-gray-800">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
)

const featureData = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
    ),
    title: "Track Tasks",
    description: "Easily manage and track your daily tasks and stay organized.",
    iconColor: "blue"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: "Set Priorities",
    description: "Prioritize your tasks and focus on what matters most.",
    iconColor: "purple"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Stay Productive",
    description: "Increase your productivity with our intuitive todo management.",
    iconColor: "green"
  }
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Welcome to Todo App
          </h1>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stay organized and boost your productivity with our simple and effective todo management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="transform hover:scale-105 transition-all text-sm duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/add-todo')}
              className="transform hover:scale-105 transition-all text-sm duration-300 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl"
            >
              Add Todo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home