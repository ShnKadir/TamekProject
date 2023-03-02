// Native Base
import { NativeBaseProvider } from "native-base"

// Redux
import { Provider } from "react-redux"
import store from "./src/redux/store"

//Component
import Route from "./src/Route/Route"

export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider >
        <Route />
      </NativeBaseProvider>
    </Provider>
  )
}
