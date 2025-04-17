import { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../context/authContext'
import { ServicesContext } from '../context/servicesContext'

const NavBar = () => {
  const { services } = useContext(ServicesContext)
  const { isAuthenticated, handleLogout } = useContext(AuthContext)

  return (
    <>
      <h1 className="text-center my-2">Hello there is {services?.length || 0} events</h1>
      <ul className='bg-gray-500 text-white flex justify-center space-x-6 py-2'>
        <Link to='/'><li>Home</li></Link>

        {!isAuthenticated ? (
          <>
            <Link to='/register'><li>Register</li></Link>
            <Link to='/login'><li>Login</li></Link>
          </>
        ) : (
          <>
            <Link to='/addservice'><li>Add Service</li></Link>
            <Link to='/profile'><li>Profile</li></Link>
            <Link to='/users'><li>Users</li></Link>
            <li className='cursor-pointer' onClick={handleLogout}>Logout</li>
          </>
        )}
      </ul>
    </>
  )
}

export default NavBar
