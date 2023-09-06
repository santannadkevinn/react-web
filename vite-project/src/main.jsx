import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyApp from './01-myButton.jsx'
import ShoppingList from './02-list.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>,
)
