import Aside from "./aside"
import "./header.css"
import Main from "./main"
import profile from "./profile.jpg"
import Section from "./section"
export default function Header() {
    return (

        <div className="w-full">

            <div className="flex justify-between text-gray-500 p-2 items-center">

                <div className="flex items-center">
                    <i className="fa-solid fa-search p-2"></i>
                    <p>Type anywhere to search</p>
                </div>

                <div className="flex items-center">
                    <div className="text-gray-800 flex items-center header">
                        <i className="fa-solid fa-bell bell"></i>
                        <p className="text mr-4"></p>
                    </div>

                    <div className="flex items-center information">
                        <img className="w-8 h-8 rounded-full" src={profile} alt="profile"></img>
                        <div className="flex flex-col">
                            <p className="text-black font-bold">Rhaenyra Targaryen</p>
                            <p>Syrax Rider</p>
                        </div>
                    </div>

                    <div>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>


            <div className="flex items-center box1">
                <p className="text-gray-500">Home</p>
                <i className="fa-solid fa-angle-right text-gray-500"></i>
                <p className="text-black">Dashboard</p>
            </div>

            <Main></Main>
            <Section></Section>
            <Aside></Aside>


        </div>
    )
}