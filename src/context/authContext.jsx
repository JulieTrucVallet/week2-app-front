import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        setLoading(true)
        try {
            const tokenStorage = localStorage.getItem('token')
            if (tokenStorage) {
                setIsAuthenticated(true)
                setToken(tokenStorage)
            }
        } catch (error) {
            console.log('Error accessing localStorage:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8000/api/login`, { email, password })
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setToken(response.data.token)
                setIsAuthenticated(true)
                alert(response.data.message)
                navigate('/')
            }
        } catch (err) {
            console.log(err)
            if (err.response) {
                alert(err.response.data)
            }
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setIsAuthenticated(false)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout, token}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
