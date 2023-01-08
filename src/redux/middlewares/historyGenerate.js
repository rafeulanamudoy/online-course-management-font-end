// import { FETCH_COURSE_BY_ID } from "../actionTypes/courseType";

// const historyGenerate = (store) => (next) => (action) => {

//     //const state = store.getState();


//     if (action.type === FETCH_COURSE_BY_ID) {
//         const newAction = {
//             ...action, payload: { ...action.payload, read: true }
//         }
//         return next(newAction)
//     }
//     return next(action)
// }

// export default historyGenerate