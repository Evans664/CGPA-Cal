# Testing Guide

Testing must use the approved grading configuration once it exists. Do not add expected numerical answers while the grading system is unresolved.

## Course Management

- Add one valid course and confirm it appears in `courseList`.
- Add several valid courses and confirm every course is shown.
- Remove a course by its ID and confirm the matching course disappears.
- Add courses with multiple credit-unit values.
- Add courses with multiple configured grades.
- Confirm `totalCourses` and `totalCreditUnits` reflect the `courses` array.

## Validation

- Submit an empty course.
- Submit an empty credit unit.
- Submit an empty grade.
- Submit a missing, non-numeric, or non-positive credit unit.
- Submit a grade absent from `gradePoints`.
- Attempt to calculate with no courses.
- Attempt to calculate with a list containing an invalid course.
- Confirm invalid cases return or produce the agreed Boolean/error behavior without direct DOM work in validation functions.

## Calculation

- Calculate one valid course.
- Calculate multiple valid courses.
- Calculate courses with different credit units.
- Calculate courses with different configured grades.
- Confirm a decimal GPA is represented safely.
- Calculate a large number of courses.
- Confirm zero total credit units cannot produce a GPA.
- Confirm grade points are read from `data.js`, not a duplicate table.

Do not hard-code expected numeric answers until the official grading system is confirmed.

## UI

- Check mobile layout.
- Check tablet layout.
- Check desktop layout.
- Check loading state.
- Check error state.
- Check result state.
- Check long course codes.
- Check many courses and scrolling behavior.
- Check keyboard focus and form submission.
- Check reset clears courses, inputs, results, and the starting screen.

## Integration Checks

- Confirm script order is `data.js`, `validation.js`, `calculator.js`, then `app.js`.
- Confirm all required DOM IDs exist.
- Confirm no backend, framework, package, or external API is required.
