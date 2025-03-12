import React, { useState } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: 'video' | 'article';
}

export const ContentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');

  const content: ContentItem[] = [
    {
      id: '1',
      type: 'video',
      title: 'Meditation for Beginners',
      description: 'Start your mindfulness journey with this guided meditation.',
      thumbnail: 'https://picsum.photos/seed/meditation/300/200',
    },
    {
      id: '2',
      type: 'video',
      title: 'Stress Relief Techniques',
      description: 'Learn effective methods to manage daily stress.',
      thumbnail: 'https://picsum.photos/seed/stress/300/200',
    },
    {
      id: '3',
      type: 'video',
      title: 'Anxiety Management',
      description: 'Practical tips for dealing with anxiety.',
      thumbnail: 'https://picsum.photos/seed/anxiety/300/200',
    },
    {
      id: '4',
      type: 'article',
      title: 'Understanding Mental Health',
      description: 'A comprehensive guide to mental wellness and self-care.',
      thumbnail: 'https://picsum.photos/seed/mental/300/200',
    },
    {
      id: '5',
      type: 'article',
      title: 'Building Healthy Habits',
      description: 'Transform your life with these daily mental health practices.',
      thumbnail: 'https://picsum.photos/seed/habits/300/200',
    },
    {
      id: '6',
      type: 'article',
      title: 'The Power of Positive Thinking',
      description: 'Discover how changing your mindset can improve your mental health.',
      thumbnail: 'https://picsum.photos/seed/positive/300/200',
    },
  ];

  const filteredContent = content.filter(item => 
    (activeTab === 'videos' && item.type === 'video') || 
    (activeTab === 'articles' && item.type === 'article')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Wellness Resources
          </h1>
          <p className="text-lg text-gray-600">
            Explore our curated collection of mental wellness content
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('videos')}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeTab === 'videos'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
              }
            `}
          >
            <i className="fas fa-video mr-2"></i>
            Videos
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeTab === 'articles'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
              }
            `}
          >
            <i className="fas fa-book-open mr-2"></i>
            Articles
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-200 hover:scale-[1.02] animate-fadeIn"
            >
              <div className="relative pb-[60%]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <i className="fas fa-play text-white text-2xl"></i>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200">
                  {item.type === 'video' ? 'Watch Now' : 'Read More'}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
