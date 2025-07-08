import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import RootPage from './Pages/RootPage/RootPage.jsx'
import ProjectDetails from './components/Projects/ProjectDetails.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import ProjectPage from './Pages/ProjectPage/ProjectPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />, 
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
