OWNER: Evans
ROLE: Project Lead + Application Logic + Integration

## Primary File

`js/app.js`

You own application architecture, integration, code review, pull requests, and final technical decisions.

## Responsibilities

- Own the single `let courses = []` application state.
- Keep course IDs unique during the current session.
- Cache or access the agreed DOM elements.
- Connect event listeners.
- Implement `initializeApp()` with no parameters and no return value.
- Implement `addCourse()` with no parameters. It reads `courseCodeInput`, `creditUnitInput`, and `gradeInput`, creates the Course object, calls `validateCourse(course)`, adds valid courses, renders, and resets inputs.
- Implement `removeCourse(courseId)` with a Number parameter and no return value. Remove by matching `course.id`, not array position.
- Implement `renderCourses()` with no parameters and no return value. Make the UI reflect `courses`.
- Implement `handleCalculate()` with no parameters and no return value. Validate before calling `calculateTotalCreditUnits(courses)`, `calculateTotalGradePoints(courses)`, and `calculateGPA(courses)`.
- Implement `showScreen(screenId)` with a String parameter and no return value. Show one of `welcomeScreen`, `calculatorScreen`, `loadingScreen`, or `resultScreen`.
- Implement `resetCalculator()` with no parameters and no return value. Clear state, inputs, results, and return to the starting state.
- Integrate Alliance's Boolean validation functions and Emmanuel's numerical functions.
- Display the result object with `gpa`, `totalCreditUnits`, and `totalGradePoints`.

## Data and Communication Rules

`app.js` communicates with the other files through the browser's shared classic-script scope. `data.js` provides `gradePoints`; `validation.js` provides Boolean functions; `calculator.js` provides calculation functions; the HTML provides the DOM IDs.

The Course object is:

```javascript
{
    id: Number,
    courseCode: String,
    creditUnit: Number,
    grade: String
}
```

Do not create another course array. Do not duplicate Emmanuel's formulas or Alliance's validation rules.

## Dependencies

You depend on Hot_ice's DOM contract, Alliance's `validation.js` and approved `data.js` configuration, and Emmanuel's calculator function contracts. Integration can begin with starter functions, but final calculation behavior depends on the approved grading values.

## Do Not Do

- Do not duplicate mathematical logic.
- Do not duplicate validation logic.
- Do not rename contracts without discussion.
- Do not change another developer's primary file without communicating.
- Do not add backend, framework, API, database, authentication, or unapproved features.

## Definition of Done

- All required UI events are connected.
- Users can add and remove courses by ID.
- `courses` remains the source of truth.
- Validation is called before calculation.
- Calculator functions are called correctly.
- Results reach the UI.
- Screen transitions work.
- Reset works.
- No calculation formulas are unnecessarily duplicated in `app.js`.
