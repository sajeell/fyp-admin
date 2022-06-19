import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/user/user.action'
import './Users.css'

const ViewTable = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const users = useSelector((state) => state.user.users)

  useEffect(() => {
    if (token) {
      dispatch(fetchUsers(token))
    }
  }, [token])

  useEffect(() => {
    if (users) {
      console.log(users)
    }
  }, [users])

  return (
    <>
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Email</th>
                <th>Type</th>
                <th>Username</th>
                <th>Joined On</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.role ?? 'Buyer'}</td>
                  <td>{user.username}</td>
                  <td>{moment(user.createdAt).format('ll')}</td>
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
  "_id": "61e2a96394cde1e9335b9895",
  "createdAt": "2022-01-15T11:00:51.121Z",
  "password": "$2b$09$SyBGCVsXuno3KdieaCRpe..3aJSMGQ3K6A/z2i.MVzHXjxjSfOQxG",
  "email": "email22@asbc.comaa",
  "username": "testusername",
  "__v": 0,
  "stripeAccountId": "acct_1KgOlPREKqdWJ4hE",
  "address": "200"
}

export default ViewTable
