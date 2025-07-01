import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border border-border rounded bg-surface text-text-primary hover:opacity-80 transition-opacity"
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

const Layout = ({ children, onAddTask }) => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col">
      {/* Header */}
      <header className="bg-surface shadow border-b border-border">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-text-primary">PLP Task Manager</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface shadow mt-auto border-t border-border">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-text-secondary">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;