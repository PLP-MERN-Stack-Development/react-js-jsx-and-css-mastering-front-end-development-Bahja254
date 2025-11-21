function Card({ title, body }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded hover:scale-105 transition-transform">
      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{body}</p>
    </div>
  );
}

export default Card;
