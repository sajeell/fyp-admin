import { Route, Routes } from 'react-router-dom'
import './App.css'

import Dashboard from './components/dashboard/Dashboard'
import Drawer from './components/dashboard/drawer/Drawer'
import Login from './components/login/Login'
import Orders from './components/orders/Orders'
import Products from './components/products/Products'
import Requests from './components/requests/Requests'
import Users from './components/users/Users'

function App() {
  return (
    <div className='app-wrapper'>
      <Routes>
        <Route
          exact
          path='/dashboard'
          element={
            <>
              <main className='drawer'>
                <Drawer dashboard={true} />
              </main>
              <main className='right-content'>
                <Dashboard />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/products'
          element={
            <>
              <main className='drawer'>
                <Drawer products={true} />
              </main>
              <main className='right-content'>
                <Products />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/users'
          element={
            <>
              <main className='drawer'>
                <Drawer users={true} />
              </main>
              <main className='right-content'>
                <Users />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/requests'
          element={
            <>
              <main className='drawer'>
                <Drawer requests={true} />
              </main>
              <main className='right-content'>
                <Requests />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
