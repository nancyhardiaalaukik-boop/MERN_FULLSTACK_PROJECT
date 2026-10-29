# MERN_FULLSTACK_PROJECT
contains my project details




# Student Task Manager System

A 45-day full-stack development project focused on building a Student Task Manager System step by step.

## Project Overview

The goal of this project is to develop a full-stack web application that will eventually include:

- Frontend UI
- User authentication
- Backend APIs
- Database integration
- Student dashboard
- Task management
- Form validation and error handling
- Deployment

**Current progress:** Day 1, Day 2, and Day 3 — Frontend Foundation.

---

## Technologies Used

- HTML5 — Page structure
- CSS3 — Styling and responsive layouts
- JavaScript — Interactivity and view switching
- Font Awesome 6.5.0 — Icons

---

## Project Folder Structure

```text
MERN_FULLSTACK_PROJECT/
├── FRONTEND/
│   ├── Login.html
│   ├── Login.css
│   ├── Register.html
│   ├── Register.css
│   ├── Navigation.html
│   ├── Navigation.css
│   └── Navigation.js
└── README.md
```

---

## Day 1 — Login Page UI Development

### Objective
Create a clean, user-friendly login page with a responsive layout.

### Features
- Email input field
- Password input field
- Login button
- Link to the registration page
- Password visibility toggle
- Organized spacing and alignment
- Semantic HTML form structure

### Files
- `Login.html`
- `Login.css`

### Concepts Practiced
- HTML forms and input types
- CSS Flexbox
- Spacing and alignment
- Responsive design basics
- Accessible form labels

### Testing Checklist
- [x] Login page opens correctly
- [x] Email and password fields are visible
- [x] Password visibility toggle works
- [x] Layout displays correctly

---

## Day 2 — Registration Page UI Development

### Objective
Create a registration interface for new students.

### Features
- Name input field
- Email input field
- Password input field
- Confirm password field
- Registration button
- Link back to the login page
- Password visibility controls
- Consistent styling with the login page

### Files
- `Register.html`
- `Register.css`

### Concepts Practiced
- Form structuring
- Input types and labels
- CSS styling and layout consistency
- Password visibility controls
- Basic form usability

### Testing Checklist
- [x] Registration page opens correctly
- [x] Required fields are displayed
- [x] Password visibility controls work
- [x] Login navigation link is available

*Note: These checks describe the UI and behavior tested so far; backend registration and database storage are not implemented yet.*

---

## Day 3 — Frontend Navigation and View Switching

### Objective
Display the login and registration interfaces in one HTML document and switch between them without reloading the page.

### Features
- Login view displayed by default
- Switch from Login to Registration
- Switch from Registration to Login
- No full-page reload during switching
- Password visibility toggle for both forms
- Reuse of the original login and registration UI

### Files
- `Navigation.html`
- `Navigation.css`
- `Navigation.js`

### Concepts Practiced
- JavaScript DOM selection
- `document.getElementById()`
- `addEventListener()`
- `event.preventDefault()`
- The HTML `hidden` property
- Selecting elements with `querySelectorAll()`
- Changing input types with JavaScript
- Using `data-*` attributes to identify password fields

### How View Switching Works

1. JavaScript selects the login and registration views.
2. When the user clicks **Register here**, `event.preventDefault()` stops the link's default navigation.
3. The login view is hidden.
4. The registration view is shown.
5. Clicking **Login here** reverses the process.

Because both views are in the same HTML document, switching does not require a full-page reload.

### Testing Checklist
- [x] Login view opens by default
- [x] Register link displays the registration view
- [x] Login link returns to the login view
- [x] Switching works without a page reload
- [x] Password eye toggles work on both views
- [x] Original login and registration UI is preserved

---

## Current Project Status

| Day | Task | Status |
|---|---|---|
| Day 1 | Login Page UI | Completed |
| Day 2 | Registration Page UI | Completed |
| Day 3 | Navigation and View Switching | Implementation and functional tests passed; final code explanation pending |

