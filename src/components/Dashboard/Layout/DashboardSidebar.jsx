import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function DashboardSidebar({ navigation }) {
  const location = useLocation()
  return (
    <div className='hidden md:flex md:flex-shrink-0'>
      <div className='flex flex-col w-64'>
        <div className='flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <h1>LOGO</h1>
          </div>
          <div className='mt-5 flex-grow flex flex-col'>
            <nav className='flex-1 px-2 bg-white space-y-1'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.href === location.pathname
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.href === location.pathname
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
