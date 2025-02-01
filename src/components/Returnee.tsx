import React from 'react';
import backgroundImage from '../assets/background.png';
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

interface ReturneeProps {
    score: string;
    description: string;
}

const Returnee: React.FC = () => {
    const location = useLocation();
    const { score, description } = location.state as ReturneeProps; 
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1); // Navigate back
    };

    return (
        <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-8 text-center max-w-lg w-full">
          <h1 className="text-4xl font-bold text-gray-800">Your Score</h1>
          <p className="text-6xl font-extrabold text-blue-600 mt-4">{score}</p>
      
          {/* Make description container scrollable */}
          <div className="text-gray-700 mt-4 overflow-auto max-h-80">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
      
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
              onClick={onBack} // Navigate back
            >
              Back
            </button>
      
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => window.location.reload()} // Reload page
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default Returnee;