import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Requests.css'
import moment from 'moment'
import { fetchRequests } from '../../redux/user/user.action'

const ViewTable = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const requests = useSelector((state) => state.user.requests)

  useEffect(() => {
    if (token) {
      dispatch(fetchRequests(token))
    }
  }, [token])

  return (
    <>
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Buyer ID</th>
                <th>Description</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Added On</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{request._id}</td>
                  <td>{request.buyerID ?? '12345'}</td>
                  <td>{request.description}</td>
                  <td>{request.highestBudget}</td>
                  <td>{request.status ?? 'in process'}</td>
                  <td>{moment(request.createdAt).format('ll')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


export default ViewTable
