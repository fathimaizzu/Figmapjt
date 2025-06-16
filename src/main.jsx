
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import Discover from './pages/Discover.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'Discover',
        element: <Discover/>
    },
      
      {
          path:'about',
         element: <About/>
      },
      {
        path:'service',
        element: <Service/>
      },
      { 
        path:'News',
        element: <News/>
      },
      {
        path:'About',
        element: <About/>
      },
      {
        path:'Contact',
        element: <Contact/>
      }
     
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
