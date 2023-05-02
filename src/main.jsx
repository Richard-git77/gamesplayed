import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {AppRouter} from './Routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  
  <BrowserRouter>
  <React.StrictMode>
    
    <AppRouter />
  </React.StrictMode>
  </BrowserRouter>
)
