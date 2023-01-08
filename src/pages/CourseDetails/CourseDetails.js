import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const CourseDetails = () => {

    // const state = useSelector(state => state)
    //  console.log(state)
    const { courseName, coursePrice, img, rating, instuctorName, courseContent, _id } = useSelector(state => state.courses.course)

    return (
        <Card style={{ width: '18rem', margin: "0 auto" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                <p>course Price:{coursePrice}$</p>
                <p>Instructor Name:{instuctorName}</p>
                <p>Course Rating:{rating}</p>
                <Card.Text>

                </Card.Text>
                <Card.Header> This course Includes:</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{courseContent?.totalLectures} total Lectures</ListGroup.Item>
                    <ListGroup.Item>{courseContent?.totalLength
                    } dimanded video</ListGroup.Item>
                    <ListGroup.Item>Full liftetime access</ListGroup.Item>
                </ListGroup>
                <h5>Course Requirements</h5>
                <ol>
                    {courseContent?.requirements?.map(req =>

                        <li
                            key={_id}
                        >{req}</li>)}
                </ol>

            </Card.Body>
        </Card>
    );
};

export default CourseDetails;