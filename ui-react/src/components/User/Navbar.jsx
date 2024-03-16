import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ]

  return (
    <nav className="bg-white shadow-md flex items-center justify-center h-16 px-4">
      <div className="container mx-auto flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl">
          Max
          <span className="text-orange-500">Quiz</span>
        </h1>
        <ul className="flex space-x-4">
          {NavLinks.map((links, index) => (
            <li key={index} className="py-2 px-4 hover:bg-gray-100">
              <NavLink to={links.path} className="text-gray-700 font-medium">
                {links.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
