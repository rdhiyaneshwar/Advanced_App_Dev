package com.zor.zinquire.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zor.zinquire.model.Course;

public interface CourseRepo extends JpaRepository<Course,Long> {

}
