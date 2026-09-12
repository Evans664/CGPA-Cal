let courses = [];
let nextCourseId = 1;
let lastResult = null;

function initializeApp() {
    document.getElementById("getStartedButton").addEventListener("click", () => showScreen("calculatorScreen"));
    document.querySelector(".back-affordance").addEventListener("click", () => showScreen("welcomeScreen"));
    const courseForm = document.getElementById("courseForm");
    courseForm.noValidate = true;
    courseForm.addEventListener("submit", (event) => {
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

        const courseInfo = document.createElement("div");
        courseInfo.className = "course-card__info";

        const courseTitle = document.createElement("p");
        courseTitle.className = "course-card__title";
        courseTitle.textContent = course.courseCode;

        const courseMeta = document.createElement("p");
        courseMeta.className = "course-card__meta";
        courseMeta.textContent = `${course.creditUnit} credit units | Grade ${course.grade}`;

        courseInfo.append(courseTitle, courseMeta);
        courseCard.appendChild(courseInfo);

        const actions = document.createElement("div");
        actions.className = "course-actions";
        const removeButton = document.createElement("button");
        removeButton.className = "icon-button icon-button--danger";
        removeButton.type = "button";
        removeButton.setAttribute("aria-label", `Remove ${course.courseCode}`);
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeCourse(course.id));
        actions.appendChild(removeButton);
        courseCard.appendChild(actions);
        courseList.appendChild(courseCard);
    });

    document.getElementById("totalCourses").textContent = courses.length;
    document.getElementById("summaryTotalCourses").textContent = courses.length;
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
    renderCourseBreakdown();
    showScreen("resultScreen");
}

function renderCourseBreakdown() {
    const courseBreakdown = document.getElementById("courseBreakdown");
    courseBreakdown.innerHTML = "";

    const header = document.createElement("div");
    header.className = "breakdown-row breakdown-row--head";
    ["Course", "Units", "Grade", "Points"].forEach((label) => {
        const cell = document.createElement("span");
        cell.textContent = label;
        header.appendChild(cell);
    });
    courseBreakdown.appendChild(header);

    courses.forEach((course) => {
        const row = document.createElement("div");
        row.className = "breakdown-row";

        const courseCell = document.createElement("span");
        courseCell.className = "breakdown-row__course";
        courseCell.textContent = course.courseCode;
        row.appendChild(courseCell);

        [course.creditUnit, course.grade, calculateCoursePoints(course)].forEach((value) => {
            const cell = document.createElement("span");
            cell.textContent = value;
            row.appendChild(cell);
        });

        courseBreakdown.appendChild(row);
    });
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
