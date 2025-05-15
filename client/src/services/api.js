import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export async function fetchUsers() {
  try {
    const response = await axios.get(`${API_BASE}/users`)
    return response.data
  } catch (error) {
    console.error('API fetchUsers error:', error)
    throw error
  }
}
