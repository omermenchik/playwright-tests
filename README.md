# Earnix Playwright Tests

This project contains a suite of Playwright tests built to validate the functionality and accessibility of the [React.dev](https://react.dev) website.

## 📁 Structure

- `tests/`
  - `searchAndSaveHook.spec.ts`: Tests saving search queries to favorites.
  - `keyboardAccessibility.spec.ts`: Verifies search accessibility using keyboard shortcuts.
  - `languageSwitch.spec.ts`: Checks language switching to Hebrew.
  - `themeToggle.spec.ts`, `headerCheck.spec.ts`, etc.: Additional UI tests.

## ▶️ How to Run the Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. Run a specific test file

```bash
npx playwright test tests/searchAndSaveHook.spec.ts
```

### 4. View the HTML report

```bash
npx playwright show-report
```

## 📦 Requirements

- Node.js 18+
- Playwright
- (Optional) Git and VS Code for development

---

These tests were created as part of a frontend automation assignment for a student position at **Earnix**.
