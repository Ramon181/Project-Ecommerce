import React from 'react';
import "./users.scss"

const Users = () => {

    


    return ( 
        <div className="app-container">
      <div className="app-content">
        <div className="app-content-header">
          <h1 className="app-content-headerText">Users</h1>
          <button className="mode-switch" title="Switch Theme">
            <svg
              className="moon"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
          
        </div>

        <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 mr-2 sm:mb-0">
                    <div className="relative">
                        <select
                            className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                    </div>
                    <div className="relative">
                        <select
                            className=" h-full rounded-r  block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="block relative">
                <form method="GET">
              <div className="relative w-80 text-gray-600 focus-within:text-gray-400">
                <span className="absolute  left-0 flex items-center pl-1">
                  <button
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  className="py-2 text-sm text-white w-full bg-gray-900 rounded-md pl-10 focus:outline-none "
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </form>
                </div>
            </div>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow border-2 border-gray-700 rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-10 py-3 border-b-2 border-gray-600  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                    User
                                </th>
                                <th
                                    className="pl-24 py-3 border-b-2 border-gray-600  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th
                                    className="pl-32 py-3 border-b-2 border-gray-600  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-600  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-600  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-200 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <p className="text-gray-200 whitespace-no-wrap">Admin</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <p className="text-gray-200 whitespace-no-wrap">
                                        Jan 21, 2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Activo</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button></td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-200 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <p className="text-gray-200 whitespace-no-wrap">Admin</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <p className="text-gray-200 whitespace-no-wrap">
                                        Jan 21, 2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600  text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Activo</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-600"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button></td>
                            </tr>
        
                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5  border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-100">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
      
      </div>
    </div>
        
               
     );
}
 
export default Users;