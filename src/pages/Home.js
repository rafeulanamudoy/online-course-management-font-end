import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CourseCart from '../components/CourseCart';
import { filterByFirst, filterByLast, filterByType } from '../redux/actions/fetchData';
import getCourse from '../redux/thunk/getCourse';
import "./Home.css"
const Home = () => {
    const state = useSelector(state => state)
    const courses = useSelector((state) => state.courses.courses)
    const filterByDate = useSelector(state => state.filter.filterByDate)
    const filterByCourse = useSelector(state => state.filter.filterByCourse)
    console.log(filterByDate, filterByCourse)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCourse())
    }, [dispatch])

    let content;

    if (courses.length) {

        content =

            courses.map(course => <CourseCart
                key={course._id}
                course={course}
            >

            </CourseCart>)

    }
    // if (courses.length && filterByDate.includes("firtstUpload")) {

    //     content = courses.sort((a, b) => {
    //         var c = new Date(a.date);
    //         var d = new Date(b.date);
    //         return c - d;
    //     }).map(course => <CourseCart
    //         key={course._id}
    //         course={course}
    //     >

    //     </CourseCart>)

    // }
    // if (courses.length && filterByDate.includes("lastUpload")) {

    //     content = courses.sort((a, b) => {
    //         var c = new Date(a.date);
    //         var d = new Date(b.date);
    //         return d - c;
    //     }).map(course => <CourseCart
    //         key={course._id}
    //         course={course}
    //     >

    //     </CourseCart>)

    // }
    if (courses.length && (filterByDate.includes("firtstUpload") || filterByDate.includes("lastUpload"))) {
        content = courses.sort((a, b) => {
            const c = new Date(a.date);
            const d = new Date(b.date);
            if (filterByDate.includes("firtstUpload")) {

                return c - d
            }
            else {
                return d - c
            }
        }).map(course => <CourseCart
            key={course._id}
            course={course}
        >

        </CourseCart>)

    }

    if (courses.length && filterByCourse.length) {
        content = courses
            .filter(course => course.courseType === filterByCourse[0])
            .map(course => <CourseCart
                key={course._id}
                course={course}
            >

            </CourseCart>)
    }

    if (courses.length && (filterByDate.includes("firtstUpload") || filterByDate.includes("lastUpload")) && filterByCourse.length) {

        content = courses.filter(course => {
            if (filterByCourse.length) {
                return course.courseType === filterByCourse[0]
            }
            return course
        }).sort((a, b) => {
            const c = new Date(a.date);
            const d = new Date(b.date);
            if (filterByDate.includes("firtstUpload")) {

                return c - d
            }
            else {
                return d - c
            }
        }).map(course => <CourseCart
            key={course._id}
            course={course}
        >

        </CourseCart>)

    }





    return (
        <div>
            <h1>Available Courses</h1>
            <div className='filter-container'>
                <div className='course-upload-filter'>

                    <button onClick={() => dispatch(filterByFirst("firtstUpload"))}>First Upload</button>
                    <button onClick={() => dispatch(filterByLast("lastUpload"))}> Last Upload</button>
                </div>
                <div className='course-tags-filter'>

                    <button onClick={() => dispatch(filterByType("webDevelopment"))}>Web Development</button>
                    <button onClick={() => dispatch(filterByType("javaScript"))} >javascript</button>
                    <button onClick={() => dispatch(filterByType("dataScience"))}>Data Science</button>
                </div>
            </div>

            <div className='grid-container'>
                {content}
            </div>

        </div>







    );
};

export default Home;