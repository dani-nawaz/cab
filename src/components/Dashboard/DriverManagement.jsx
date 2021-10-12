import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'driverName', headerName: 'Driver name', width: 170 },
  { field: 'vehicleName', headerName: 'Vehicle name', width: 170 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 130,
  },
  {
    field: 'action',
    headerName: 'Action',

    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={'usermanagement/' + params.row.id}>
            <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800'>
              Details
            </span>
          </Link>
        </>
      )
    },
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
]

const rows = [
  {
    id: 1,
    vehicleName: 'toyota',
    driverName: 'Jon',
    age: 35,
    location: 'delhi',
  },
  {
    id: 2,
    vehicleName: 'mehran',
    driverName: 'Cersei',
    age: 42,
    location: 'delhi',
  },
  {
    id: 3,
    vehicleName: 'tuscan',
    driverName: 'Jaime',
    age: 45,
    location: 'delhi',
  },
  {
    id: 4,
    vehicleName: 'nanu',
    driverName: 'Arya',
    age: 16,
    location: 'delhi',
  },
  {
    id: 5,
    vehicleName: 'honda',
    driverName: 'Daenerys',
    age: null,
    location: 'delhi',
  },
  {
    id: 6,
    vehicleName: 'Melisandre',
    driverName: null,
    age: 150,
    location: 'delhi',
  },
  {
    id: 7,
    vehicleName: 'Clifford',
    driverName: 'Ferrara',
    age: 44,
    location: 'delhi',
  },
  {
    id: 8,
    vehicleName: 'Frances',
    driverName: 'Rossini',
    age: 36,
    location: 'delhi',
  },
  {
    id: 9,
    vehicleName: 'Roxie',
    driverName: 'Harvey',
    age: 65,
    location: 'delhi',
  },
]
export default function DriverManagement() {
  return (
    <div className='flex flex-col'>
      <div className='max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
        <div className='max-w-xl'>
          <h2 className='text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            User Manament
          </h2>
          <p className='mt-5 text-xl text-gray-400'>List of All the drivers</p>
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
