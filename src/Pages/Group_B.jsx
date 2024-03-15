import { Outlet } from "react-router-dom"
import Blood_Img from '../assets/Blood_Images.jpg'
import { Bloods_Cards } from "../Components/Bloods_Cards"
import { Custom_Button } from "../Components/Button"
export const Group_B = () => {
  return (
    <>
      <div>
        <Outlet />
        <div>
          <div className="mt-10 mx-10 h-80 pt-10">
            <div className="flex justify-center">
              <div className="mx-2">
                <img src={Blood_Img} className="w-[400px] h-[300px]" alt="image" />
              </div>
              <div>
                <h1 className="text-left my-10 text-4xl font-bold"><span className="text-red-600 font-serif">Blood Group B </span>Positive</h1>
                <p className="w-[900px] my-3">
                  Blood type B is one of the main blood groups, characterized by the presence of B antigens on red blood cells. People with type A blood have anti-B antibodies and can receive blood from type B or O donors but not from type B or AB donors. It`s essential for medical procedures and understanding one`s health.</p>
                <div className="space-x-4">
                  <Custom_Button sx={{ width: '220px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000', }} variant="contained">Blood Consumer</Custom_Button><Custom_Button sx={{ width: '220px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000', }} variant="contained">Blood Donner</Custom_Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-10 h-80 pt-10">
        <div className="flex justify-center">
          <div className="mx-2">
            <img src={Blood_Img} className="w-[400px] h-[300px]" alt="image" />
          </div>
          <div>
            <h1 className="text-left my-10 text-4xl font-bold"><span className="text-red-600 font-serif">Blood Group B </span>Nagative</h1>
            <p className="w-[900px] my-3">
              Blood type B is one of the main blood groups, characterized by the presence of B antigens on red blood cells. People with type B blood have anti-B antibodies and can receive blood from type A or O donors but not from type B or AB donors. It`s essential for medical procedures and understanding one`s health.</p>
            <div className="space-x-4">
              <Custom_Button sx={{ width: '220px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000', }} variant="contained">Blood Consumer</Custom_Button><Custom_Button sx={{ width: '220px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000', }} variant="contained">Blood Donner</Custom_Button>
            </div>
          </div>
        </div>
      </div>
      <Bloods_Cards />
    </>
  )
}
