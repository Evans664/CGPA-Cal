OWNER: Emmanuel
ROLE: Calculation Logic Developer

## Primary File

`js/calculator.js`

You own the calculation engine. Keep this file independent of the DOM so it can be tested independently of the interface.

## Required Functions

### `getGradePoint(grade)`

- Input: `grade`, String.
- Return: Number, or appropriate undefined/null value when the grade is not configured.
- Purpose: read the grade point from the central `gradePoints` object in `data.js`.

### `calculateCoursePoints(course)`

- Input: `course`, Course object with `id`, `courseCode`, `creditUnit`, and `grade`.
- Return: Number.
- Purpose: multiply the configured grade point by `course.creditUnit`.

### `calculateTotalCreditUnits(courses)`

- Input: `courses`, Array of Course objects.
- Return: Number.
- Purpose: add all `creditUnit` values.

### `calculateTotalGradePoints(courses)`

- Input: `courses`, Array of Course objects.
- Return: Number.
- Purpose: add the weighted course points for all courses.

### `calculateGPA(courses)`

- Input: `courses`, Array of Course objects.
- Return: Number, or appropriate undefined/null value when there are no valid courses or total credit units are zero.
- Purpose: divide total grade points by total credit units.

Leave `calculateCGPA(...)` unimplemented until the multiple-semester data structure is approved. Do not invent a semester structure.

## Rules

- Do not hard-code a grading scale in `calculator.js`.
- Read grade points from `data.js`.
- Do not access DOM elements.
- Do not modify the UI.
- Preserve all agreed function names, parameters, and return behavior.
- Do not add assumptions about the grading system.

## Dependencies

The engine depends on Alliance's central `gradePoints` configuration and validation contract. Evans depends on these functions from `app.js`. The approved grade values must exist before valid end-to-end calculations can occur.

## Definition of Done

- Every agreed calculation function exists.
- Parameters and return values follow the contract.
- Calculations are mathematically correct.
- Grade points come from central configuration.
- Zero-credit and no-course situations are handled safely.
- Functions do not depend on DOM elements.
- `calculator.js` can be tested independently of the UI.
