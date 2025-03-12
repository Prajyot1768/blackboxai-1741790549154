import React, { useState } from 'react';

interface MoodOption {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

interface MoodPageProps {
  onMoodSelect: (mood: string) => void;
}

export const MoodPage: React.FC<MoodPageProps> = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [error, setError] = useState('');

  const moodOptions: MoodOption[] = [
    { id: 'happy', emoji: '😊', label: 'Happy', color: 'bg-yellow-100 hover:bg-yellow-200' },
    { id: 'calm', emoji: '😌', label: 'Calm', color: 'bg-blue-100 hover:bg-blue-200' },
    { id: 'sad', emoji: '😢', label: 'Sad', color: 'bg-indigo-100 hover:bg-indigo-200' },
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-purple-100 hover:bg-purple-200' },
    { id: 'stressed', emoji: '😫', label: 'Stressed', color: 'bg-red-100 hover:bg-red-200' },
    { id: 'energetic', emoji: '⚡', label: 'Energetic', color: 'bg-orange-100 hover:bg-orange-200' },
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setError('');
  };

  const handleContinue = () => {
    if (!selectedMood) {
      setError("Please select how you're feeling");
      return;
    }
    onMoodSelect(selectedMood);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            How are you feeling today?
          </h1>
          <p className="text-lg text-gray-600">
            Select the emotion that best matches your current state of mind
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {moodOptions.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`
                p-6 rounded-xl ${mood.color} 
                ${selectedMood === mood.id ? 'ring-4 ring-purple-500 ring-opacity-50' : ''}
                transform transition-all duration-200 ease-in-out
                hover:scale-105 focus:outline-none
                animate-fadeIn
              `}
            >
              <div className="text-center">
                <span className="text-4xl mb-2 block">{mood.emoji}</span>
                <span className="text-gray-800 font-medium">{mood.label}</span>
              </div>
            </button>
          ))}
        </div>

        {error && (
          <div className="text-center text-red-500 mb-4 animate-fadeIn">
            {error}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleContinue}
            className="
              inline-flex items-center px-6 py-3 border border-transparent 
              text-base font-medium rounded-lg shadow-sm text-white 
              bg-purple-600 hover:bg-purple-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
              transform transition-all duration-200 ease-in-out
              hover:scale-[1.02]
            "
          >
            Continue
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Your response helps us provide better support for you</p>
        </div>
      </div>
    </div>
  );
};
