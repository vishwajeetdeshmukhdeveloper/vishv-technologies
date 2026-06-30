# Vishv Technologies

Enterprise-grade production website for Vishv Technologies — software development, professional learning courses, and developer community.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Zod** (form validation)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint (zero warnings) |
| `npm run typecheck` | TypeScript check |
| `npm run format` | Prettier format |

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL` — Production URL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` — Microsoft Clarity
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console
- `CONTACT_EMAIL` / SMTP vars — Email integration

## Deployment

Deploy to Vercel, Netlify, or any Node.js host:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/           # Routes, API, layouts
├── components/    # Reusable UI & sections
├── config/        # Site data & constants
└── lib/           # Utilities, SEO, validation
```

## License

© Vishv Technologies. All rights reserved.
