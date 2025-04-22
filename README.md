# React + Vite + Redux Toolkit Todo App

This template provides a minimal setup to get React working in Vite with HMR, Redux Toolkit for state management, and ESLint rules.

## Features

- Add, delete, and toggle todos
- Redux Toolkit for state management
- Persistent storage using localStorage
- Modern React with hooks
- Fast development with Vite

## Project Structure

```
src/
  ├── components/      # React components
  ├── features/        # Redux slices and features
  ├── store/           # Redux store configuration
  └── App.jsx         # Root component
```

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Dependencies

- [@reduxjs/toolkit](https://redux-toolkit.js.org/) - State management
- [react-redux](https://react-redux.js.org/) - React bindings for Redux
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
