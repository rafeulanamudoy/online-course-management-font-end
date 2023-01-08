import { addData } from "../actions/fetchData";

const addCourse = (course) => {

    return async (dispatch, getState) => {
        const res = await fetch("https://online-course-management-server.vercel.app/course", {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addData({
                ...course,
                _id: data.insertedId
            }))

        }
    }
}

export default addCourse