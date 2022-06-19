import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setCurrentUser = (user) => ({
  type: ActionsType.SET_CURRENT_USER,
  payload: user,
})

export const setUserDetail = (user) => ({
  type: ActionsType.SET_USER_DETAIL,
  payload: user,
})

export const setUsers = (user) => ({
  type: ActionsType.SET_USERS,
  payload: user,
})

export const setProducts = (user) => ({
  type: ActionsType.SET_PRODUCTS,
  payload: user,
})

export const setRequests = (user) => ({
  type: ActionsType.SET_REQEUSTS,
  payload: user,
})

export const setAuthToken = (token) => ({
  type: ActionsType.SET_TOKEN,
  payload: token,
})

export const createAccount = (data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
    }
    axios
      .post(`${Url}/auth/register`, data, { headers: headers })
      .then((resp) => {
        let response = resp.data
        console.log('createAccount: ', response)
        dispatch(setCurrentUser(response.user))
        dispatch(setAuthToken(response.access_token))
        alert('Account created successfully')
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}

export const sellerLogin = (data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
    }
    axios
      .post(`${Url}auth/login`, data, { headers: headers })
      .then(async (resp) => {
        let response = resp.data
        if (response.data && response.data.role === 'Admin') {
          dispatch(setCurrentUser(response.data))
          dispatch(setAuthToken(response.access_token))
          toast.success('Success', {
            theme: 'colored',
            style: {
              borderRadius: 5,
            },
            delay: 5000,
          })

          window.location.href = '/dashboard'
        } else {
          toast.error('Admin not registered on this account', {
            theme: 'colored',
            style: {
              borderRadius: 5,
            },
          })
        }
      })
      .catch((error) => {
        const err = error
        toast.error(err.message, {
          theme: 'colored',
          style: {
            borderRadius: 5,
          },
        })
      })
  }
}

export const fetchUserDetail = (token, userId) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios
      .get(`${Url}user/${userId}`, { headers: headers })
      .then(async (resp) => {
        dispatch(setUserDetail(resp.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const fetchUsers = (token) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios
      .get(`${Url}user`, { headers: headers })
      .then(async (resp) => {
        dispatch(setUsers(resp.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const fetchProducts = (token) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios
      .get(`${Url}product`, { headers: headers })
      .then(async (resp) => {
        dispatch(setProducts(resp.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const fetchRequests = (token) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios
      .get(`${Url}bargain`, { headers: headers })
      .then(async (resp) => {
        dispatch(setRequests(resp.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}



export const logout = () => {
  return (dispatch) => {
    dispatch(setAuthToken(null))
    localStorage.clear()
  }
}
