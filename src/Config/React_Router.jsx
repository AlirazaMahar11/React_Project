import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Navbar } from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { Group_A } from '../Pages/Group_A'
import { Group_B } from '../Pages/Group_B'
import { Group_AB } from '../Pages/Group_AB'
import { Group_O } from '../Pages/Group_O'
import { Form } from '../Pages/Form'
 
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route>
        <Route path='' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Route>
          <Route element={<Navbar/>}>
              <Route path='/Home' element={<Home/>}/> 
              <Route path='/Group_A' element={<Group_A/>}/>   
              <Route path='/Group_B' element={<Group_B/>}/>   
              <Route path='/Group_AB' element={<Group_AB/>}/>   
              <Route path='/Group_O' element={<Group_O/>}/>
              <Route path='/Form' element={<Form/>}/>
          </Route>
      </>
    )
)

export const React_Router = () => {
  return (
    
    <RouterProvider router={router}/>
  )
}

