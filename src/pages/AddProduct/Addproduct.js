import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addCourse from '../../redux/thunk/addCourse';
import "./Addproduct.css"
const Addproduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
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
        dispatch(addCourse(courseDetail))
        alert("course Added")
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Course Type</Form.Label>
                <Form.Select required {...register("courseType")} defaultValue="Choose...">
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
                <Form.Control required {...register("courseName")} type="text" placeholder="Enter courseName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control required {...register("img")} type="text" placeholder="Enter image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>coursePrice</Form.Label>
                <Form.Control required {...register("coursePrice")} type="text" placeholder="Enter coursePrice" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>instuctorName</Form.Label>
                <Form.Control required {...register("instuctorName")} type="text" placeholder="Enter instuctorName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>rating</Form.Label>
                <Form.Control required {...register("rating")} type="text" placeholder="Enter rating" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>totalLectures</Form.Label>
                <Form.Control required {...register("totalLectures")} type="text" placeholder="Enter totalLectures" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>totalLength</Form.Label>
                <Form.Control required {...register("totalLength")} type="text" placeholder="Enter totalLength" />
            </Form.Group>
            <div className='req-container'>
                <h1>Your Course Requirements</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>First Requirement</Form.Label>
                    <Form.Control {...register("firstRequirement")} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Second Requirement</Form.Label>
                    <Form.Control {...register("secondRequirement")} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Third Requirement</Form.Label>
                    <Form.Control {...register("thirdRequirement")} as="textarea" rows={3} />
                </Form.Group>

            </div>



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Addproduct;