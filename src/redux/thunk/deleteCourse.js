import { removeCourse } from "../actions/fetchData";

const deleteCourse = (id) => {

    return async (dispatch, geState) => {
        const res = await fetch(`https://online-course-management-server.vercel.app/course/${id}`, {
            method: "DELETE",

            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json();
        if (data.acknowledged) {
            // dispatch(removeProduct(id))
            dispatch(removeCourse(id))
        }
    }
}

export default deleteCourse