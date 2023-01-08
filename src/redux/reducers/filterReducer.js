import { FILTER_BY_FIRST, FILTER_BY_LAST, FILTER_BY_TYPE } from "../actionTypes/courseType"

const initialState = {
    filterByDate: [],
    filterByCourse: []
}

const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case FILTER_BY_FIRST: {

            if (!state.filterByDate.includes(action.payload)) {
                state.filterByDate.pop()
                return {
                    ...state, filterByDate: [...state?.filterByDate, action.payload]
                }
            }
            else {


            }
            return state

        }
        case FILTER_BY_LAST: {
            if (!state.filterByDate.includes(action.payload)) {
                state.filterByDate.pop()
                return {
                    ...state, filterByDate: [...state?.filterByDate, action.payload]
                }
            }

            return state


        }
        case FILTER_BY_TYPE: {
            if (!state.filterByCourse.includes(action.payload)) {
                state.filterByCourse.pop()
                return {
                    ...state, filterByCourse: [...state.filterByCourse, action.payload]
                }
            }
            else {
                return {

                    ...state, filterByCourse: state.filterByCourse.filter(course => course.courseType !== action.payload)
                }

            }


        }
        default: {

            return state
        }
    }
}
export default filterReducer