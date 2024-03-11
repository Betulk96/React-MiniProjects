import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//bu kısma dokunmuyoruz index ile haberleşen aracı ,appi buraya koyuruz böyle ce index içine yerleşebilir
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
