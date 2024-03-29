import './Products.css'

import ViewTable from './ViewTable'

const Products = () => {
  return (
    <div className='products-wrapper'>
      <h1>Products</h1>
      <div className='products-heading'>
        <span>View Products</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Products
