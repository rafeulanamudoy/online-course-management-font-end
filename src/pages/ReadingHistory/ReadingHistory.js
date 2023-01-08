import React from 'react';
import { useSelector } from 'react-redux';
import CourseCart from '../../components/CourseCart';
import "./ReadingHistory.css"
const ReadingHistory = () => {
    const readingHistory = useSelector(state => state?.courses?.readingHistory)
    return (
        <div className='grid-container'>
            {

                readingHistory.map(course => <CourseCart key={course._id}
                    course={course}></CourseCart>)}

        </div>
    );
};

export default ReadingHistory;