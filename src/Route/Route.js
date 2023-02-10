// React
import React, { useState } from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from '../navigations/BottomNavigation'
import LoginNavigation from '../navigations/LoginNavigation'

export default function Route() {

  const [isLogin, setIsLogin] = useState(true)

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
