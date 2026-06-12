import axios from 'axios'

const api = axios.create({ baseURL: 'https://spekit-health-twin.onrender.com/api' })

api.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('ht_user') || 'null')
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`

  // Grab custom keys and attach them as hidden headers
  const customGroq = localStorage.getItem('ht_groq_key')
  const customGemini = localStorage.getItem('ht_gemini_key')
  if (customGroq) config.headers['X-Groq-Key'] = customGroq
  if (customGemini) config.headers['X-Gemini-Key'] = customGemini

  return config
})

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
}

export const speksAPI = {
  getAll: (params) => api.get('/speks/', { params }),
  getCategories: () => api.get('/speks/categories'),
  getOne: (id) => api.get(`/speks/${id}`),
  create: (data) => api.post('/speks/', data),
  update: (id, data) => api.put(`/speks/${id}`, data),
  delete: (id) => api.delete(`/speks/${id}`),
}

export const simulatorAPI = {
  simulate: (data) => api.post('/simulate', data),
  whatif: (data) => api.post('/whatif', data),
  history: (userId) => api.get(`/history/${userId}`),
  createUser: (data) => api.post('/users', data),
  evaluateGames: (data) => api.post('/braingames/evaluate', data),
}