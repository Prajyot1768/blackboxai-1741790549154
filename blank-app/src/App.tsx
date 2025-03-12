import { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { LoginPage } from './components/pages/LoginPage';
import { MoodPage } from './components/pages/MoodPage';
import { ContentPage } from './components/pages/ContentPage';
import { ChatbotPage } from './components/pages/ChatbotPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('mood');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('mood');
    setSelectedMood(null);
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setCurrentPage('content');
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
      />
      
      <main className="animate-fadeIn">
        {currentPage === 'mood' && (
          <MoodPage onMoodSelect={handleMoodSelect} />
        )}
        {currentPage === 'content' && (
          <ContentPage />
        )}
        {currentPage === 'chat' && (
          <ChatbotPage />
        )}
      </main>
    </div>
  );
}

export default App;
