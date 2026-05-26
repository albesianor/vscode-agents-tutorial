# Agent Instructions

This repository is a small static todo app built with plain HTML, CSS, and vanilla JavaScript. Keep agent changes focused and lightweight.

## Project Layout

- [index.html](index.html) contains the app shell and semantic structure.
- [script.js](script.js) owns todo behavior, theme persistence, and DOM updates.
- [styles.css](styles.css) owns the visual system, responsive layout, and animations.

## Working Rules

- Prefer native browser APIs and existing patterns over adding frameworks, build tooling, or dependencies.
- Preserve the current UX conventions: theme toggle state in `localStorage`, empty-state and stats updates, and accessible labels/ARIA behavior.
- Keep DOM changes and CSS changes in sync so interaction states still match the visual states.
- Make small, targeted edits that fit the existing style rather than refactoring broadly.

## Validation

- There is no package manager or scripted test suite in the repo, so verify changes by opening the page in a browser and checking the affected interactions manually.
- If a change introduces a new behavior, confirm it works in both light and dark themes.
