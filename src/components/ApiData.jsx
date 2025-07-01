import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
        );
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        setError('Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [page]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">External Tasks</h2>

      <input
        type="text"
        placeholder="Search tasks..."
        className="mb-4 px-4 py-2 w-full border rounded dark:bg-gray-700 dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border rounded dark:border-gray-600 dark:text-white flex items-center justify-between"
          >
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                task.completed
                  ? 'bg-green-200 text-green-800'
                  : 'bg-yellow-200 text-yellow-800'
              }`}
            >
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiData;
