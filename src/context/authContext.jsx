import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        try {
            const token = localStorage.getItem('token')
            if (token) {
                setIsAuthenticated(true)
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
                localStorage.setItem('token', response.data.token) // ← n'oublie pas de stocker le token
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
        setIsAuthenticated(false)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, handleLogin, handleLogout]}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
