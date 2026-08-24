# Aula del Tirador

![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript\&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite\&logoColor=white)
![License](https://img.shields.io/badge/License-PolyForm_Noncommercial-blue)

Aula del Tirador is a web application designed to help users prepare for the theoretical examination required for firearms licenses D and E in Spain.

The application allows users to practice questions by topic or take timed mock exams that reproduce the format and conditions of the official examination.

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)

  * [Architecture Overview](#architecture-overview)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running the Application](#running-the-application)
* [Available Scripts](#available-scripts)
* [Changelog](#changelog)
* [License](#license)
* [Contact](#contact)

## Features

* **Topic Practice** — Practice questions from each exam topic individually.
* **Mock Exams** — Take mock exams based on the format of the official examination.
* **Random Question Selection** — Questions are randomly selected for each exam.
* **Timed Exams** — Complete the 20-question exam within the 20-minute time limit.
* **Automatic Correction** — Answers are automatically checked when the test is completed.
* **Score Calculation** — The final score is calculated automatically.
* **Pass/Fail Result** — The application determines the result based on the required passing score.
* **Responsive Interface** — The interface adapts to desktop and mobile devices.

## Tech Stack

### Frontend

* **React 19** — Component-based user interface.
* **TypeScript** — Static typing.
* **React Router DOM** — Client-side routing.
* **CSS Modules** — Component-scoped styles.
* **Lucide React** — Application icons.
* **clsx** — Conditional class name handling.

### Development Tools

* **Vite** — Development server and build tooling.
* **ESLint** — Static code analysis and linting.
* **Prettier** — Code formatting.

## Project Structure

The repository is structured as a monorepo, with the frontend application located in `app/`. A backend API may be added in a future version.

```text
aula-del-tirador/
├── app/
│   ├── public/
│   │   └── data/
│   │       └── questions/     # Exam questions grouped by topic
│   │
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── config/            # Application and exam configuration
│   │   ├── layout/            # Shared application layouts
│   │   ├── models/            # TypeScript data models
│   │   ├── pages/             # Application pages
│   │   ├── services/          # Question and exam data services
│   │   ├── styles/            # Global styles and CSS variables
│   │   └── utils/             # Shared utility functions
│   │
│   └── package.json
│
├── CHANGELOG.md
├── LICENSE.md
└── README.md
```

The exam questions are currently stored locally as JSON files in `app/public/data/questions/` and loaded directly by the frontend.

### Architecture Overview

The frontend is organized into several layers with clearly separated responsibilities:

* **Pages** — Represent the main application views, including the home page, topic selection, topic practice, and exam simulation.
* **Components** — Reusable interface elements used across the different pages.
* **Layout** — Defines the shared application structure and navigation.
* **Services** — Handles loading and preparing question data for topic practice and exams.
* **Config** — Contains application configuration such as exam rules and navigation data.
* **Models** — Defines the TypeScript data structures used throughout the application.
* **Utils** — Contains reusable logic such as question randomization and score calculation.
* **Styles** — Contains global styles and shared CSS variables.

The current version runs entirely on the frontend and does not require a backend or database. A backend API may be incorporated into the monorepo in a future version.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ManuelSanchis/aula-del-tirador.git
```

Navigate to the frontend application:

```bash
cd aula-del-tirador/app
```

Install the dependencies:

```bash
npm install
```

### Running the Application

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local URL where the application is running.

## Available Scripts

| Command                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `npm run dev`          | Starts the Vite development server.                          |
| `npm run build`        | Runs the TypeScript compiler and creates a production build. |
| `npm run preview`      | Locally previews the production build.                       |
| `npm run lint`         | Runs ESLint across the project.                              |
| `npm run format`       | Formats the project files with Prettier.                     |
| `npm run format:check` | Checks the project formatting with Prettier.                 |

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of notable changes to the project.

## License

This project is licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE.md).

Copyright © 2026 Manuel Sanchis Tormo.

## Contact

**Manuel Sanchis Tormo**

* Email: [manuelsanchistormo@gmail.com](mailto:manuelsanchistormo@gmail.com)
* LinkedIn: [linkedin.com/in/manuel-sanchis-tormo](https://www.linkedin.com/in/manuel-sanchis-tormo/)
* GitHub: [github.com/ManuelSanchis](https://github.com/ManuelSanchis)
