import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../../actions/userActions'
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/solid'

export default function AllUsers({ history }) {
  const userList = useSelector((state) => state.userList)
  const { loading, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // const userDelete = useSelector((state) => state.userDelete)
  // const { success: successDelete } = userDelete
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (userInfo) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])
  const deleteHandler = () => {
    console.log('hi')
  }

  const columns = [
    { field: 'user_id', headerName: 'ID', width: 180 },
    {
      field: 'name',
      headerName: 'Display Name',
      width: 180,
      renderCell: (params) => {
        return (
          <div className='userList'>
            {params.row.first_name} {params.row.last_name}
          </div>
        )
      },
    },

    { field: 'email', headerName: 'Email ', width: 250 },
    { field: 'gender', headerName: 'Gender ', width: 150 },
    {
      field: 'mobile',
      headerName: 'Mobile Number',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',

      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.user_id}>
              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700'>
                Edit
              </span>
            </Link>
            <button
              onClick={() => {
                deleteHandler(params.row.email)
              }}
              className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full ml-2 bg-red-100 text-red-700'
            >
              delete
            </button>
          </>
        )
      },
    },
  ]
  return (
    <div className='flex flex-col'>
      <div className='py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
        <div className='max-w-xl'>
          <h2 className='text-xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Active Users
          </h2>
          <p className='mt-5 text-xl text-gray-400'>List of All the Users</p>
        </div>
      </div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div style={{ height: 400, width: '100%' }} className='bg-white'>
          <DataGrid
            rows={users}
            getRowId={(row) => row.user_id}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      )}
    </div>
  )
}
