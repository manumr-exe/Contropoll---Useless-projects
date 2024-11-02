
import './App.css'
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path:'/question',
        element:<QuestionPage />
    },
    {
        path:'/',
        element:<HomePage />
    },
])

function App() {
 

  return (
    <>
   <RouterProvider router={router} />
   
    </>
  )
}

export default App
