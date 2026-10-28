const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error(`Gagal mengambil data: ${response.status}`)
  }
  return response.json()
}
