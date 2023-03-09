//React
import React from 'react'

//React Native
import { Platform, StatusBar } from "react-native"

// Native Base
import { NativeBaseProvider, extendTheme } from "native-base"

// Redux
import { Provider } from "react-redux"
import store from "./src/redux/store"

//Component
import Route from "./src/Route/Route"
import Theme from "./src/theme/Theme"

export default function App() {

  const theme = extendTheme(Theme())

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        {Platform.OS === "ios" && (
          <StatusBar
            translucent={false}
            barStyle={"dark-content"}
          />
        )}
        <Route />
      </NativeBaseProvider>
    </Provider>
  )
}
