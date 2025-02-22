 package com.profound.project.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.profound.project.entity.Course;
import com.profound.project.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;
/*	List<Course> list;
	
	public CourseServiceImpl() {
		list=new ArrayList<>();
		list.add(new Course(1, "Java Core Course", "this course is core for java development"));
		list.add(new Course(2, "Spring Boot Course", "creating rest spring boot project"));
	}
	*/
	@Override
	public List<Course> getCourses() {
		
	return courseRepository.findAll();
	}

	@Override
	public Optional<Course> getCourse(long courseId) {
		
	/*	Course c=null;
		for(Course course:list) {
			if(course.getId()==courseId) {
				c=course;
				break;
			}
		}*/
		return courseRepository.findById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		//list.add(course);
		courseRepository.save(course);
		return  course;
	}

	@Override
	public Course updateCourse(Course course) {
	/*list.forEach(e -> {
		if(e.getId()==course.getId()) {
			e.setTitle(course.getTitle());
			e.setDescription(course.getDescription());
		}
	});*/
		
		courseRepository.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		/*
		for(Course course:list) {
			if(course.getId()==courseId) {
				list.remove(course);
				break;
			}
		}*/
		courseRepository.deleteById(courseId);
		
		
	}

}
