import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/authContext"
import { ServicesContext } from "../context/servicesContext"


const AddService = () => {
    let navigate = useNavigate()

    const { token } = useContext(AuthContext)
    const { fetchServices } = useContext(ServicesContext)

    const [serviceInfo, setServiceInfo] = useState({
        title: '',
        description: '',
        price: null,
        category: '',
        address: '',
        availability: false,
        image: null
    })

    const handleServiceSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', serviceInfo.title)
        formData.append('description', serviceInfo.description)
        formData.append('price', serviceInfo.price)
        formData.append('category', serviceInfo.category)
        formData.append('address', serviceInfo.address)
        formData.append('availability', serviceInfo.availability)
        if (serviceInfo.image) {
            formData.append('image', serviceInfo.image)
        }

        try {
            const response = await axios.post(`http://localhost:8000/api/services`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.status === 201) {
                alert(response.data.message)
                navigate(`/service/${response.data.newService._id}`)
            }
        }
        catch(err) {
            console.error(err)
        }
        finally{
            fetchServices()
        }
    }

    return (
        <>
        <h1 className="text-2xl font-bold my-4">➕ Add a New Service</h1>
        <div className="flex justify-center">
            <form onSubmit={handleServiceSubmit} className="flex flex-col space-y-4 w-full max-w-md">
            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, title: e.target.value })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Description</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, description: e.target.value })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Price</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, price: e.target.value })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Category</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, category: e.target.value })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, address: e.target.value })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Availability</label>
                <input
                    type="checkbox"
                    checked={serviceInfo.availability}
                    onChange={e => setServiceInfo({ ...serviceInfo, availability: e.target.checked })}
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Image</label>
                <input
                    type="file"
                    className="input-style"
                    onChange={e => setServiceInfo({ ...serviceInfo, image: e.target.files[0] })}
                />
            </div>

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
