import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Course from './components/Courses';
import AllCourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'react-bootstrap';
import Headers from './components/Header';
import Menus from './components/Menus';
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Headers/ >
      
        <Router>
          <Container className='my-3'>
            <Row>
              <Col md={4}>
                <Menus/>
              </Col>
              <Col md={8}>
              <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/add-course' Component={AddCourse}/>
                <Route path='/view-courses' Component={AllCourses}/>
                </Routes>
              </Col>
            </Row>
          </Container>
          </Router>
    </div>
  ); 
}

export default App;
