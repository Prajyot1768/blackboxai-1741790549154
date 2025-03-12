import React from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
  onLogout,
}) => {
  const navItems = [
    { id: 'mood', label: 'Mood Check', icon: 'fa-face-smile' },
    { id: 'content', label: 'Resources', icon: 'fa-book-open' },
    { id: 'chat', label: 'Chat', icon: 'fa-comments' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-purple-600 font-poppins">ZenGen</h1>
            </div>

            {/* Navigation Items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`
                    inline-flex items-center px-1 pt-1 text-sm font-medium
                    transition-colors duration-200 ease-in-out
                    ${
                      currentPage === item.id
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-500 hover:text-purple-600 hover:border-b-2 hover:border-purple-300'
                    }
                  `}
                >
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={onLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`
                block pl-3 pr-4 py-2 text-base font-medium w-full text-left
                ${
                  currentPage === item.id
                    ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600'
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50 hover:border-l-4 hover:border-purple-300'
                }
              `}
            >
              <i className={`fas ${item.icon} mr-2`}></i>
              {item.label}
            </button>
          ))}
          <button
            onClick={onLogout}
            className="block w-full pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-purple-600 hover:bg-purple-50"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
