import { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../context/authContext'
import { ServicesContext } from '../context/servicesContext'

const NavBar = () => {
    const [services, setServices] = useContext(ServicesContext)
    const {isAuthenticated, setIsAuthenticated, handleLogout} = useContext(AuthContext)

    console.log(isAuthenticated)
    return (
        <>
            <h1>Hello there is {services.length} events</h1>
            <ul className='bg-gray-500 flex justify-center space-x-4'>
                <Link to='/'><li>Home</li></Link>
                {!isAuthenticated ? (
                    <>
                        <Link to='/register'><li>Register</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </>
                )

                    : (
                        <>
                            <Link to='/addservice'><li>Add Service</li></Link>
                            <Link to='/profile'><li>Profile</li></Link>
                            <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
                        </>
                    )
                    }
            </ul>
        </>
    )
}


export default NavBar  