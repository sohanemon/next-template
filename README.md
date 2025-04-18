# next-template

A Next.js 15 app built with Tailwind CSS.

## Usage (run locally)

Go to the `root` folder where `package.json` exists.

```bash
npm install
```

```bash
npm run dev
# or
deno task dev
```

> required `nodejs` or `deno` installed

## Commit/Push

Prepare Husky

```bash
npm run prepare
```

## Bootstrap (new app)

```bash
npx sohanemon next my-app-name
```

```bash
npx sohanemon next my-app-name --yarn
```

```bash
npx sohanemon next my-app-name --pnpm
```

## Features

This template provides a robust foundation for your Next.js projects, leveraging the latest technologies and best practices:

- **Next.js 15 App Directory:**  Experience the enhanced development experience and improved performance of the new App Router.
- **Radix UI Primitives:** Build accessible and highly customizable UI components with ease.
- **Tailwind CSS v4:** Rapidly style your application with utility-first CSS. Includes class sorting, merging, and linting for optimized stylesheets.
- **Styling and Animations:**
    - **Tailwind CSS:** Styling and component variants for rapid development.
    - **Framer Motion:** Create stunning animations and transitions with this powerful library.
- **State Management:**
    - **Zustand:**  A lightweight and scalable state management solution.
- **Forms and Data Handling:**
    - **React Hook Form:** Simplify form management and validation.
- **Theming:**
    - **Next Themes:** Easily switch between light and dark modes or implement custom themes.
- **Icons:**
    - **Lucide React:** Access a wide variety of beautiful and customizable icons.
- **Developer Experience:**
    - **BiomeJS:** Streamlined linting and formatting for consistent code quality.
    - **Husky:**  Prevent bad commits and enforce code quality with Git hooks.
    - **TypeScript:**  Enhanced type safety and developer tooling.


### Conventions

For project conventions and guidelines, please refer to the [Conventions](./CONVENTION.md) document.

## Quick Start

```bash
npx sohanemon next my-app-name

# or with a specific package manager:
npx sohanemon next my-app-name --yarn
npx sohanemon next my-app-name --pnpm
```

## Local Development

1. **Install Dependencies:**

```bash
npm install  # or yarn install, pnpm install
```

2. **Start Development Server:**

```bash
npm run dev # or yarn dev, pnpm dev
```

Requires Node.js or Deno installed.


## License

Licensed under the [MIT license](https://github.com/sohanemon/ui-init/blob/main/LICENSE).
