const base_url =
  "http://localhost:5000/api" || process.env.REACT_APP_BACKEND_URL

const fetcher = async (url, method, customHeader, data = null) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...customHeader,
    },
  }
  if (data) config.body = JSON.stringify(data)
  try {
    const res = await fetch(base_url + url, config)
    const result = await res.json()
    return result
  } catch (err) {
    return err.message
  }
}

export default fetcher
