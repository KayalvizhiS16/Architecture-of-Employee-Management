/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  

  const navLinks = [
    {
      name: "Employees",
      to: "/employees",
    },
    {
      name: "Hierachy",
      to: "/hierachy",
    },
  ];
  return (
    <nav className="bg-cyan-400 w-full sticky top-0 z-50 flex justify-between items-center py-3 shadow-sm ">
      <a href="/" className="flex items-center mx-4">
        <img
          src="https://blog.xoxoday.com/content/images/2023/06/national-intern-day.webp"
          className="w-10 h-10"
          alt="Interns"
        />
        <span className="text-2xl font-semibold ">ARCHITECT OF</span>
        <span className="text-blue-500 text-2xl mx-1">EMPLOYEE MANAGEMENT</span>
      </a>

      <div>
          <div>
            <ul className="list-none md:flex hidden justify-end items-center flex-1 mx-4 ">
              {navLinks.length > 0
                ? navLinks.map((data, index) => (
                    <li key={index} className="m-2 font-semibold ">
                      <a href={data.to}>{data.name}</a>
                    </li>
                  ))
                : "No link found"}

              <li>
                <h1 className="mx-3 text-red-500 font-semibold bg-white rounded-md">Welcome</h1>
              </li>
              <li className="md:mx-3 my-2">
                <Button
                  variant="contained"
                  color="error"
                 
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
       

          <>
            <div>
              <ul className="list-none md:flex hidden justify-end items-center flex-1 mx-4 ">
                <li className="md:mx-3 my-2">
                  <Button
                    variant="contained"
                    color="primary"
                   
                  >
                 Log In
                  </Button>
                </li>
                <li className="md:mx-3 my-2">
                  <Button
                    variant="contained"
                    color="secondary"
                   
                  >
                   Register
                  </Button>
                </li>
              </ul>
            </div>
          </>
      
      </div>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <div
          className="cursor-pointer"
          onClick={() => setMenu((toggle) => !toggle)}
        >
          

          <div
            className={`${
              menu ? "flex" : "hidden "
            } p-6 bg-cyan-400 z-10 absolute top-20 right-0 mx-2 my-1  min-w-[160px] rounded-xl  shadow-lg`}
          >
            <div>
             
                <div>
                  <ul className="list-none flex flex-col justify-end items-center flex-1 mx-4 ">
                    {navLinks.length > 0
                      ? navLinks.map((data, index) => (
                          <li key={index} className="m-2 font-semibold">
                            <a href={data.to}>{data.name}</a>
                          </li>
                        ))
                      : "No link found"}

                    <li className="md:mx-3 my-2">
                      <h1 className="my-3 text-red-500 font-semibold bg-white rounded-md">Welcome</h1>
                     
                      <span className="text-orange-500 font-semibold">
                       
                      </span>
                    </li>
                    <li className="md:mx-3 my-2">
                      <Button
                        variant="contained"
                        color="error"
                       
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </div>
             

             
                <>
                  <div>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 mx-4 ">
                      <li className="md:mx-3 my-2">
                        <Button
                          variant="contained"
                          color="primary"
                         
                        >
                          Log In
                        </Button>
                      </li>
                      <li className="md:mx-3 my-2">
                        <Button
                          variant="contained"
                          color="secondary"
                         
                        >
                         Register
                        </Button>
                      </li>
                    </ul>
                  </div>
                </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
