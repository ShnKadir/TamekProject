// React
import React, { useState } from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from '../navigations/BottomNavigation'
import LoginNavigation from '../navigations/LoginNavigation'
import { useSelector } from 'react-redux'

export default function Route() {


   const isLogin = useSelector(state => state.auth?.isLogin)

  return (
    <NavigationContainer>
      {
        isLogin ?
          <BottomNavigation />
          :
          <LoginNavigation />
      }
    </NavigationContainer>
  )
}
