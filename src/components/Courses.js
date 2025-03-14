import axios from 'axios';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import base_url from '../api/bootapi';
import { toast, ToastContainer } from 'react-toastify';

function Course({course}) {

  const  deleteCourse=(id)=>{
    axios.delete(`${base_url}//deleteCourses/${id}`).then(
      (response)=>{
        console.log(response);
        toast.done("Course Deleted Successfully")
      },(error)=>{
        console.log(error);
        toast.error("something went wrong")
      }
      )
    
  }

  return (
    <Container>
      <ToastContainer/>
    <Card style={{ width: '85%' }}className='mx-5 mt-3 text-center'>
      
      <Card.Body >
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
        <Button variant="danger"  className="mx-3" onClick={()=>{
          deleteCourse(course.id);
        }}>Delete</Button>
        <Button variant="warning">Update</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Course;