import './Users.css'

import ViewTable from './ViewTable'

const Users = () => {
  return (
    <div className='products-wrapper'>
      <h1>Users</h1>
      <div className='products-heading'>
        <span>View Users</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Users
