import { Outlet } from "react-router-dom"
import '../App.css'
import { Custom_Button } from "../Components/Button"
import { Bloods_Cards } from "../Components/Bloods_Cards"
import { Footer } from "../Components/Footer"

export const Home = () => {
  return (
    <>
      <Outlet />
      <div className="Container">
        <div>
          <div>
            <h1 className="text-5xl font-bold text-left pt-20 pb-10 mx-20">
              Welcome to Our Blood and Blood Types!
            </h1>
          </div>
          <div>
            <p className="text-left mx-20 font-bold w-[70%] lg:w-[90%]">
              At [Blood Bank Name] , we are dedicated to saving lives through the provision of vital blood resources. Our website serves as a gateway to a community of donors, recipients, and healthcare professionals, facilitating seamless access to essential blood services.With a commitment to excellence and compassion, our blood bank stands as a beacon of hope for those in need. Through our user-friendly interface, users can easily navigate through a wealth of information and resources tailored to their specific requirements.
              Explore our comprehensive database of registered blood donors, each equipped with critical details such as blood type, medical history, and availability. Whether you`re seeking a donor match or looking to contribute to our life-saving mission by becoming a donor yourself, our platform simplifies the process, ensuring timely assistance in moments of crisis.

              Together, let`s make every drop count. Welcome to [Blood Bank Name], where every donation is a gift of life.</p>
          </div>
          <div className="mx-20 my-5 space-x-4">
            <Custom_Button sx={{
              width: '200px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000'
            }} variant="contained">Blood Donnor</Custom_Button>
            <Custom_Button sx={{ width: '220px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000', }} variant="contained">Blood Consumer</Custom_Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center mt-10 font-extrabold font-serif">What Is A Rare Blood Type?</h1>
        <p className="text-center mx-20 my-5">There are more than 600 other known antigens, the presence or absence of which creates `rare blood types`.  Your blood type is considered rare if you lack antigens that 99% of the people are positive for. If you somehow lack an antigen that 99.99% are positive for, your blood type is extremely rare.</p>
      </div>
      {/* Export Blood Circle Jars */}
      <Bloods_Cards />

      {/* Export Crausal Slider */}
      <div>
         {/* <Crausal/> */}
      </div>

      {/* Website Footer */}
      <div>
        <Footer />
      </div>
    </>
  )
}
