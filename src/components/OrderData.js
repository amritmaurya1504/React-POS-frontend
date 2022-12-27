import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


export default function OrderData() {
    const items = useSelector(state => state.ordered);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-white">Current Orders</h1>
                    <p className="mt-2 text-sm text-white">
                        A list of all the orders in your restro including their name and items.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-4">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Clear Orders
                    </button>
                    <Link className='bg-[#3441d4] px-6 py-2 rounded-[5px] items-center text-white' to="/dashboard">Home</Link>
                    <Link className='bg-[#5b45b0] px-6 py-2 rounded-[5px] text-white' to="/customer">Customers</Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-[#060c18]">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                                            Sl No.
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Table
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Items
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Time
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Order-Id
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-[#0e1227]">
                                    {items.map((curr, i) => (
                                        <tr key={i}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                                                {i+1}
                                            </td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                                                {curr.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{curr.table}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{curr.items}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{curr.time}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{curr.order ? curr.order : "Cash"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white"><small><i>Sent to kitchen</i></small></td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Remove<span className="sr-only">, {curr.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {items.length == 0 && (<p className="text-white text-center mt-4">No any Current orders.</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
