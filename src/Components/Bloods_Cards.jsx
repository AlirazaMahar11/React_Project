import { Link } from 'react-router-dom'
import '../App.css'
import { Custom_Button } from './Button'

export const Bloods_Cards = () => {
    return (
        <>
            {/* Create Range Circle Jar */}
            <div className=" border-2 mx-20 my-10 sm:mx-5">
                <h1 className="text-center my-10 text-gray-600 font-bold font-serif">Click on a blood type below to learn how it relates to the P.K. population.</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="Blood_Group">
                        <div className="Outer_Fill">
                            <div className="Inner_Fill font-extrabold"><div id="number"><br />A <br />75%
                            </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle_1" cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <Link to='/Group_A'>
                            <Custom_Button sx={{ marginTop: "10px", marginLeft: '20px', color: 'red' }}>More Info</Custom_Button>
                        </Link>
                    </div>
                    {/* Secound Range Circle jar code */}
                    <div className="Blood_Group">
                        <div className="Outer_Fill">
                            <div className="Inner_Fill font-extrabold"><div id="number"><br />B<br />47%
                            </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle_2" cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <Link to='/Group_B'>
                            <Custom_Button sx={{ marginTop: "10px", marginLeft: '20px', color: 'red' }}>More Info</Custom_Button>
                        </Link>
                    </div>
                    {/* Secound Range Circle jar code */}
                    <div className="Blood_Group">
                        <div className="Outer_Fill">
                            <div className="Inner_Fill font-extrabold"><div id="number"><br />AB<br />37%
                            </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle_3" cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <Link to='/Group_AB'>
                            <Custom_Button sx={{ marginTop: "10px", marginLeft: '20px', color: 'red' }}>More Info</Custom_Button>
                        </Link>
                    </div>
                    {/* Secound Range Circle jar code */}
                    <div className="Blood_Group">
                        <div className="Outer_Fill">
                            <div className="Inner_Fill font-extrabold"><div id="number"><br />O<br />60%
                            </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle_4" cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <Link to='/Group_O'>
                            <Custom_Button sx={{ marginTop: "10px", marginLeft: '20px', color: 'red' }}>More Info</Custom_Button>
                        </Link>
                    </div>
                </div>
            </div >
            {/* end Code Circle jar */}
        </>
    )
}
