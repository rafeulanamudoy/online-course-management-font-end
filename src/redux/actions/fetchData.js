import { ADD_COURSE, FETCH_COURSE, FETCH_COURSE_BY_ID, FILTER_BY_FIRST, FILTER_BY_LAST, FILTER_BY_TYPE, REMOVE_COURSE } from "../actionTypes/courseType"

export const fetchData = (courses) => {
    return {

        type: FETCH_COURSE,
        payload: courses
    }


}
export const fetchDataById = (course) => {
    return {
        type: FETCH_COURSE_BY_ID,
        payload: course
    }
}

export const addData = (course) => {

    return {
        type: ADD_COURSE,
        payload: course
    }
}

export const filterByFirst = (filter) => {

    return {

        type: FILTER_BY_FIRST,
        payload: filter
    }
}

export const filterByLast = (filter) => {
    return {
        type: FILTER_BY_LAST,
        payload: filter
    }

}
export const filterByType = (filter) => {
    return {
        type: FILTER_BY_TYPE,
        payload: filter
    }
}

export const removeCourse = (id) => {

    return {
        type: REMOVE_COURSE,
        payload: id
    }
}