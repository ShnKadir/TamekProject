//Redux
import { clearTestSlice } from "../../redux/slice/testSlice"
import store from "../../redux/store"

export default function clearRedux() {

    store.dispatch(clearTestSlice())
}