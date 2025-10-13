# OrgaEasy - A Modern Landing Page

This is the repository for the OrgaEasy landing page, a modern, responsive, and animated single-page application built with React and Tailwind CSS.


**[ Live Demo ](https://orgaeasy-landing-page-elevvo.netlify.app/)**
---

## About The Project

OrgaEasy is a beautifully designed landing page for a fictional productivity application. It showcases a variety of modern web development techniques, with a strong focus on a smooth user experience through animations and a clean UI.

### Key Features

- **Fully Responsive Design**: The layout adapts perfectly to all screen sizes, from mobile phones to desktop monitors, thanks to Tailwind CSS.
- **Interactive UI**: Smooth hover effects and transitions on buttons, cards, and links.
- **Scroll-Triggered Animations**: Components dynamically fade and slide into view as the user scrolls down the page, implemented efficiently using the `IntersectionObserver` API and a custom React hook.
- **Staggered Animations**: Child elements in lists (like features and reviews) animate in sequence for a more polished effect.
- **Component-Based Architecture**: Built with React, the project is well-structured and organized into reusable components.

---

## Built With

This project was built using the following technologies:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/kamal-bahaa/OrgaEasy.git]
    ```
2.  Navigate to the project directory
    ```sh
    cd OrgaEasy-app
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---

## Available Scripts

In the project directory, you can run the following scripts from your `package.json` file:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally to preview it.
