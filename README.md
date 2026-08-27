# Project Management App

A modern project management dashboard built with React, TypeScript, and Vite — featuring a glassmorphism UI, Redux-powered state management, and a clean, responsive layout for tracking projects and tasks.

**🔗 Live Demo:** [project-management-app-3web.vercel.app](https://project-management-app-3web.vercel.app/)

---

## ✨ Features

- 📊 **Dashboard** — at-a-glance overview of projects and tasks
- 🗂️ **Project & task views** across multiple pages
- 🎨 **Glassmorphism UI** — frosted-glass cards, soft shadows, and blur effects for a modern look
- 🔄 **Redux state management** for predictable, centralized app state
- ⚡ **Vite** for near-instant dev server startup and fast HMR
- 🎬 Demo video included in `src/video`
- 📱 Responsive design


<img width="1568" height="747" alt="image" src="https://github.com/user-attachments/assets/18d9560a-bb5c-4fd4-bf6c-bc5ae3930d22" />

> Update this list with the specific features your app actually supports (e.g. drag-and-drop task boards, filters, auth, charts, etc.) — this is a starting draft based on the folder structure.

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| State management | Redux (Redux Toolkit) |
| Styling | Tailwind CSS |
| Linting | ESLint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
project_management_app/
├── public/                # Static assets
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components
│   ├── Dashboard/           # Dashboard views/widgets
│   ├── pages/               # Route-level pages
│   ├── redux/                # Store, slices, actions
│   ├── video/                 # Demo/walkthrough video
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── eslint.config.js
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/Dev-Akils/project_management_app
cd project_management_app
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```



---

## 🎨 Design

The UI follows a **glassmorphism** aesthetic — translucent, blurred-background cards layered over a soft gradient background — implemented with Tailwind CSS utility classes (backdrop blur, transparency, subtle borders/shadows).

---

## 🗺️ Roadmap / Ideas for Extension

- [ ] Authentication (per-user project boards)
- [ ] Drag-and-drop task board (Kanban view)
- [ ] Persist data via a backend/API instead of local state
- [ ] Dark/light theme toggle
- [ ] Task filtering, search, and sorting
- [ ] Unit/integration tests

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙋 Author

Built by **Akila S** — part of a collection of mini frontend projects. Check out more at the [https://akils-dev.vercel.app/]
