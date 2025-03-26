import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthController } from './context/authContext'
import { ServicesController } from './context/servicesContext'
import './index.css'
import MyRouter from './MyRouter'

createRoot(document.getElementById('root')).render(
  <ServicesController>
    <AuthController>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>,
    </AuthController>
  </ServicesController>
)
