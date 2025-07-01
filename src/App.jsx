import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';
import AddTaskModal from './components/TaskModal';
import { useState } from 'react';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout onAddTask={() => setModalOpen(true)}>
        {/* Main page content: TaskManager and ApiData side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">My Tasks</h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setModalOpen(true)}
              >
                Add Task
              </button>
            </div>
            <TaskManager />
          </div>

          <ApiData />
        </div>

        {/* Modal */}
        <AddTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </Layout>
    </ThemeProvider>
  );
}
