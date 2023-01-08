import { ADD_COURSE, FETCH_COURSE, FETCH_COURSE_BY_ID, REMOVE_COURSE } from "../actionTypes/courseType"

const initialState = {
    courses: [],
    course: {},
    readingHistory: []
}


const courseReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_COURSE: {
            return {
                ...state,
                courses: action.payload

            }
        }
        case ADD_COURSE: {

            return {
                ...state, courses: [...state.courses, action.payload]
            }
        }
        case REMOVE_COURSE: {

            return {
                ...state, courses: state.courses.filter(
                    (course) => course._id !== action.payload
                ),
            }
        }
        case FETCH_COURSE_BY_ID: {

            if (state.readingHistory.filter(x => x._id === action.payload._id).length === 0) {
                //  console.log("not duplicate")

                return {
                    ...state, course: action.payload, readingHistory:
                        [...state.readingHistory, action.payload]

                }

            }

            else {
                return {
                    ...state, course: action.payload,
                }
            }


        }
        default: {

            return state
        }
    }
}
export default courseReducer