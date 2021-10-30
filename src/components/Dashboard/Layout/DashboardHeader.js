import { Menu, Transition } from '@headlessui/react'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import React from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../actions/userActions'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function DashboardHeader({ setSidebarOpen, userNavigation }) {
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const { loading, userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='relative z-10 flex-shrink-0 flex h-16 bg-white shadow'>
      <button
        type='button'
        className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex-1 px-4 flex justify-end'>
        <div className='ml-4 flex items-center md:ml-6'>
          {/* Profile dropdown */}
          <Menu as='div' className='ml-3 relative'>
            <div>
              <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Open user menu</span>
                {loading ? (
                  <div>loading....</div>
                ) : (
                  <img
                    className='h-10 w-10 rounded-full'
                    src={`https://avatars.dicebear.com/api/initials/${userInfo.data.user_data.username}.svg`}
                    alt='user avatar'
                  />
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'w-full px-4 py-2 text-sm text-gray-700 text-left'
                      )}
                      onClick={logoutHandler}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
