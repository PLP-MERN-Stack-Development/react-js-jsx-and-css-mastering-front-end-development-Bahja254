import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data.slice(0, 6)))
      .catch(() => setError("Failed to load posts"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <TaskManager />

      <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
        API Posts
      </h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((p) => (
          <Card key={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    </div>
  );
}

export default Home;
