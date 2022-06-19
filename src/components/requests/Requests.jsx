import './Requests.css'

import ViewTable from './ViewTable'

const Requests = () => {
  return (
    <div className='products-wrapper'>
      <h1>Requests</h1>
      <div className='products-heading'>
        <span>View Requests</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Requests
