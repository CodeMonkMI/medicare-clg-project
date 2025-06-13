# ⚡ MediCare

A modern frontend application scaffolded with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/). Fast builds, hot module replacement, and developer-friendly tooling included.

---

## 📁 Project Structure

```
my-app/
├── node_modules/         # Installed dependencies
├── public/               # Static files served as-is
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and libraries
│   ├── pages/            # Route-level components or views
│   ├── store/            # State management (e.g., Zustand, Redux)
│   ├── App.css           # Global styles for App component
│   ├── App.tsx           # Root React component
│   ├── index.css         # Global styles
│   ├── main.tsx          # App entry point, renders React tree
│   └── vite-env.d.ts     # TypeScript types for Vite environment
├── .gitignore            # Files and folders ignored by Git
├── components.json       # Configuration metadata for components (optional)
├── eslint.config.js      # ESLint configuration for linting
├── index.html            # Base HTML template
├── package.json          # Project metadata and scripts
├── pnpm-lock.yaml        # Dependency lock file (for pnpm)
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.app.json     # TypeScript config specific to app code
├── tsconfig.json         # Base TypeScript configuration
├── tsconfig.node.json    # TypeScript config for Node.js
└── vite.config.ts        # Vite build and plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (20.x or later)
- pnpm

### Clone the Repository

```bash
git clone git@github.com:CodeMonkMI/medicare-clg-project.git
cd medicare-clg-project
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm run dev
```

Visit [http://localhost:4000](http://localhost:4000) to view the app.

### Build for production

```bash
pnpm run build
```

### Preview production build

```bash
pnpm run preview
```

---

## ⚙️ Configuration

### `vite.config.ts`

```ts
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 4000,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

```

---

