# shadcn-extras

✨ Beautiful, animated UI components for React & Next.js, built with [Motion](https://motion.dev/) and [Tailwind CSS](https://tailwindcss.com/).  
Easy to use. Customizable. Open Source.

**Note:** This project is in active development — new components and improvements are added regularly.

---

## 🚀 Features

- 🎨 Ready-to-use **animated UI components**
- ⚡ Built with **Motion** for smooth animations
- 🎯 **Tailwind CSS friendly** and easy to theme
- 🔧 Works seamlessly with **shadcn/ui**
- 📚 Detailed **documentation** & code examples
- 🛠️ Extensible — copy, customize, and adapt

---

## 📖 Documentation

Full documentation and examples are available at:  
👉 [nayanrdeveloper.github.io/shadcn-extras/docs](https://nayanrdeveloper.github.io/shadcn-extras/docs/)

---

## 📦 Installation

```bash
# Using npm
npm install shadcn-extras

# Or with pnpm
pnpm add shadcn-extras

# Or with yarn
yarn add shadcn-extras
```

### Requirements

- React 18+
- Tailwind CSS
- [Motion](https://motion.dev/) (installed automatically via CLI or manually)

If you are already using **shadcn/ui**, you don’t need to create a `lib/utils.ts` file.  
Otherwise, make sure to install helpers:

```bash
npm install clsx tailwind-merge
```

and add `lib/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🧩 Usage

Example: Add a component via the CLI

```bash
npx shadcn-extras add kpi-card
```

Then import it into your project:

```tsx
import { KpiCard } from '@/components/shadcn-extras/kpi-card';

export default function Example() {
  return <KpiCard label='Revenue' value='$24.5k' trend='up' delta='+12%' />;
}
```

Check the [docs](https://nayanrdeveloper.github.io/shadcn-extras/docs/) for full examples.

---

## 🤝 Contributing

We welcome contributions!  
Please read our [Contributing Guide](./CONTRIBUTING.md) to learn how to set up the repo, add components, run lint/format, and submit PRs.

---

## 📜 License

Licensed under the [MIT License](./LICENCE.md).
