import { useContext } from 'react'
import './App.css'
import { ServicesContext } from './context/servicesContext.jsx'

function App() {

  const [services, setServices] = useContext(ServicesContext)


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-sky-300">Hello this is my event APP</h1>
      <div className='flex flex-wrap p-7 m-7 space-between'>
      {services && services.map(service => {
        return ( 
            <div key={service._id} className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🎉 {service.title}</h3>
              <p className="text-gray-600 mb-2">📌 <span className="font-semibold">Category:</span>{service.category}</p>
              <p className="text-gray-700 mb-3">📖 <span className="font-semibold">Description:</span>{service.description}</p>
              <p className="text-green-600 font-bold mb-2">💰 Price: {service.price}</p>
              <p className="text-gray-500">📍 Address: {service.address}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
        )
      })}
      </div>
    </>
  )
}

export default App
