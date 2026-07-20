# shadcn-extras

Beautiful, customizable React components, animated icons, themes, and CSS tools built with Next.js, Tailwind CSS, Motion, and shadcn/ui conventions.

This repository contains three related parts:

- the documentation and component showcase;
- a registry that turns source components into installable JSON files; and
- a CLI that copies selected components into another project.

The project is under active development. Browse the [documentation and examples](https://nayanrdeveloper.github.io/shadcn-extras/docs/).

> **For reviewers and judges:** Read [How Codex Helped Build shadcn-extras](./CODEX.md) for a guided tour of the AI-assisted workflow, technical challenges, and project evidence.

## Features

- Copy-owned React components that can be edited after installation
- Motion-powered components and animated Lucide icons
- Tailwind CSS styling with shadcn/ui-compatible utilities
- MDX documentation with live code previews
- Storybook stories and Jest component tests
- Theme presets, an AI theme generator, and CSS design tools
- Generated component, hook, and example registries

## Run the project locally

### Prerequisites

- Node.js 18 or newer
- npm (the repository includes `package-lock.json`)
- Git

### Setup

```bash
git clone https://github.com/NayanDevLab/shadcn-extras.git
cd shadcn-extras
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The documentation is available at `/docs`, tools at `/tools`, themes at `/themes`, and the theme generator at `/theme-generator`.

`npm ci` is recommended for a reproducible install. Use `npm install` when intentionally changing dependencies.

### Optional AI theme generation

The rest of the site works without an API key. To use the AI theme generator, create `.env.local`:

```dotenv
GEMINI_API_KEY=your_google_gemini_api_key
```

Do not commit `.env.local` or expose the key in client-side code.

### Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create the production/static-export build |
| `npm run start` | Start a Next.js production server where supported |
| `npm run storybook` | Run Storybook on port 6006 |
| `npm run build:registry` | Regenerate installable registry JSON |
| `npm run test` | Run the Jest test suite |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run check-format` | Check Prettier formatting |

Before submitting a change, run:

```bash
npm run build:registry
npm run typecheck
npm run lint
npm run test
npm run check-format
npm run build
```

## Install a component in another project

This root package is private; consumers normally install individual components with the CLI instead of adding the repository as an npm dependency.

```bash
npx shadcn-extras list
npx shadcn-extras add kpi-card
```

The CLI reads the published registry, copies source files into `components/shadcn-extras`, detects npm, pnpm, or Yarn from the project's lockfile, and installs the component's declared dependencies. Components may also be copied manually from their documentation pages.

Your consuming application should already have React and Tailwind CSS configured. Components that use shared shadcn/ui conventions may also expect the `cn` helper in `@/lib/utils`:

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

If needed, install its dependencies with `npm install clsx tailwind-merge`. Component-specific packages such as `motion`, `lucide-react`, or `three` are declared in the registry and installed by the CLI.

## How the component structure works

```text
components/core/          Reusable source components distributed to users
components/ui/            Local shadcn/ui primitives used by the site
components/website/       Documentation navigation, previews, and code blocks
components/tools/         Interactive CSS and design generators
components/themes/        Theme picker, preview, and export UI
app/docs/<component>/     MDX documentation and runnable examples
stories/                  Storybook stories
__tests__/                Jest and Testing Library tests
scripts/                  Registry definitions, schema, and build script
public/c/                 Generated component registry JSON
public/h/                 Generated hook registry JSON
public/e/                 Generated example registry JSON
cli/                      Standalone `shadcn-extras` command-line package
lib/                      Shared utilities, highlighting, and theme logic
hooks/                    Reusable React hooks
```

The component pipeline is:

1. A reusable implementation lives in `components/core/<name>.tsx`, with an optional adjacent CSS file.
2. Examples live in `app/docs/<name>/`, and `page.mdx` explains their API and usage.
3. Storybook stories provide isolated visual states; tests cover behavior where appropriate.
4. `scripts/registry-components.ts`, `scripts/registry-examples.ts`, or `scripts/registry-hooks.ts` declares the files and dependencies.
5. `npm run build:registry` reads those sources and generates JSON in `public/c`, `public/e`, and `public/h`.
6. The CLI reads `public/c/registry.json`, copies the selected files into the consumer's project, and installs declared dependencies.

Because consumers receive source code rather than an opaque compiled package, they own the installed component and can adapt its props, styles, and animation behavior.

For the complete new-component checklist, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Using Codex to help build the project

See the dedicated [Codex project report](./CODEX.md) for details. Codex can assist with repository work such as analyzing an existing component, implementing a new component and examples, updating registry declarations, writing tests, checking accessibility, and running the validation commands. Give it a focused task and ask it to inspect the repository conventions before editing.

Example prompts:

```text
Analyze this repository, then add a reusable <component-name> component.
Follow the patterns in components/core, add MDX examples and Storybook stories,
register every required file and dependency, and run the relevant checks.
```

```text
Review <component-name> for accessibility, responsive behavior, TypeScript API
quality, and reduced-motion support. Explain the issues before changing code.
```

```text
Diagnose the failing registry build. Do not edit generated JSON manually;
fix the source registry declarations, regenerate the files, and verify the diff.
```

Codex should be treated as a collaborator, not an automatic source of truth: review its diff, visually inspect interactive changes in the browser or Storybook, and run the full checks before merging. This README was expanded with Codex assistance after inspecting the repository; project ownership and prior implementation remain with the maintainers and contributors.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the component workflow, code standards, and pull-request checklist.

## License

Licensed under the [MIT License](./LICENCE.md).
