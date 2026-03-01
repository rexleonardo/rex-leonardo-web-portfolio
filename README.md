# Rex Leonardo — Web Portfolio

This is the repository for my personal web portfolio. It showcases my skills, experience, and journey as a web developer through a modern, responsive, and bilingual web application interface.

## Tech Stack

This project is built using modern frontend technologies:

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English & Japanese Support)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark Mode Support)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Features

- **Bilingual Interface**: Seamlessly switch between English and Japanese natively supported via `next-intl`.
- **Dark/Light Mode**: User preference based theming configured via `next-themes`.
- **Smooth Animations**: Engaging fade-ins and transitions using `Framer Motion`.
- **Responsive Design**: Mobile-first design architecture powered by `Tailwind CSS`.
- **Organized Data Model**: All the static information (skills, experiences, about, etc.) is decoupled from components using structured Typescript objects (e.g., `data/portfolio.ts`), keeping components clean.

## Project Structure

A quick look at the top-level files and directories you'll see in this project:

- `app/[locale]/` - Next.js App Router providing localized routing.
- `components/` - Highly reusable functional UI components (`Navbar`, `AboutModals`, `LanguageSwitcher`, etc.).
- `data/` - Contains the primary structured content representing the portfolio data.
- `i18n/` & `messages/` - Configuration, dictionary setup, and translation payloads (JSON files) needed for English and Japanese string rendering.
- `update_portfolio.mjs` - A utility script to update or script translations of the portfolio data.

## Getting Started

### Prerequisites
Make sure you have Node.js and a package manager like `npm`, `yarn`, `pnpm`, or `bun` installed on your system.

### Installation

1. Clone the repository and navigate inside:
   ```bash
   git clone <repository_url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to preview the application locally.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
npm run start
```

## Deployment

This application is ready to be deployed on platforms like [Vercel](https://vercel.com/) (recommended for Next.js applications), Netlify, or any other hosting provider of your choice. Ensure that your build settings are established to emit via `next build` and to expose the `.next` directory.

---
*Created by Rex Leonardo*
