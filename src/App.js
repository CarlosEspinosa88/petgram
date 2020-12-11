/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NoRegistered } from './pages/NoRegistered'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NoRegistered path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
