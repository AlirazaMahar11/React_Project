import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
 
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Home/>}/>
        </Route>
    )
)

export const React_Router = () => {
  return (
    
    <RouterProvider router={router}/>
  )
}

