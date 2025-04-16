import axios from "axios"
import { useContext, useState } from "react"
import { ServicesContext } from "../context/servicesContext"


const AddService = () => {
  const [services, setServices] = useContext(ServicesContext)
  const [serviceInfo, setServiceInfo] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    address: '',
    availability: false
  })

  const handleServiceSubmit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:8000/api/services`, serviceInfo, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.status === 201) {
        alert("Service created successfully ✅")
        setServices(prev => [...prev, response.data.service])
        setServiceInfo({
          title: '',
          description: '',
          price: '',
          category: '',
          address: '',
          availability: false
        })
      }
    } catch (err) {
      console.error("Error adding service:", err)
      alert("Failed to create service ❌")
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold my-4">➕ Add a New Service</h1>
      <div className="flex justify-center">
        <form onSubmit={handleServiceSubmit} className="flex flex-col space-y-4 w-full max-w-md">
          <label>
            Title
            <input
              type="text"
              value={serviceInfo.title}
              onChange={e => setServiceInfo({ ...serviceInfo, title: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </label>

          <label>
            Description
            <input
              type="text"
              value={serviceInfo.description}
              onChange={e => setServiceInfo({ ...serviceInfo, description: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </label>

          <label>
            Price
            <input
              type="number"
              value={serviceInfo.price}
              onChange={e => setServiceInfo({ ...serviceInfo, price: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </label>

          <label>
            Category
            <input
              type="text"
              value={serviceInfo.category}
              onChange={e => setServiceInfo({ ...serviceInfo, category: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </label>

          <label>
            Address
            <input
              type="text"
              value={serviceInfo.address}
              onChange={e => setServiceInfo({ ...serviceInfo, address: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={serviceInfo.availability}
              onChange={e => setServiceInfo({ ...serviceInfo, availability: e.target.checked })}
            />
            <span>Available</span>
          </label>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Add Service
          </button>
        </form>
      </div>
    </>
  )
}

export default AddService
