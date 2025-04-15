import { Route, Routes } from 'react-router'
import App from './App'
import NavBar from './components/NavBar'
import { default as AddEvent, default as AddService } from './pages/AddService'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import ProtectedRoute from './utils/ProtectedRoute'

const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                <Routes exact path="/" element={<App />} />
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
                <Route path='/service/:id' element={<ServiceDetails />} />
                <Route path='*' element={<p>404 not found</p>} />
            </Routes>
        </>
    )
}

export default MyRouter