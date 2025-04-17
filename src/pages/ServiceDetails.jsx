import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"


const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchServiceByID = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/service/${id}`)
            if(response.status === 200){
                setService(response.data)
            }
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchServiceByID()
    }, [])

    return(
        <>
            {!loading && service && (
                <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Détails du service</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image placeholder */}
                        <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                            <img className="text-gray-400" src={service.image ? `http://localhost:8000${service.image}` : `http://localhost:8000/public/images/default_event.jpg`} />
                        </div>

                        {/* Informations du service */}
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Description</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>

                            <div className="flex gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700">Catégorie</h2>
                                    <p className="text-gray-600">{service.category}</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700">Prix</h2>
                                    <p className="text-gray-600">{service.price}euros</p>
                                </div>

                                {service.userID && (
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-700">Organiser</h2>
                                        <p className="text-gray-600">{service.userID.first_name}</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Adresse</h2>
                                <p className="text-gray-600">{service.address}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Disponibilité</h2>
                                <span className="inline-block Dx-3 DV-1 text-sm bg-green-100 text-green-800 rounded-full">
                                    Disponible
                                </span>
                            </div>
                            
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default ServiceDetails