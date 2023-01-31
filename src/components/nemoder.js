import "./nemoder.css"
export default function Nemodar() {
    return (

        <div className=" bg-gray-200 p-3 ml-1 rounded-md boxnemodar boxinformation">

            <div className="flex justify-between">
                <h1 className="font-bold">Analytics</h1>
                <div className="flex">
                    <div className="flex items-center mr-8">
                        <i className="fa-solid fa-square text-gray-500 mr-1"></i>
                        <p className="text-gray-500">Expense</p>
                    </div>

                    <div className="flex items-center mr-5">
                        <i className="fa-solid fa-square text-orange-600 mr-1"></i>
                        <p className="text-gray-500">Revenue</p>
                    </div>
                </div>
            </div>


            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$200K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>

            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$180K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>

            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$120K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>

            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$100K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>

            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$80K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>

            <div className="flex items-center" >
                <p className="text-sm text-gray-600 mt-3">$50K</p>
                <p className="w-full bg-slate-300 h-1 ml-3 rounded-sm mt-3 "></p>
            </div>


            <div className="flex items-center">
                <p className="text-sm text-gray-600 mt-3">$0</p>
                <p className="w-full bg-slate-300 h-1 ml-7 rounded-sm mt-3">
                    <div className="flex hhhh">
                        <p className="khat w-1 h-14 rounded-sm ml-2 bg-slate-500"></p>
                        <p className="khat2 w-1  rounded-sm ml-2 bg-orange-600"></p>


                        <div className="ml-7">
                            <p className="khat w-1 h-14 rounded-sm ml-7 bg-orange-600"></p>
                            <p className="khat2 w-1  rounded-sm ml-2 bg-slate-500"></p>
                        </div>

                    </div>

                </p>
            </div>


            <div className="flex monts">
                <p className="text-sm text-gray-500">Jul21</p>
                <p className="text-sm text-gray-500">Aug21</p>
                <p className="text-sm text-gray-500">Sep21</p>
                <p className="text-sm text-gray-500">Oct21</p>
                <p className="text-sm text-gray-500">Nov21</p>
                <p className="text-sm text-gray-500">Dec21</p>
                <p className="text-sm text-gray-500">Jen22</p>
                <p className="text-sm text-gray-500">Feb22</p>
                <p className="text-sm text-gray-500">Mar22</p>
            </div>






        </div>
    )
}