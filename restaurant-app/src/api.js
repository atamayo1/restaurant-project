import { routes } from "./env/env"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max))

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency()

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const url = routes.BASE_URL + endpoint
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

const api = {
  restaurants: {
    list() {
      return callApi('/restaurants')
    },
    read(restaurantId) {
      return callApi(`/restaurants/${restaurantId}`)
    },
  },
}

export default api
