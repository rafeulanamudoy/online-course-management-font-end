const updateCourse = (id, course) => {

    return async (dispatch, geState) => {
        const res = await fetch(`https://online-course-management-server.vercel.app/course/${id}`, {
            method: "PUT",

            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(course)
        })
        const data = await res.json();
        if (data.acknowledged) {
            // dispatch(updateProductForAction(id))
            console.log("update the product")
        }
    }
}

export default updateCourse