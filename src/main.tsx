import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";



const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)