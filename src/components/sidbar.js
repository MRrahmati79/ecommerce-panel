import imghorse from "./HORSE.jpg"
import "./sidbar.css"

export default function Sidbar() {
    return (
        <div>

            <div className="flex items-center">

                <img src={imghorse} alt="logo" className="w-11 h-11"></img>
                <p className="font-bold pl-3">Syrax</p>
            </div>

            <div>

                <p className="uppercase text-gray-500">administrator</p>
            </div>


            <div className="flex flex-col text-gray-500">


                <div className="flex items-center justify-between hover:bg-black hover:rounded-lg hover:text-orange-500">
                    <i className="fa-solid fa-poll"></i>
                    <p className="ml-2">Dashboard</p>
                    <p className="bg-red-500 text-white rounded-md ml-3 pl-3 pr-3  pb-1">12</p>
                </div>



                <div className="flex items-center justify-between hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-envelope"></i>
                    <p className="ml-2">Messages</p>
                    <p className="bg-red-500 text-white rounded-md ml-4 pl-3 pr-3  pb-1">20</p>
                </div>



                <div className="flex items-center hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-users"></i>
                    <p className="ml-3">Socials</p>
                </div>




                <div className="flex items-center hover:bg-black hover:rounded-lg hover:text-orange-500">

                    <i className="fa-solid fa-file-alt"></i>
                    <p className="ml-3">Documents</p>
                </div>




              <div className="flex flex-col text-gray-500">

                <p className="pt-8 mt-3">SETTINGS</p>

                <div className="flex items-center mt-8">
                    <i className="fa-solid fa-user-friends"></i>
                    <p className="pl-4">Roles</p>
                </div>



                <div className="flex items-center">
                    <i className="fa-solid fa-exchange-alt"></i>
                    <p className="pl-4">Requests</p>
                </div>



                <div className="flex items-center">
                    <i className="fa-solid fa-cog"></i>
                    <p className="pl-4">Preferences</p>
                </div>


              </div>





            </div>
        </div>
    )
}