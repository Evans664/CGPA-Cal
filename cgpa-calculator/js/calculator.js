function getGradePoint(grade) {
    if (!validateGrade(grade)) {
        return undefined;
    }

    return gradePoints[grade.trim().toUpperCase()];
}


function calculateCoursePoints(course) {
    const gradePoint = getGradePoint(course.grade);

    if (gradePoint === undefined) {
        return undefined;
    }

    return gradePoint * course.creditUnit;
}


function calculateTotalCreditUnits(courses) {
    return courses.reduce((total, course) => {
        return total + course.creditUnit;
    }, 0);
}


function calculateTotalGradePoints(courses) {
    return courses.reduce((total, course) => {
        const coursePoints = calculateCoursePoints(course);

        return total + coursePoints;
    }, 0);
}


function calculateGPA(courses) {
    if (!validateCourses(courses)) {
        return undefined;
    }

    const totalCreditUnits = calculateTotalCreditUnits(courses);

    if (totalCreditUnits === 0) {
        return undefined;
    }

    const totalGradePoints = calculateTotalGradePoints(courses);

    return totalGradePoints / totalCreditUnits;
}