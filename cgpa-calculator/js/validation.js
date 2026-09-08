function validateCreditUnit(creditUnit) {
    return typeof creditUnit === "number" && Number.isFinite(creditUnit) && creditUnit > 0;
}

function validateGrade(grade) {
    return typeof grade === "string" && Object.prototype.hasOwnProperty.call(gradePoints, grade.trim());
}

function validateCourse(course) {
    return Boolean(course)
        && typeof course.courseCode === "string"
        && course.courseCode.trim().length > 0
        && validateCreditUnit(course.creditUnit)
        && validateGrade(course.grade);
}

function validateCourses(courses) {
    return Array.isArray(courses) && courses.length > 0 && courses.every(validateCourse);
}
