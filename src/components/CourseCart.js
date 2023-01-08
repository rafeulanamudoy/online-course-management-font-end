import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import deleteCourse from '../redux/thunk/deleteCourse';

import singleGetCourse from '../redux/thunk/singleGetCourse';
import "./CourseCart.css"
const CourseCart = ({ course }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { pathname } = useLocation();
    console.log(pathname)

    const handleCourseDetails = () => {

        dispatch(singleGetCourse(course._id))
        navigate("/courseDetails")

    }


    return (




        <div className='grid-sub-container'>
            <img className='course-image' src={course.img} alt="" />

            <p>Course Name:<span>{course.courseName}</span></p>
            <p>Instructor Name:<span>{course.instuctorName}</span></p>
            <p>Price:<span>{course.coursePrice}</span></p>
            <p>Rating:<span>{course.rating}</span></p>



            <button onClick={handleCourseDetails} className='course-button'>Course Details</button>
            {

                pathname.includes("/home") ?
                    <div className='course-admin-btn'>

                        <button onClick={() => navigate("/updateCourse", { state: { course } })} >Update</button>
                        <button onClick={() => dispatch(deleteCourse(course._id))}>Delete</button>
                    </div> : <></>
            }



        </div>






    );
};

export default CourseCart;