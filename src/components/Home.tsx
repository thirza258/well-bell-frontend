import React from "react";
import hero_image from "../assets/hero.svg"
import mediation from "../assets/mediation.svg"
import doctors from "../assets/doctors.svg"
import care from "../assets/care.svg"
import true_friends from "../assets/true-friends.svg"
import phone from "../assets/tracker.svg"

const WellBellLandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WellBell</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Your Mental Health Companion</h2>
            <p className="mb-6">
              WellBell provides quick FAQs about mental health, personalized health ratings, and recommendations to improve your well-being and phone usage.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-md"></div>
              <img
                src={care}
                alt="Chatbot illustration"
                className="absolute inset-0 w-full h-full object-contain rounded-lg p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why WellBell?</h2>
          <p className="text-gray-600 mb-6">
            WellBell is your go-to solution for instant mental health support, actionable insights, and balanced phone usage guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className=" bg-gray-200 rounded-lg mb-4">
                <img src={mediation} alt="Instant FAQ" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-lg">Instant FAQ</h3>
              <p className="text-gray-600">Quick answers to your mental health questions.</p>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 rounded-lg mb-4">
                <img src={doctors} alt="Health Ratings" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-lg">Health Ratings</h3>
              <p className="text-gray-600">Personalized insights on your well-being.</p>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 rounded-lg mb-4">
                <img src={hero_image} alt="Phone Use Recommendations" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-lg">Phone Use Recommendations</h3>
              <p className="text-gray-600">Manage your screen time effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
    <section id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Chatbot Assistance</h3>
            <p className="mb-6">
              Our AI-powered chatbot is available 24/7 to answer your mental health questions.
            </p>
            <div className=" bg-gray-200 rounded-lg overflow-hidden">
              <a href="/chatbot">
                <img src={true_friends} alt="Chatbot Assistance" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
            <p className="mb-6">
              Receive actionable advice to improve your mental health and reduce screen time.
            </p>
            <div className=" bg-gray-200 rounded-lg overflow-hidden">
              <a href="/personalized">
                <img src={phone} alt="Personalized Recommendations" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 WellBell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WellBellLandingPage;
