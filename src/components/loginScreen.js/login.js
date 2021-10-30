import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/userActions'
import FormInput from '../FormInput'

export default function Signin({ history }) {
  let form = useForm({ mode: 'onBlur' })
  const [apiError, setApiError] = useState()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const onSubmit = (values) => {
    const payload = {
      country_code: 'IN',
      device_type: 'dfd',
      device_id: 'dfd',
      ...values,
    }
    dispatch(login(payload))
  }
  useEffect(() => {
    if (userInfo) {
      if (userInfo.data.user_data.user_type === '0') {
        history.push('/')
      } else {
        setApiError('Sorry, you are not the admin')
      }
    }
  }, [userInfo, history])
  console.log()
  return (
    <div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='flex h-full justify-center items-center'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-white border border-gray-300 rounded-md px-4 py-6 sm:px-6 lg:px-8 sm:max-w-md sm:w-full'
        >
          <div className='text-center'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Sign in to you Account
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              <Link to='/signup'>
                <button className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Create new Account
                </button>
              </Link>
            </p>
          </div>
          <div className='border-b border-gray-200 mt-4 -mx-4 sm:-mx-6 lg:-mx-8' />
          <div className='pt-6 pb-2 space-y-5'>
            <FormInput
              form={form}
              autoComplete='tel-local'
              name='mobile'
              label='Mobile Number'
              type='text'
              required={true}
            />

            <FormInput
              form={form}
              autoComplete='current-password'
              name='password'
              label='New Password'
              type='password'
              required={true}
              minLength={5}
            />

            {error && <p className='text-sm text-red-600'>{error}</p>}
            {apiError && <p className='text-sm text-red-600'>{apiError}</p>}

            <div className='pt-2'>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {loading ? (
                  <div className='border-2 border-white/40 border-t-white w-5 h-5 rounded-full animate-spin' />
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
