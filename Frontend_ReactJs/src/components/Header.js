import React from "react";
import { Card, CardBody } from "react-bootstrap";

export default function Headers(){
    return(
        <div>
            <Card style={{color:"white",backgroundColor:"#106EBE"}} >
                <CardBody>
                <h1 className="text-center my-2">Welcome to Courses Application</h1>
                </CardBody>
            </Card>
           
        </div>
    );
}