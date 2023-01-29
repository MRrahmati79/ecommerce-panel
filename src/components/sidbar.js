import imghorse from "./HORSE.jpg"
import "./sidbar.css"

export default function Sidbar() {
    return (
        <div className="w-2/12 bg-slate-200 box">


            <div className="flex items-center">

                <img src={imghorse} alt="logo" className="w-11 h-11"></img>
                <p className="font-bold pl-3">Syrax</p>
            </div>

            <div>

                <p className="uppercase text-gray-500">administrator</p>
            </div>


            <div className="flex flex-col text-gray-500">


                <div className="flex items-center justify-between  hover:bg-black hover:rounded-lg hover:text-orange-500">
                    <i className="fa-solid fa-shop"></i>
                    <p>Dashboard</p>
                    <span className="bg-red-500 text-white rounded-md">12</span>
                </div>



                <div className="flex items-center justify-between  hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-home"></i>
                    <p>Messages</p>
                    <span className="bg-red-500 text-white rounded-md">20</span>
                </div>



                <div className="flex items-center hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-phone"></i>
                    <p className="ml-7">Socials</p>
                </div>




                <div className="flex items-center hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-car"></i>
                    <p className="ml-7">Documents</p>
                </div>




              <div className="flex flex-col text-gray-500">

                <p className="pt-8 mt-3">SETTINGS</p>

                <div className="flex items-center mt-8">
                    <i className="fa-solid fa-search"></i>
                    <p className="pl-4">Roles</p>
                </div>



                <div className="flex items-center">
                    <i className="fa-solid fa-search"></i>
                    <p className="pl-4">Requests</p>
                </div>



                <div className="flex items-center">
                    <i className="fa-solid fa-fish"></i>
                    <p className="pl-4">Preferences</p>
                </div>


              </div>





            </div>
        </div>
    )
}