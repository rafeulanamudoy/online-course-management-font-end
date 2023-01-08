import { fetchData } from "../actions/fetchData";

const getCourse = () => {

    return async (dispatch, getState) => {
        const res = await fetch("https://online-course-management-server.vercel.app/courses");
        const course = await res.json();
        if (course.data.length) {
            dispatch(fetchData(course?.data))
        }

    }
}

export default getCourse