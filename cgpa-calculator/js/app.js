let courses = [];
let nextCourseId = 1;
let lastResult = null;

function initializeApp() {
    document.getElementById("getStartedButton").addEventListener("click", () => showScreen("calculatorScreen"));
    document.getElementById("courseForm").addEventListener("submit", (event) => {
        event.preventDefault();
        addCourse();
    });
    document.getElementById("calculateButton").addEventListener("click", handleCalculate);
    document.getElementById("resetButton").addEventListener("click", resetCalculator);
    renderCourses();
    showScreen("welcomeScreen");
}

function addCourse() {
    const course = {
        id: nextCourseId,
        courseCode: document.getElementById("courseCodeInput").value.trim(),
        creditUnit: Number(document.getElementById("creditUnitInput").value),
        grade: document.getElementById("gradeInput").value.trim()
    };

    if (!validateCourse(course)) {
        showError("Please enter a valid course code, credit unit, and configured grade.");
        return;
    }

    courses.push(course);
    nextCourseId += 1;
    clearCourseInputs();
    clearError();
    renderCourses();
}

function removeCourse(courseId) {
    courses = courses.filter((course) => course.id !== courseId);
    renderCourses();
}

function renderCourses() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    courses.forEach((course) => {
        const courseCard = document.createElement("article");
        courseCard.className = "course-card";
        courseCard.innerHTML = `<strong>${course.courseCode}</strong><span>${course.creditUnit} credit units</span><span>${course.grade}</span>`;

        const actions = document.createElement("div");
        actions.className = "course-actions";
        const removeButton = document.createElement("button");
        removeButton.className = "secondary-button";
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeCourse(course.id));
        actions.appendChild(removeButton);
        courseCard.appendChild(actions);
        courseList.appendChild(courseCard);
    });

    document.getElementById("totalCourses").textContent = courses.length;
    document.getElementById("totalCreditUnits").textContent = calculateTotalCreditUnits(courses);
}

function handleCalculate() {
    if (!validateCourses(courses)) {
        showError("Add at least one valid course before calculating.");
        return;
    }

    showScreen("loadingScreen");
    const totalCreditUnits = calculateTotalCreditUnits(courses);
    const totalGradePoints = calculateTotalGradePoints(courses);
    const gpa = calculateGPA(courses);

    if (gpa === undefined) {
        showScreen("calculatorScreen");
        showError("The courses cannot be calculated with the current configuration.");
        return;
    }

    lastResult = { gpa, totalCreditUnits, totalGradePoints };
    document.getElementById("resultValue").textContent = gpa.toFixed(2);
    document.getElementById("resultTotalCreditUnits").textContent = totalCreditUnits;
    document.getElementById("resultTotalGradePoints").textContent = totalGradePoints;
    showScreen("resultScreen");
}

function showScreen(screenId) {
    ["welcomeScreen", "calculatorScreen", "loadingScreen", "resultScreen"].forEach((id) => {
        document.getElementById(id).hidden = id !== screenId;
    });
}

function resetCalculator() {
    courses = [];
    nextCourseId = 1;
    lastResult = null;
    clearCourseInputs();
    clearError();
    document.getElementById("resultValue").textContent = "-";
    document.getElementById("resultTotalCreditUnits").textContent = "0";
    document.getElementById("resultTotalGradePoints").textContent = "0";
    document.getElementById("courseBreakdown").innerHTML = "";
    renderCourses();
    showScreen("welcomeScreen");
}

function clearCourseInputs() {
    document.getElementById("courseForm").reset();
}

function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.hidden = false;
}

function clearError() {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";
    errorMessage.hidden = true;
}

document.addEventListener("DOMContentLoaded", initializeApp);
