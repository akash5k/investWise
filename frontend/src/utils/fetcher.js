const base_url = process.env.REACT_APP_BACKEND_URL

const fetcher = async (url, method, data) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
  try {
    const res = await fetch(base_url + url, config)
    const d = await res.json()
    return d
  } catch (err) {
    return err
  }
}

export default fetcher
