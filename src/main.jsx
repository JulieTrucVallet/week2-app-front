import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import MyRouter from './MyRouter';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>,
)
