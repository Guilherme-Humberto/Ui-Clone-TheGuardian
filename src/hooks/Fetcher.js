import useSwr from 'swr'
import api from '../services/api'

export default function Fetcher(url) {
  const { data, error } = useSwr(url, async url => {
    const response = await api.get(url)
    const { results } = response.data.response
    return results
  })

  return { data, error }
}
