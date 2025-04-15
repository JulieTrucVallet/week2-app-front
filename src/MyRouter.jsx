import { Route, Routes } from 'react-router'
import App from './App'
import NavBar from './components/NavBar'
import AddEvent from './pages/AddService'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'

const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/addevent' element={<AddEvent />} />
            </Routes>
        </>
    )
}

export default MyRouter