import axios from "axios"
import { useEffect, useState } from "react"


const Users = () => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/users`)
            setUsers(response.data)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return(
        <>
            {!loading && users && users.map (user => {
                return (
                    <>
                        <Link to={`/user/${user._id}`}></Link>
                        <h1></h1>
                    </>
                )
            })
            }
        </>
    )
}

export default Users