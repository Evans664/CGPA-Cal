function getGradePoint(grade) {
    if (!validateGrade(grade)) {
        return undefined;
    }

    return gradePoints[grade.trim()];
}

function calculateCoursePoints(course) {
    return getGradePoint(course.grade) * course.creditUnit;
}

function calculateTotalCreditUnits(courses) {
    return courses.reduce((total, course) => total + course.creditUnit, 0);
}

function calculateTotalGradePoints(courses) {
    return courses.reduce((total, course) => total + calculateCoursePoints(course), 0);
}

function calculateGPA(courses) {
    if (!validateCourses(courses)) {
        return undefined;
    }

    const totalCreditUnits = calculateTotalCreditUnits(courses);

    if (totalCreditUnits === 0) {
        return undefined;
    }

    return calculateTotalGradePoints(courses) / totalCreditUnits;
}

// TODO: Define the approved multiple-semester data structure before implementing calculateCGPA(...).
