import { Route, Routes } from 'react-router'
import App from './App'
import NavBar from './components/NavBar'
import { default as AddEvent, default as AddService } from './pages/AddService'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import ServiceDetails from './pages/ServiceDetails'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'
import ProtectedRoute from './utils/ProtectedRoute'

const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/profile' element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/addevent' element={<AddEvent />} />
                <Route path='/addservice' element={
                    <ProtectedRoute>
                        <AddService />
                    </ProtectedRoute>
                } />
                <Route path='/users' element={<Users />} />
                <Route path='/user/:id' element={<UserDetails />} />
                <Route path='/service/:id' element={<ServiceDetails />} />
                <Route path='*' element={<p>404 not found</p>} />
            </Routes>
        </>
    )
}

export default MyRouter