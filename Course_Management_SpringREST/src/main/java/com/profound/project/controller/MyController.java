package com.profound.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.profound.project.entity.Course;
import com.profound.project.service.CourseService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {

	@Autowired
	private CourseService service;
	
	//get the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.service.getCourses();
		
	}
	
	//get by id
	@GetMapping("courses/{courseId}")
	public Optional<Course> getCourse(@PathVariable String courseId) {
		System.out.println(courseId);
		return this.service.getCourse(Long.parseLong(courseId));
	}
	
	//add course
	@PostMapping("/addcourses")
	public Course addCourse(@RequestBody Course course) {
		System.out.println(course);
		return this.service.addCourse(course);
	}
	
	//update course
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.service.updateCourse(course);
	}
	
	//delete course
	@DeleteMapping("/deleteCourses/{courseId}")
	public void deleteCourse(@PathVariable String courseId) {
		 this.service.deleteCourse(Long.parseLong(courseId));
	}
}
