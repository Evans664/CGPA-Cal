OWNER: Hot_ice
ROLE: Frontend Developer

## Primary Files

- `index.html`
- `css/style.css`
- `assets/`

You own the visual side of the application. Build the interface around the agreed DOM contract so `js/app.js` can control it without changing IDs.

## Approved Design Reference

Use the image in `assets/images/` as the approved visual direction. Reproduce its layout and hierarchy as closely as practical; do not replace it with a different visual concept.

The reference presents four narrow, app-like screens with a consistent Evans Builds identity:

- A compact header with a blue graduation-cap mark, the `CGPA Calculator` title, and `Evans Builds` at the right.
- A restrained footer with `Built with love by Evans Builds` and a version label.
- Rounded cards, thin pale-blue borders, generous internal spacing, and a light cool page background for the course and result screens.
- Dark navy full-height panels for the welcome and loading screens.
- Strong navy headings, blue secondary text and controls, bright green primary actions, and small status accents.
- Clear typography hierarchy: compact brand text, prominent screen headings, readable supporting copy, large result numerals, and compact metadata labels.

### Welcome Screen

Reproduce the dark navy home panel with the header at the top, a centered calculator/graduation visual, the large two-line heading `Calculate Your CGPA with Ease`, supporting copy, and a wide green `Get Started` button with a forward arrow treatment. Keep the three small feature indicators near the lower area and the footer anchored at the bottom. The visual should feel centered and spacious rather than like a dense form.

### Course Input Screen

Use the light panel treatment shown in the reference. Place a back affordance above the heading, then `Enter Your Courses` and its supporting description. Keep the three course inputs in one compact row when there is enough width, with the course code/name field wider than credit units and grade. Place the blue `+ Add Course` action below the inputs.

Render `Your Courses` with the course count aligned to the right. Each course card should have a pale border, course code/name, units and grade metadata, and a clear trash/remove control. Follow the cards with a lightly tinted summary panel containing the total course and credit-unit values, then a full-width blue `Calculate CGPA` action.

### Loading Screen

Keep the dark navy panel and shared header/footer. Center a blue circular progress treatment around a graduation-cap mark, followed by `Calculating Your CGPA...` and supporting text. Include the bordered progress checklist shown in the reference, with clear completed, active, and pending states. This is visual state work only; do not add calculation behavior here.

### Result Screen

Use the light panel treatment and shared header/footer. Begin with the completion status banner, then a prominent green result card with `Your CGPA`, the large value from `resultValue`, and a positive-status pill. Place the total credit units and total grade points in two equal summary cards.

Present `Course Breakdown` as a bordered table-like card with columns for course, units, grade, and points. Keep long course labels readable without breaking the card. Add the pale informational callout below the breakdown, followed by the green `Calculate Again` action connected to `resetButton` and the outlined secondary `Save Result` visual only if it does not require a new behavior or DOM contract.

## Visual Implementation Rules

- Use a restrained palette based on the reference: deep navy surfaces, white content panels, royal/bright blue controls and accents, pale blue borders and tints, and green success actions/statuses.
- Use one coherent sans-serif type family with weight changes for hierarchy. Do not use oversized display text except for the welcome heading and the result number.
- Keep corner radii consistently rounded but controlled. Cards and inputs need visible, light borders; avoid heavy shadows and decorative gradients that change the reference's clean app-like appearance.
- Use consistent horizontal padding inside the narrow panel and consistent vertical gaps between heading, copy, controls, cards, and actions.
- Buttons should be full-width where shown, have clear label hierarchy, and include the reference's familiar plus, arrow, trash, refresh, or download icon treatments where the existing markup permits. Do not add a library just for icons.
- Inputs should have white backgrounds, pale blue borders, readable placeholder/label text, and a visible focus state. The grade control should visually read as a compact select/dropdown.
- Error messaging must fit the same visual system and remain accessible; it must not shift or obscure the course list.
- Preserve the visual distinction between dark welcome/loading states and light calculator/result states.

## Responsive Behavior From the Reference

- Treat the design as a mobile-first single-panel experience. Keep content within a stable narrow readable column on phones and do not allow controls or cards to overflow horizontally.
- On small screens, stack the course inputs and keep action buttons full width. Course metadata may wrap, but course cards must retain a usable remove control.
- On tablet and desktop widths, increase breathing room while preserving the narrow app-panel proportions and the same visual order. Do not turn the four screens into unrelated dashboard columns.
- Keep headers, result cards, summary cards, and footer aligned to the same content width. The result number and primary actions must remain visually dominant at every width.
- Check portrait mobile, tablet, and desktop widths for long course codes, many course cards, error messages, loading content, and the result breakdown.

## Responsibilities

### Welcome Screen

Build branding, title, description, and the `getStartedButton` action area inside `welcomeScreen`.

### Course Input Screen

Build course fields for `courseCodeInput`, `creditUnitInput`, and `gradeInput`; the `courseForm`; `addCourseButton`; course cards in `courseList`; remove controls; summary values `totalCourses` and `totalCreditUnits`; the `calculateButton`; and the reusable `errorMessage` area.

### Loading Screen

Build a loading animation and loading text inside `loadingScreen`. Keep the state clean and accessible.

### Result Screen

Build the GPA result, total credit units, total grade points, course breakdown area, and reset/calculate-again action inside `resultScreen`. Preserve `resultValue`, `resultTotalCreditUnits`, `resultTotalGradePoints`, `courseBreakdown`, and `resetButton`.

### Responsive Design

Use a mobile-first approach and verify mobile, tablet, and desktop layouts. Include usable focus, hover, disabled, and error states for controls where applicable.

## DOM Contract

The required IDs are:

```text
welcomeScreen
calculatorScreen
loadingScreen
resultScreen
getStartedButton
courseForm
courseCodeInput
creditUnitInput
gradeInput
addCourseButton
courseList
calculateButton
totalCourses
totalCreditUnits
resultValue
resultTotalCreditUnits
resultTotalGradePoints
courseBreakdown
resetButton
errorMessage
```

## Do Not Do

- Do not implement the calculation engine.
- Do not put formulas into HTML or CSS.
- Do not rewrite `calculator.js`.
- Do not create duplicate application state or a second course array.
- Do not add unnecessary libraries.
- Do not rename IDs without first telling Evans.

## Dependencies

The agreed IDs and screen structure are the integration dependency for Evans. The final visible grade options depend on the approved configuration supplied by Alliance in `js/data.js`.

## Definition of Done

- All four screens exist.
- Approved designs are reproduced.
- All required DOM IDs exist.
- Mobile and desktop layouts work, with tablet checked as well.
- Buttons and form elements have proper visual states.
- Error areas exist.
- JavaScript can control the UI without changing the DOM contract.
- No unnecessary libraries were added.
