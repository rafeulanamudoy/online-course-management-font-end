import { fetchData, fetchDataById } from "../actions/fetchData";

const singleGetCourse = (id) => {

    return async (dispatch, getState) => {
        const res = await fetch(`https://online-course-management-server.vercel.app/course/${id}`);
        const course = await res.json();

        if (course.data._id) {

            dispatch(fetchDataById(course?.data))
        }

    }
}

export default singleGetCourse