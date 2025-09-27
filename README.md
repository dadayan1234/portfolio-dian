# Dian Prasetya's Portfolio - React & Vite Edition

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-^7.1-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^3.4-cyan?style=for-the-badge&logo=tailwindcss)

This repository contains the source code for the personal portfolio website of Dian Prasetya, an IoT Specialist based in Yogyakarta. It's a modern, responsive, and interactive single-page application built with the latest web technologies.

<!-- You can add a screenshot of your website here -->
<!-- ![Portfolio Screenshot](./screenshot.png) -->

## ✨ Key Features

-   **Modern & Responsive Design**: Fully responsive layout built with Tailwind CSS, ensuring a great user experience on all devices.
-   **Single Page Application (SPA)**: A seamless and fast user experience with smooth-scrolling navigation, powered by React.
-   **Interactive UI**: Engaging animations and hover effects using CSS animations and transitions.
-   **Component-Based Architecture**: Built with reusable React components for maintainability and scalability.
-   **Dynamic Content**: Easily update services and portfolio items directly within the [`src/App.jsx`](src/App.jsx) component.
-   **Direct Contact Integration**: Features a contact form that opens WhatsApp for instant communication, along with a floating WhatsApp button.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://react.dev/) `^19.1`
-   **Build Tool**: [Vite](https://vitejs.dev/) `^7.1`
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) `^3.4`
-   **Icons**: [Lucide React](https://lucide.dev/) `^0.544`
-   **Linting**: [ESLint](https://eslint.org/) `^9.36`
-   **Package Manager**: npm

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/portfolio-dian.git
    cd portfolio-dian
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📜 Available Scripts

This project uses the scripts defined in [`package.json`](package.json):

-   `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
-   `npm run build`: Bundles the application for production into the `dist` folder.
-   `npm run lint`: Lints the source code using ESLint to find and fix problems.
-   `npm run preview`: Serves the production build locally to preview it before deployment.

## 📂 Project Structure

The main application code is located in the `src` directory.

```
src/
├── assets/         # Static assets like SVGs
├── App.css         # Custom styles for App component (legacy)
├── App.jsx         # The main application component with all sections
├── index.css       # Global styles and Tailwind CSS directives
└── main.jsx        # The entry point of the React application
```

## 👤 Author

**Dian Prasetya**
-   **WhatsApp**: [+62 838-7175-8155](https://wa.me/6283871758155)
-   **Email**: [diaprasetya772@gmail.com](mailto:diaprasetya772@gmail.com)
-   **Location**: Yogyakarta, Indonesia