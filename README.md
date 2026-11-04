# Ankit Singh Bisht — Portfolio

A personal portfolio for Senior QA Engineer Ankit Singh Bisht. It presents his experience, QA capabilities, industry background, and selected projects in a responsive single-page website.

## Features

- Sections for profile, projects, experience, skills, and contact
- Project filtering and animated interactions
- Responsive styling with Tailwind CSS
- Profile imagery and site icons served from `public/`

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal when the server is ready.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
├── public/          Static images, icons, and other public assets
├── src/
│   ├── App.jsx      Portfolio content and page components
│   ├── App.css      Application styles
│   ├── index.css    Global styles
│   └── main.jsx     React application entry point
├── index.html       Document metadata and HTML entry point
└── package.json     Dependencies and scripts
```

## Updating portfolio content

Profile details, skills, experience, and project data are maintained in `src/App.jsx`. Update the document title and SEO/social metadata in `index.html`. Replace or add static images and icons in `public/` as needed.
