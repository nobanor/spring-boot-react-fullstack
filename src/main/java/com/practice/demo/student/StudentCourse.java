package com.practice.demo.student;

import java.time.LocalDate;
import java.util.UUID;

public class StudentCourse {

    private final UUID student_id;

    private final UUID course_id;

    private final String name;

    private final String description;

    private final String daparments;

    private final String teacherName;

    private final LocalDate startDate;

    private final LocalDate endDate;

    private final Integer grade;

    public StudentCourse(UUID student_id, UUID course_id, String name, String description, String daparments, String teacherName, LocalDate startDate, LocalDate endDate, Integer grade) {
        this.student_id = student_id;
        this.course_id = course_id;
        this.name = name;
        this.description = description;
        this.daparments = daparments;
        this.teacherName = teacherName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
    }

    public UUID getStudent_id() {
        return student_id;
    }

    public UUID getCourse_id() {
        return course_id;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Integer getGrade() {
        return grade;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getDaparments() {
        return daparments;
    }

    public String getTeacherName() {
        return teacherName;
    }
}
