import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"


const UserDetails = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUserDetails = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/user/${id}`)
            setUserDetails(response.data)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])
    
    return(
        <>
            {!loading && userDetails && (
                <>
                    <h1>Hello I am {userDetails.first_name}</h1>
                </>
            )}
        </>
    )
}

export default UserDetails