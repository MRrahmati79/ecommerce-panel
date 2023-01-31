import Nemodar from "./nemoder";

export default function Section() {
    return (

        <div className="flex">

            <div className="w-2/6 bg-gray-200 rounded-md ml-1 mt-1 h-40">

                <div className="flex justify-between">
                    <p className="font-bold text-black p-2">Products</p>
                    <p className="font-bold text-black mr-4">. . .</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center p-2">
                        <i className="fa-solid fa-tape text-orange-400"></i>
                        <p className="ml-1">Product Launched</p>
                    </div>

                    <div className="flex items-center p-2">
                        <i className="fa-solid fa-tape text-orange-400"></i>
                        <p className="ml-1">Product Sold</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <p className="text-black font-bold ml-3">433</p>
                    <p className="text-black font-bold mr-3">223</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center p-2">
                        <p className="text-gray-500"> <span className="text-orange-500">avg.12</span>Productadded</p>
                    </div>
                    <div className="flex items-center p-2">
                        <p className="text-gray-500"> <span className="text-orange-500">15%</span>vslast3monthw</p>
                    </div>
                </div>

            </div>
            <Nemodar></Nemodar>
        </div>
    )
}