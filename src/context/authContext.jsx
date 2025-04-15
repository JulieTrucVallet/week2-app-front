import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [tokenStorage, setTokenStorage] = useState(null)

    useEffect(() => {
        setLoading(true)
        try{
            const token = localStorage.getItem('token')
            if(token) {
                setIsAuthenticated(true)
                setTokenStorage(token)
            }
        }
        catch(error){
            console.log('Error accessing localStorage:', error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8000/api/login`, { email, password })
            if(response.status === 200){
                setIsAuthenticated(true)
                alert(response.data.message)
                navigate('/')
            }
        }
        catch (err) {
            console.log(err)
            if (err) {
                alert(err.response.data)
            }
        }
    }

    const handleLogout = async () => {
        try{
            localStorage.removeItem('token')
            setIsAuthenticated(false)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, handleLogin, handleLogout, tokenStorage]}>
            {!loading && children}
        </AuthContext.Provider>
    )
}