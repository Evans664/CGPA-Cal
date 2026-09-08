# Git Workflow

## Branches

- `main`: stable or production-ready code.
- `develop`: integration branch.
- `feature/*`: new work created from `develop`.
- `fix/*`: bug fixes created from `develop`.

Nobody should directly push feature work to `main`.

## Workflow

```text
develop
   -> create feature branch
   -> do your work
   -> test
   -> commit
   -> push branch
   -> Pull Request
   -> review
   -> merge into develop
   -> test the complete project
   -> merge into main
```

Example branches:

```text
feature/frontend-layout
feature/course-input
feature/calculator-logic
feature/validation
feature/result-screen
fix/mobile-layout
fix/calculation
```

## Commit Format

Use a short type and imperative description:

```text
feat: add course input
fix: correct GPA calculation
style: improve mobile layout
refactor: simplify course state
docs: update project documentation
test: add calculator test cases
```

Keep commits focused. Avoid messages such as `updated everything`; use a specific message such as `feat: add course removal`.

## Pull Requests

Before opening a Pull Request:

1. Work from an up-to-date `develop` branch.
2. Run the relevant tests and manual checks.
3. Review the changed files and contract names.
4. Explain what changed and how it was tested.
5. Request review from the relevant owner and Evans.

## Ownership and Conflicts

Do not modify another developer's primary file without communicating with them. If a conflict involves another developer's primary file:

1. Contact that developer.
2. Understand both changes.
3. Resolve the conflict deliberately.
4. Run the application.
5. Test the affected feature.
6. Commit the resolution.

Do not blindly choose ours or theirs.

## Contract Protection

Before changing an agreed variable, object property, function name, parameter, return value, or DOM ID, discuss the change with Evans. Preserve the one-source-of-truth `courses` array and central `gradePoints` configuration.
