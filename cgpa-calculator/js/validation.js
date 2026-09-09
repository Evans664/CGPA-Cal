function validateCreditUnit(creditUnit) {
    return typeof creditUnit === "number" && Number.isFinite(creditUnit) && creditUnit > 0;
}

function validateGrade(grade) {
    return typeof grade === "string"
        && typeof gradePoints === "object"
        && gradePoints !== null
        && Object.prototype.hasOwnProperty.call(gradePoints, grade.trim().toUpperCase());
}

function validateCourse(course) {
    if (!course || typeof course !== "object") {
        return false;
    }

    if (typeof course.courseCode !== "string" || course.courseCode.trim().length === 0) {
        return false;
    }

    if (!validateCreditUnit(course.creditUnit)) {
        return false;
    }

    if (!validateGrade(course.grade)) {
        return false;
    }

    try {
        course.grade = course.grade.trim().toUpperCase();
    } catch (error) {
        console.error(`Error sanitizing grade for course ${course.id}:`, error);
    }

    return true;
}

function validateCourses(courses) {
    if (!Array.isArray(courses) || courses.length === 0) {
        return false;
    }

    for (let i = 0; i < courses.length; i++) {
        if (!validateCourse(courses[i])) {
            return false;
        }
    }

    return true;
}
