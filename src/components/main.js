import "./main.css"
export default function Main() {
    return (
        <div className="flex boxplus justify-evenly items-center ">


            <div className="w-2/5 flex flex-col bg-gray-200 rounded-md">
                <div className=" flex flex-col items-start">
                    <div className="flex items-center update">
                        <p className="circle"></p>
                        <p>Update</p>
                    </div>
                    <p className="text-black font-bold ml-2">Sales revenue increased </p>
                    <p className="font-bold ml-2"> <span className="text-orange-500">20 %</span> in 1 week</p>
                    <div className="flex items-center">
                        <p className="text-gray-500 mt-2">See analytics</p>
                        <i className="fa-solid fa-angle-right text-gray-500 mt-3 ml-3"></i>
                    </div>
                </div>
            </div>


            <div className="w-2/5 bg-gray-200 rounded-md month">
                <div className="flex justify-between items-center">
                    <p className="text-black">Net Revenue</p>
                    <p className="font-bold"> ... </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-3xl mt-1">$123,000</p>
                    <p className="text-gray-500 mt-3"> <span className="text-orange-600"> 5% </span> vs last month</p>
                </div>
            </div>


            <div className="w-2/5 bg-gray-200 rounded-md month">
                <div className="flex justify-between items-center">
                    <p className="text-black">Weekly Sales</p>
                    <p className="font-bold"> ... </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-3xl mt-1">$24,000</p>
                    <p className="text-gray-500 mt-3"> <span className="text-orange-600"> 71% </span> of total goals</p>
                </div>
            </div>

            <div className="w-2/5 bg-gray-200 rounded-md month">
                <div className="flex justify-between items-center">
                    <p className="text-black">Page Visits</p>
                    <p className="font-bold"> ... </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-3xl mt-1">423</p>
                    <p className="text-gray-500 mt-3"> <span className="text-orange-600"> 22% </span> higher</p>
                </div>
            </div>

        </div>
    )
}