import { useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'
import { fetchProducts } from '../../redux/user/user.action'
import moment from 'moment'

const ViewTable = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const products = useSelector((state) => state.user.products)

  useEffect(() => {
    if (token) {
      dispatch(fetchProducts(token))
    }
  }, [token])

  useEffect(() => {
    if (products) {
      console.log(products)
    }
  }, [products])

  return (
    <>
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Seller ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Featured</th>
                <th>Type</th>
                <th>Stock</th>
                <th>Added On</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product._id}</td>
                  <td>{product.sellerID}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.featured === false ? 'False' : 'True'}</td>
                  <td>{product.category}</td>
                  <td>{product.stock < 0 ? 0 : product.stock}</td>
                  <td>{moment(product.createdAt).format('ll')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

const object = {
  "images": [],
  "_id": "61e530fc7ac3823aa0464dee",
  "createdAt": "2022-01-16T06:28:08.850Z",
  "sellerID": "623c90c964cfe7eaaa4bdebc",
  "featured": false,
  "category": "Antique",
  "description": "Guitar",
  "title": "Antique Brown Gramophone",
  "__v": 0,
  "stock": -2
}

export default ViewTable
