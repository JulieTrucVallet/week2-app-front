import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ServicesContext = createContext(null)

export const ServicesController = ({ children }) => {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/services`)
      if (response.status === 200) {
        setServices(response.data)
      }
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <ServicesContext.Provider value={{ services, setServices, fetchServices }}>
      {!loading && children}
    </ServicesContext.Provider>
  )
}
