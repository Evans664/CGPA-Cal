OWNER: Alliance
ROLE: Validation + Data Configuration

## Primary Files

- `js/validation.js`
- `js/data.js`

You own validation and static calculator configuration. Validation returns Boolean values and must not manipulate the UI.

## Required Functions

### `validateCourse(course)`

- Input: Course object.
- Return: Boolean.
- Verify course code exists, credit unit is valid, grade exists, and grade is recognized by `gradePoints`.

### `validateCreditUnit(creditUnit)`

- Input: Number.
- Return: Boolean.
- Reject missing, non-numeric, non-finite, and non-positive values. Do not add unusual university-specific restrictions without approval.

### `validateGrade(grade)`

- Input: String.
- Return: Boolean.
- Check whether the supplied grade exists in the approved `gradePoints` configuration.

### `validateCourses(courses)`

- Input: Array of Course objects.
- Return: Boolean.
- Reject an empty array and reject any array containing an invalid Course object.

## Grade Configuration

`js/data.js` is the single source of truth:

```javascript
// TODO: Add the approved grading scale here.
const gradePoints = {};
```

Do not add values until Evans provides the official grading rules. Do not assume A equals 4, A equals 5, or any other scale.

## Course Contract

```javascript
{
    id: Number,
    courseCode: String,
    creditUnit: Number,
    grade: String
}
```

## Dependencies

Hot_ice supplies the input IDs and form shape. Evans calls these validation functions before adding or calculating. Emmanuel reads the central `gradePoints` object. The approved grading decision is required before valid grades can be accepted end to end.

## Do Not Do

- Do not manipulate the DOM.
- Do not put validation rules in `app.js`.
- Do not hard-code grade tables in `validation.js` or `calculator.js`.
- Do not introduce university-specific restrictions without approval.
- Do not rename the agreed functions or properties.
- Do not add frameworks, backend code, APIs, or unapproved features.

## Definition of Done

- All validation functions exist.
- Invalid input is rejected.
- Valid input is accepted.
- Grade validation uses central configuration.
- Credit units are validated.
- Empty course lists are rejected for calculation.
- No university grading assumptions are introduced.
- Functions return the agreed Boolean values.
- Validation does not directly manipulate the UI.
