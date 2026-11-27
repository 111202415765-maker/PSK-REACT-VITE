import { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { getPosts } from './Services'

function Exercise() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">Post Cards</h1>

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  )
}

export default Exercise
