// Native Base
import { NativeBaseProvider } from "native-base"

//Component
import Route from "./src/Route/Route"

export default function App() {

  return (

    <NativeBaseProvider >
      <Route />
    </NativeBaseProvider>
  )
}
