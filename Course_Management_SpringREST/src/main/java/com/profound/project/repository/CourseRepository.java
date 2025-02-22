package com.profound.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.profound.project.entity.Course;

public interface CourseRepository extends JpaRepository<Course , Long>{

}
