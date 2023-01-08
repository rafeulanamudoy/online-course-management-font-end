import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import updateCourse from '../../redux/thunk/updateCourse';
import "./Updateproduct.css"

const Updateproduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const location = useLocation()
    const { courseName, courseType, coursePrice, instuctorName, courseContent, img, rating, _id } = location?.state?.course

    const onSubmit = (data) => {
        //  console.log(data)
        const courseDetail = {
            courseType: data.courseType,
            courseName: data.courseName,
            img: data.img,
            coursePrice: data.coursePrice,
            instuctorName: data.instuctorName,
            rating: data.rating,
            date: data.date,

            courseContent: {
                totalLectures: data.totalLectures,
                totalLength: data.totalLength,
                requirements: [
                    data.firstRequirement, data.secondRequirement,
                    data.thirdRequirement
                ]

            }




        }
        console.log(courseDetail)

        dispatch(updateCourse(_id, courseDetail))
        alert("course updated")
        reset()
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Course Type</Form.Label>
                <Form.Select required {...register("courseType")} defaultValue={courseType}>
                    <option>Choose...</option>
                    <option>webDevelopment</option>
                    <option>javaScript</option>
                    <option>dataScience</option>
                    <option>Excel</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control required defaultValue={new Date()} {...register("date")} type="text" placeholder="Enter Course Type" />

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>courseName</Form.Label>
                <Form.Control defaultValue={courseName} required {...register("courseName")} type="text" placeholder="Enter courseName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control defaultValue={img} required {...register("img")} type="text" placeholder="Enter image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>coursePrice</Form.Label>
                <Form.Control defaultValue={coursePrice} required {...register("coursePrice")} type="text" placeholder="Enter coursePrice" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>instuctorName</Form.Label>
                <Form.Control defaultValue={instuctorName} required {...register("instuctorName")} type="text" placeholder="Enter instuctorName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>rating</Form.Label>
                <Form.Control defaultValue={rating} required {...register("rating")} type="text" placeholder="Enter rating" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>totalLectures</Form.Label>
                <Form.Control defaultValue={courseContent.totalLectures} required {...register("totalLectures")} type="text" placeholder="Enter totalLectures" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>totalLength</Form.Label>
                <Form.Control defaultValue={courseContent.totalLength} required {...register("totalLength")} type="text" placeholder="Enter totalLength" />
            </Form.Group>
            <div className='req-container'>
                <h1>Your Course Requirements</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>First Requirement</Form.Label>
                    <Form.Control defaultValue={courseContent?.requirements[0]} {...register("firstRequirement")} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Second Requirement</Form.Label>
                    <Form.Control defaultValue={courseContent?.requirements[1]} {...register("secondRequirement")} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >Third Requirement</Form.Label>
                    <Form.Control defaultValue={courseContent?.requirements[2]} {...register("thirdRequirement")} as="textarea" rows={3} />
                </Form.Group>

            </div>



            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default Updateproduct;