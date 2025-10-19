import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Login from './pages/Login.jsx'
import Privacy from './pages/Privacy.jsx'
import Contact from './pages/Contact.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from "./pages/NotFound.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/about", element: <About />, errorElement: <NotFound /> },
  { path: "/menu", element: <Menu />, errorElement: <NotFound /> },
  { path: "/contact", element: <Contact />, errorElement: <NotFound /> },
  { path: "/privacy", element: <Privacy />, errorElement: <NotFound /> },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
  { path: "/signup", element: <Signup />, errorElement: <NotFound /> },
  { path: "/dashboard", element: <Dashboard />, errorElement: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
