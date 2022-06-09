import {configureStore} from "@reduxjs/toolkit"
import korzinka from "./reducer/Korzinka"
import {Search} from "./reducer/Search"  

export default configureStore({
    reducer: {
        korzinkaSavat: korzinka,
        izlaApi: Search
    }
})