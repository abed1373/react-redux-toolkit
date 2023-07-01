import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBarPanel'
import { Provider } from 'react-redux'
import store from '../store/store'

const RootLayout = () => {
  return (
    <Provider store={store} >

    <div>
     <NavBar/>
      <main>
        <Outlet/>
      </main>
    </div>
    </Provider>
  )
}

export default RootLayout
