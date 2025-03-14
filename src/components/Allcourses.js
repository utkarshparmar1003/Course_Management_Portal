import { useEffect, useState } from "react"
import Courses from "./Courses"
import axios from "axios";
import base_url from "../api/bootapi";
import {ToastContainer,toast} from "react-toastify";


 const AllCourses=()=>{
    
    const[courses,setCourses]=useState([])
    useEffect(()=>{
            document.title="All Courses";
    }, [])

    //function hook call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{

                //success
               // console.log(response);
                console.log(response.data);
                toast.success("Courses has been Loaded",{
                    position:"top-right"
                });
                setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went wrong",{
                    position:"top-right"
                }); 
                
              
                
                
                
            }
        );
    }

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);

    return(
        
        <div className="text-center ">
        <ToastContainer/>
                    <h1 className="p-4">All Courses</h1>
            <p>List of Courses</p>

            {
                courses.length>0
                ?  courses.map((item)=>
                    <Courses key={item.id} course={item}/>
                ):"No Courses"

                
            }
        </div>
    )
 }
 export default AllCourses;