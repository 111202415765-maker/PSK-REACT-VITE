import { useState } from 'react'

function PostCard({ title, body }) {
  // setiap card punya state clicked sendiri, jadi tidak mempengaruhi card lain
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <div
      onClick={handleClick}
      className={`${clicked ? 'bg-blue-100' : 'bg-white'} p-4 rounded-lg shadow cursor-pointer transition-colors`}
    >
      <h2 className="font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  )
}

export default PostCard
