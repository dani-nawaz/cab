import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'userName', headerName: 'Rider', width: 170 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },

  {
    field: 'onlineStatus',
    headerName: 'Online Status',
    width: 160,
    renderCell: (online) => {
      return (
        <>
          {online ? (
            <div className='bg-green-400 w-2 h-2 rounded-full'></div>
          ) : (
            <div className='bg-red-400 w-2 h-2 rounded-full'></div>
          )}
        </>
      )
    },
  },
]

const rows = [
  {
    id: 1,
    userName: 'Jon',
    age: 35,
    location: 'delhi',
  },
  {
    id: 2,
    userName: 'Cersei',
    age: 42,
    location: 'delhi',
  },
  {
    id: 3,
    userName: 'Jaime',
    age: 45,
    location: 'delhi',
  },
  {
    id: 4,
    userName: 'Arya',
    age: 16,
    location: 'delhi',
  },
  {
    id: 5,
    userName: 'Daenerys',
    age: null,
    location: 'delhi',
  },
  {
    id: 6,
    userName: null,
    age: 150,
    location: 'delhi',
  },
  {
    id: 7,
    userName: 'Ferrara',
    age: 44,
    location: 'delhi',
  },
  {
    id: 8,
    userName: 'Rossini',
    age: 36,
    location: 'delhi',
  },
  {
    id: 9,
    userName: 'Harvey',
    age: 65,
    location: 'delhi',
  },
]
export default function AllUsers() {
  return (
    <div className='flex flex-col'>
      <div className='max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
        <div className='max-w-xl'>
          <h2 className='text-xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Active Users
          </h2>
          <p className='mt-5 text-xl text-gray-400'>
            List of All the active Users
          </p>
        </div>
      </div>
      <div style={{ height: 400, width: '100%' }} className='bg-white'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
