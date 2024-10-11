import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage.jsx'
// import CreateEmployeePage from './pages/CreateEmployee.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<HomePage></HomePage>
    },
    {
      path:"/addemployee",
      element:<CreateEmployee></CreateEmployee>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
