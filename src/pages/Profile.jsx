import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/authContext"

const Profile = () => {
    let navigate = useNavigate()
    const [isAuthenticated] = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('token')

    const fetchUserProfile = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/profile`, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            if(response.status === 200){
                setUserProfile(response.data)
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
        if(!isAuthenticated){
            navigate('/login')
        }
        if(token){
            fetchUserProfile()
        }
    }, [isAuthenticated])

    return(
        <>
            {!loading && userProfile && (
                <>
                    <h1>Hello my name is {userProfile.first_name}</h1>
                    <img src={`http://localhost:8000${userProfile.image}`} />
                </>
            )}
        </>
    )
}


export default Profile      