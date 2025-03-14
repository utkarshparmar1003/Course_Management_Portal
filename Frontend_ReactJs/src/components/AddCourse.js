import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";
 
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course";
},[])

const [course,setCourse]=useState({});
  //form handler function
  const handleForm=(e)=>{
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  }

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/addcourses`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Course Added Succeessfully");
      },(error)=>{
        console.log(error);
        console.log("error");
        toast.error("Unable to Add Course");
      }
    )
  }

    return(
        <div>
          <ToastContainer/>
            <h1 className=" text-center my-3"> Fill Course Details</h1>
            <Form onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label for="userId">Course Id</Form.Label>
        <Form.Control type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
          setCourse({...course,id:e.target.value});
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label for="title">Course Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" id="title" onChange={(e)=>{
          setCourse({...course,title:e.target.value});
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label for="description">Course Description </Form.Label>
        <Form.Control  type="textarea" placeholder="Enter Description " id="description" style={{height:150}} onChange={(e)=>{
          setCourse({...course,description:e.target.value});
        }}/>
      </Form.Group>

      
      <Button variant="success" type="submit" className="mx-3">
        Add Course
      </Button>

      <Button variant="danger" type="reset" >
        Clear
      </Button>
    </Form>
        </div> 
    )
}
export default AddCourse;