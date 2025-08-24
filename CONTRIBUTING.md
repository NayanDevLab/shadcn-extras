# Contributing to Shadcn-Extras

Thanks for your interest in contributing to **shadcn-extras**! 🎉  
This library provides reusable **animated UI components** (React + Motion + Tailwind) with copy-paste and CLI install. Contributions of all kinds are welcome—components, docs, fixes, or tooling.

If you need help, reach out to [@nayan_radadiya6](https://x.com/nayan_radadiya6).

---

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Key Commands](#key-commands)
- [Conventional Commits](#conventional-commits)
- [Adding a New Component](#adding-a-new-component)
  - [1) Add the Core Component](#1-add-the-core-component)
  - [2) Add Docs Pages](#2-add-docs-pages)
  - [3) Register Examples (for docs previews)](#3-register-examples-for-docs-previews)
  - [4) Register Component in the Registry (CLI)](#4-register-component-in-the-registry-cli)
  - [5) Add to Navigation](#5-add-to-navigation)
  - [6) Verify the Registry Build](#6-verify-the-registry-build)
  - [7) Test the CLI Install Locally (Optional)](#7-test-the-cli-install-locally-optional)
- [Code Style & Quality](#code-style--quality)
- [Pull Requests](#pull-requests)
- [Releases & Publishing (Maintainers)](#releases--publishing-maintainers)
- [Requests for New Components](#requests-for-new-components)

---

## Project Structure

```
app/                    # Next.js app (docs site)
  docs/                 # Docs pages + examples
components/
  core/                 # Reusable library components (what users install)
  ui/                   # Site-only UI (docs scaffolding)
  website/              # Docs-only components (code blocks, previews, layout)
public/
  c/                    # Registry JSON for components (CLI uses this)
  e/                    # Registry JSON for examples/snippets
cli/                    # (optional) CLI code if we publish one
scripts/                # registry build scripts
lib/                    # shared utils (e.g., cn, shiki helpers)
```

---

## Prerequisites

- **Node.js 18+**
- **npm** (or pnpm/yarn if you prefer)
- Basic familiarity with **React**, **Tailwind**, and **Motion**

---

## Local Setup

```bash
# 1) Fork the repo on GitHub

# 2) Clone your fork
git clone https://github.com/nayanrdeveloper/shadcn-extras.git
cd shadcn-extras

# 3) Create a feature branch
git checkout -b feat/my-new-branch

# 4) Install dependencies
npm install

# 5) Run the docs locally
npm run dev
# open http://localhost:3000
```

---

## Key Commands

```bash
# run the docs app in dev mode
npm run dev

# format everything with Prettier + Tailwind class sorting
npm run format

# check formatting only
npm run check-format

# lint (ESLint + TypeScript)
npm run lint
npm run lint:fix

# build docs (Next.js)
npm run build

# build the registry JSON (used by CLI + docs)
npm run build:registry
```

---

## Conventional Commits

Use the following format for commit messages:

```
type(scope): short description
```

**Types:**

- `feat`: new component or feature
- `fix`: bug fix
- `refactor`: code change that doesn’t add features or fix bugs
- `docs`: documentation changes
- `build`: dependency or build changes
- `test`: add/change tests
- `ci`: CI/Actions configuration
- `chore`: repo maintenance

Examples:

- `feat(kpi-card): add tone and size props`
- `fix(accordion): correct collapsed opacity variant`
- `docs(spinners): add slow blue variant example`

---

## Adding a New Component

### 1) Add the Core Component

Create your component in `components/core/my-component.tsx`.

- Export a **main component** and subcomponents (if needed).
- Accept `className` and merge with Tailwind via `cn`.
- Use **TypeScript**, `forwardRef`, and allow animations to be configurable.
- Keep SRP (Single Responsibility Principle).

### 2) Add Docs Pages

Create under `app/docs/my-component/`:

```
page.mdx
my-component-basic.tsx
my-component-variant.tsx
```

Use `<ComponentCodePreview />` to show examples.

### 3) Register Examples (for docs previews)

Edit `scripts/registry-examples.ts`:

```ts
{
  name: 'my-component-basic',
  path: path.join(__dirname, '../app/docs/my-component/my-component-basic.tsx'),
  description: 'Basic usage of MyComponent.',
  componentName: 'my-component-basic',
  files: [
    {
      name: 'my-component.tsx',
      path: path.join(__dirname, '../components/core/my-component.tsx'),
      type: 'registry:ui',
    },
  ],
},
```

### 4) Register Component in the Registry (CLI)

1. **`scripts/registry-components.ts`**

   ```ts
   {
     name: 'my-component',
     path: path.join(__dirname, '../components/core/my-component.tsx'),
     dependencies: ['motion'],
     description: 'Short description for registry.',
   },
   ```

2. **`public/c/registry.json`** + per-component JSON in `public/c/` if needed.

```json
{
  "name": "my-component",
  "type": "registry:ui",
  "title": "My Component",
  "description": "Short docs description.",
  "dependencies": ["motion"],
  "files": [
    { "path": "components/core/my-component.tsx", "type": "registry:component" }
  ],
  "categories": ["ui", "shadcn-extras"]
}
```

### 5) Add to Navigation

Update `app/docs/navigation.ts`:

```ts
{
  name: 'My Component',
  href: '/docs/my-component',
  isNew: true
},
```

### 6) Verify the Registry Build

```bash
npm run build:registry
```

Commit generated changes.

### 7) Test the CLI Install Locally (Optional)

```bash
npx shadcn-extras add my-component
```

---

## Code Style & Quality

- **Prettier** for formatting (`npm run format`)
- **ESLint** for linting (`npm run lint`)
- **TypeScript** strict
- **Accessibility** first (aria attributes)
- **Props**: accept `className`, expose sensible defaults

---

## Pull Requests

Before opening a PR, ensure:

- [ ] Component in `components/core/`
- [ ] Docs in `app/docs/<component>/`
- [ ] Navigation updated
- [ ] Registry updated (`scripts/registry-*.ts` + `public/c/*.json`)
- [ ] `npm run format` & `npm run lint` pass

---

## Releases & Publishing (Maintainers)

```bash
# bump version
npm version patch|minor|major

# publish (ensure package.json is public)
npm publish --access public
```

Docs deploy via GitHub Pages (Actions).

---

## Requests for New Components

Open a **GitHub Discussion** or **Issue** with:

- Short description & use case
- Screenshot or reference
- Motion/Tailwind constraints

---

🙌 Thanks for helping make **shadcn-extras** better for everyone!
