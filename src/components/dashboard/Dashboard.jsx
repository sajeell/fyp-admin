import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchRequests, fetchUserDetail, fetchUsers } from '../../redux/user/user.action'
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const userDetail = useSelector((state) => state.user.userDetail)

  const products = useSelector((state) => state.user.products)
  const users = useSelector((state) => state.user.users)
  const requests = useSelector((state) => state.user.requests)

  const [commission, setCommission] = useState(0)

  const dataAPIFetchUsers = (token, userId) => {
    dispatch(fetchUserDetail(token, userId))
  }

  useEffect(() => {
    if (token) {
      dispatch(fetchProducts(token))
      dispatch(fetchUsers(token))
      dispatch(fetchRequests(token))
    }
  }, [token])

  useEffect(() => {
    if (userDetail) {
      if (userDetail.funds) {
        setCommission(userDetail.funds)
      }
    }
  }, [userDetail])

  return (
    <div className='dashboard-wrapper'>
      <h2>Intermediary Dashboard</h2>
      <span className='report'>Print Report</span>
      <div className='dashboard-small-boxes-wrapper'>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Total Users</div>
          </div>
          <div className='dashboard-small-box-row-2'> {users ? users.length : 0}</div>
        </div>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Total Products</div>
          </div>
          <div className='dashboard-small-box-row-2'> {products ? products.length : 0}</div>
        </div>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Total Requests</div>
          </div>
          <div className='dashboard-small-box-row-2'> {requests ? requests.length : 0}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
