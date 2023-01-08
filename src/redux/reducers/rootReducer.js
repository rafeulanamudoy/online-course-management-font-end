import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

import filterReducer from "./filterReducer";


const rootReducer = combineReducers({

    courses: courseReducer,
    filter: filterReducer
})
export default rootReducer;