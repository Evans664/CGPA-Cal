# CGPA Calculator Project

## Project Goal

CGPA Calculator is a client-side calculator for the Evans Builds WhatsApp community. It will let users enter course information and calculate GPA from the approved grading configuration.

## Target Users

Students and members of the Evans Builds community who need a simple, fast, mobile-friendly GPA calculation tool.

## MVP

1. Welcome screen
2. Course input
3. Credit units
4. Grade selection
5. Add and remove courses
6. Validation
7. GPA calculation
8. Result display
9. Reset
10. Responsive design

The grading scale is intentionally unresolved. It must be approved by Evans before values are added to `js/data.js`.

## Optional Features

Optional features may be considered after the MVP and only after Evans approves them. No optional feature is part of the current setup.

## Intentionally Not Building

- Backend server
- Database
- API
- Authentication
- Multiple-semester CGPA calculation until its data structure is approved
- Frameworks or external JavaScript libraries
- Unapproved grading assumptions

## User Flow

1. User opens the welcome screen.
2. User selects Get Started.
3. User enters course code, credit unit, and grade.
4. `app.js` creates a Course object and sends it to validation.
5. A valid Course object is added to the single `courses` array.
6. The course list and summary are rendered.
7. User selects Calculate.
8. `app.js` validates the complete `courses` array.
9. Calculator functions return total credit units, total grade points, and GPA.
10. `app.js` displays the result screen.
11. User can reset and begin again.

## Application Screens

- `welcomeScreen`: project introduction and Get Started action.
- `calculatorScreen`: course form, course list, summary, errors, and Calculate action.
- `loadingScreen`: temporary calculation state.
- `resultScreen`: GPA, totals, breakdown area, and reset action.

## Architecture and Data Flow

The browser loads scripts in this order:

1. `js/data.js` defines `gradePoints`.
2. `js/validation.js` defines validation functions using `gradePoints`.
3. `js/calculator.js` defines calculation functions using `gradePoints` and validation.
4. `js/app.js` owns state, events, screen changes, rendering, and integration.

Data flow:

```text
User
  -> index.html form
  -> app.js
  -> courses array
  -> validation.js
  -> calculator.js
  -> result object
  -> app.js
  -> result UI in index.html
```

## Global Data Contract

A Course object has exactly these agreed properties:

```javascript
{
    id: 1,
    courseCode: "MTH101",
    creditUnit: 3,
    grade: "A"
}
```

- `id`: Number, unique during the current calculation session.
- `courseCode`: String.
- `creditUnit`: Number.
- `grade`: String.

Application state has one source of truth:

```javascript
let courses = [];
```

The result uses these property names:

```javascript
{
    gpa: Number,
    totalCreditUnits: Number,
    totalGradePoints: Number
}
```

## Function Contracts

`calculator.js` exposes `getGradePoint(grade)`, `calculateCoursePoints(course)`, `calculateTotalCreditUnits(courses)`, `calculateTotalGradePoints(courses)`, and `calculateGPA(courses)`. Each receives the parameter named in its signature and returns a Number unless an invalid or unresolved configuration requires an appropriate undefined/null value.

`validation.js` exposes `validateCourse(course)`, `validateCreditUnit(creditUnit)`, `validateGrade(grade)`, and `validateCourses(courses)`. Each returns Boolean and does not manipulate the UI.

`app.js` exposes `initializeApp()`, `addCourse()`, `removeCourse(courseId)`, `renderCourses()`, `handleCalculate()`, `showScreen(screenId)`, and `resetCalculator()`. These functions return nothing and coordinate the UI and state.

## Team and Ownership

- Evans: `js/app.js`, architecture, integration, review, pull requests, final technical decisions.
- Emmanuel: `js/calculator.js`, calculation engine.
- Alliance: `js/validation.js` and `js/data.js`, validation and static configuration.
- Hot_ice: `index.html`, `css/style.css`, and `assets/`, frontend.

## Development Rules

- Use HTML5, CSS3, and vanilla JavaScript only.
- Preserve agreed property names, function names, variable names, and DOM IDs.
- Keep `courses` as the only current course list.
- Keep grade values in `js/data.js` only.
- Do not add backend, frameworks, APIs, packages, or unapproved features.
- Communicate with Evans before changing another developer's primary file or any contract.
