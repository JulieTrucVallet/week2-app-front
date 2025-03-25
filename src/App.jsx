import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () => {
    try{
      const response = await axios.get(`http://localhost:8000/api/services`)
      if(response.status === 200 ){
        setServices(response.data)
        setLoading(false)
      }
    }
    catch(err){
      console.log(err)
      setError('Error fetching services')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <>
      <h1 class="text-3xl font-bold underline bg-sky-300">Hello this is my event APP</h1>
      {services && !loading && services.map(service => {
        return(
          <>
            <div className="grid grid-cols-3 gap-4">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p>{service.price}</p>
            </div>
          </>
        )
      })}
    </>
  )
}

export default App
