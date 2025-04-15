import { AuthContext } from " .. /context/authContext"
import axios from "axios"
import { useContext, useEffect, useState } from "react"


const Profile = () => {
    const { tokenStorage } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('token')

    const fetchUserProfile = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/profile`, {
                headers : {
                    'Authorization' : `Bearer ${tokenStorage}`
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
    }, [])

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