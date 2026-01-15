# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Arabic) React-based frontend application for "STORKWORK", an integrated supply and procurement solutions platform for building and managing supply chains from design to delivery in Saudi Arabia and the Gulf. Built with Vite, TypeScript, React 19, shadcn/ui, and Tailwind CSS v4. The project features full RTL (Right-to-Left) language support for Arabic, PWA capabilities, performance optimization, and a sophisticated design system.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development mode (includes component tagger and sourcemaps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview

# Format code with Prettier (if needed)
npx prettier --write .
```

## Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```bash
# EmailJS Configuration (Contact Form)
VITE_EMAILJS_SERVICE_ID=your_service_id      # From EmailJS Email Services
VITE_EMAILJS_TEMPLATE_ID=your_template_id    # From EmailJS Email Templates
VITE_EMAILJS_PUBLIC_KEY=your_public_key      # From EmailJS Account > API Keys

# API Configuration
VITE_API_URL=http://localhost:3000/api  # Backend API URL

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

All environment variables must be prefixed with `VITE_` to be accessible in the client-side code via `import.meta.env.VITE_*`.

## Architecture

### Routing & Layout

- React Router v7 handles all routing in `src/App.tsx`
- **Lazy Loading**: Pages are lazily loaded using `React.lazy()` wrapped in `Suspense` for code splitting and performance
- All routes use `RootLayout` component which includes:
  - `Navbar` (sticky navigation)
  - `WhatsAppButton` (floating CTA)
  - `Outlet` (page content)
  - `Footer`
  - `ScrollToTop` (utility to scroll to top on route change)
- 404 handling via catch-all `*` route to `NotFound` page
- **Critical**: All new custom routes must be added ABOVE the catch-all `*` route in `App.tsx`
- When adding new pages, use lazy loading pattern: `const NewPage = lazy(() => import("./pages/NewPage"))`

#### Current Routes

- `/` - Home page (lazy loaded)
- `*` - NotFound (lazy loaded, catch-all)

### Internationalization (i18n)

- Uses i18next v25 with react-i18next for translations
- Configuration in `src/lib/i18n.ts`
- Supported languages: English (en) and Arabic (ar)
- Translation files located in `public/locales/{lang}/{namespace}.json`
- Available namespaces: common, auth, footer, about, contact, privacy, terms, cta, dashboard, services, pricing, admin, checkout
- RTL support: Arabic automatically switches document direction via `changeLanguage()` helper
- Language detection order: cookie → localStorage → browser → HTML tag
- Translations load asynchronously with HTTP backend
- Use `useTranslation()` hook in components: `const { t, i18n } = useTranslation()`
- Helper functions:
  - `changeLanguage(lng)` - Changes language and updates `dir` attribute
  - `loadNamespace(namespace)` - Dynamically loads translation namespaces
  - `getLanguageDirection()` - Returns "rtl" or "ltr"

### State Management

- **TanStack Query (React Query) v5** for server state management
- QueryClient configured in `App.tsx` with:
  - `staleTime`: 5 minutes
  - `gcTime`: 10 minutes (cache time, formerly `cacheTime`)
  - `refetchOnWindowFocus`: false
  - `retry`: 1 attempt
  - `refetchOnReconnect`: true
- No global state management library currently used for client state
- Local component state with `useState` and props-based state for simple components

### Provider Hierarchy

The app is wrapped in the following provider order (from outer to inner):

1. `QueryClientProvider` - React Query state management
2. `TooltipProvider` - shadcn/ui tooltip context
3. `AnimatePresence` - Framer Motion page transitions
4. `BrowserRouter` - React Router navigation
5. Toast components (`Toaster`, `Sonner`) are also included at the root level

### API & Authentication

API configuration in `src/lib/api.ts`:

**Base URL**: Configured via `VITE_API_URL` environment variable (defaults to `http://localhost:3000/api`)

**Token Management**:

- Auth token stored in localStorage as `STORKWORK_auth_token`
- Refresh token stored as `STORKWORK_refresh_token`
- `tokenManager` utilities: `getToken()`, `setToken()`, `getRefreshToken()`, `setRefreshToken()`, `clearTokens()`

**API Wrapper**:

- `apiFetch<T>(endpoint, options, includeAuth)` - Base wrapper with automatic Bearer token authentication
- Automatic 401 handling: redirects to `/login` and clears tokens when unauthorized
- Returns typed `ApiResponse<T>` interface with `success`, `data`, `error`, `message` fields

**HTTP Method Helpers**:

```typescript
api.get<T>(endpoint, includeAuth);
api.post<T>(endpoint, body, includeAuth);
api.put<T>(endpoint, body, includeAuth);
api.patch<T>(endpoint, body, includeAuth);
api.delete<T>(endpoint, includeAuth);
```

### Styling System

- **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- Custom design tokens defined in `src/index.css` using `@theme` directive

#### Brand Colors

- **Primary**: `#191A33` (dark blue)
  - Variations: `primary-dark` (#0d0d1a), `primary-light` (#2e2f4d), `primary-lighter` (#45476b)
  - Full scale: `primary-50` through `primary-900`
- **Secondary**: `#525566` (70% gray/blue)
- **Accent**: `#F2F3F5` (10% light gray for highlights)
- **Grayscale palette** (blue-tinted):
  - `gray-50`: #f2f3f5 (10%)
  - `gray-200`: #d1d2d6 (20%)
  - `gray-400`: #9da0aa (40%)
  - `gray-600`: #525566 (70%)
  - `gray-900`: #191a33 (100% - primary)
- **Destructive**: `#D92D20` (error red)
- **Glass morphism**:
  - Background: `rgba(255, 255, 255, 0.85)`
  - Border: `rgba(25, 26, 51, 0.1)`
- **Gradients**:
  - Primary: `linear-gradient(135deg, #191a33 0%, #2e2f4d 100%)`
  - Subtle: `linear-gradient(180deg, #ffffff 0%, #f2f3f5 100%)`

#### Typography

- Default: Inter (weights: 400, 500, 700, 800) - Self-hosted via `@fontsource/inter`
- RTL (Arabic): Cairo (weights: 200-1000) - Loaded from Google Fonts CDN
- Font switching handled automatically based on `dir` attribute
- Cairo provides excellent Arabic typography with full variable weight support

#### Custom Animations

All animations respect `prefers-reduced-motion` media query:

**Logo Loop** (`slideAnim`, `slideAnimRTL`):

- Infinite horizontal scroll for logo carousels
- RTL-aware with reversed direction

**Dialog Animations**:

- `dialog-slide-in/out` - Modal entrance/exit with scale
- `backdrop-fade-in/out` - Backdrop with blur effect

**Swiper Carousel**:

- Active card scales to 1.05 with enhanced background
- Non-active cards scale to 0.9 with reduced opacity
- Smooth cubic-bezier transitions

**Icon Effects**:

- `glow-pulse` - Pulsing opacity and scale (2s infinite)

### UI Components

- shadcn/ui components in `src/components/ui/` (19 Radix UI components including accordion, button, card, checkbox, dialog, dropdown-menu, form, input, label, select, separator, sheet, skeleton, sonner, textarea, toast, toaster, toggle, tooltip)
- Path alias `@/` maps to `src/` directory (configured in tsconfig and vite.config)
- Add new shadcn components: `npx shadcn@latest add <component-name>`
- Custom components follow shadcn patterns with CVA (class-variance-authority)
- Component tagger (`lovable-tagger`) enabled in development mode only

### Navigation Components

- **Navbar**: Desktop navigation in `src/components/Navbar.tsx`
  - Shows full nav links on desktop (lg breakpoint: 1024px)
  - Displays language switcher and CTA button on desktop
  - Uses `BurgerMenu` on mobile/tablet
- **BurgerMenu**: Mobile navigation (`src/components/header/side-menu/`)
  - Animated side menu using Framer Motion
  - Locks body scroll when open
  - Closes on Escape key
  - Includes backdrop blur overlay
- **WhatsAppButton**: Floating WhatsApp CTA (config in `src/lib/config.ts`)

### Forms & Validation

- **React Hook Form v7** for form handling
- **Zod v4** for TypeScript-first schema validation
- **@hookform/resolvers** integrate the two seamlessly

### Contact Form Integration

Contact form uses EmailJS (@emailjs/browser) for email delivery via Hostinger SMTP.

**Service Layer** (`src/services/contactService.ts`):

- `submitContactForm(data)` - Sends email via EmailJS
- Automatically maps form fields to EmailJS template variables
- Returns standardized `ApiResponse<T>` with error codes
- Error codes: `CONFIG_ERROR`, `NETWORK_ERROR`, `EMAILJS_ERROR`, `HTTP_*`

**Field Mapping**:
Form data is automatically mapped to EmailJS template parameters:

- `fullName` → `user_name`
- `companyName` → `company_name` (defaults: "N/A")
- `email` → `user_email`
- `phoneNumber` → `phone_number`
- `serviceType` → `service_type`
- `description` → `message` (defaults: "No additional description provided")
- Auto-added: `language` (en/ar), `submission_date` (locale-formatted)

**Error Handling**:
Three error types with bilingual messages in `contact.json`:

- Network errors (`toast.error.network`)
- Server/EmailJS errors (`toast.error.server`)
- Generic errors (`toast.error.description`)

**EmailJS Template Requirements**:
Template must include these exact variable names:

- `{{user_name}}`, `{{company_name}}`, `{{user_email}}`, `{{phone_number}}`
- `{{service_type}}`, `{{message}}`, `{{language}}`, `{{submission_date}}`

### Animations & Motion

- **Framer Motion v12** for complex animations
  - Menu transitions
  - Page transitions with `AnimatePresence`
  - Hero section with layered animations
  - Spring physics for interactive elements
- **GSAP v3** with @gsap/react for scroll-based animations
- **Custom CSS animations** in `index.css` (see Custom Animations section above)

### Performance Optimization

#### Build Configuration (`vite.config.ts`)

- **Manual Chunk Splitting** for optimal loading:
  - `react-vendor`: react, react-dom, react-router-dom
  - `ui-vendor`: All @radix-ui/\* components
  - `animation-vendor`: framer-motion
  - `i18n-vendor`: i18next, react-i18next, backends
  - `form-vendor`: react-hook-form, @hookform/resolvers, zod
  - `query-vendor`: @tanstack/react-query
- **Terser Minification**: Drops console/debugger statements in production
- **CSS Code Splitting**: Enabled for better caching
- **Target**: ES2015
- **Chunk Size Warning**: 500KB limit

#### Resource Loading System

`useResourcesLoaded()` hook orchestrates page initialization to prevent FOUC:

1. Waits for i18n initialization (`i18nReady`)
2. Waits for `document.readyState === "complete"`
3. Waits for all fonts via `document.fonts.ready`
4. Waits for all images to load (handles errors gracefully)
5. Shows `LoadingScreen` component during loading
6. Small 100ms delay for smooth transition

Used in `App.tsx` with `AnimatePresence` to show loading screen before app renders.

#### Web Vitals & Analytics

- Web Vitals tracking (CLS, FCP, INP, LCP, TTFB) in `src/lib/analytics.ts`
- Sends metrics to Google Analytics (gtag)
- `usePageView()` hook tracks page views (must be inside BrowserRouter)
- Analytics initialized in `main.tsx`

### PWA Configuration

Configured via `vite-plugin-pwa` in `vite.config.ts`:

**Service Worker**:

- Auto-update strategy (`registerType: 'autoUpdate'`)
- Registers only in production builds

**Manifest**:

- Name: "STORKWORK - Integrated Supply & Procurement Solutions"
- Theme color: `#191A33` (brand primary color)
- Display: standalone
- Orientation: portrait
- Icons: 192x192 and 512x512 (purpose: any maskable)

**Workbox Caching**:

- **API Cache**: NetworkFirst strategy (10s timeout), 1 hour expiry, max 50 entries
  - Pattern: `https://storkwork.net/api/*`
- **Image Cache**: CacheFirst strategy, 30 days expiry, max 100 entries
  - Pattern: `.png|.jpg|.jpeg|.svg|.webp|.avif`
- **Google Fonts Cache**: CacheFirst strategy, 1 year expiry
  - googleapis.com (max 10 entries)
  - gstatic.com (max 20 entries)
- **Precaches**: All static assets (js, css, html, images)
- **Ignored**: animated-about-image.webp

## Custom Hooks Reference

Essential hooks in `src/hooks/`:

- **`useResourcesLoaded()`**: Orchestrates page load (i18n, fonts, images)
- **`usePageView()`**: Google Analytics page view tracking (requires BrowserRouter)
- **`useMediaQuery(query)`**: Responsive breakpoint detection
- **`useScrollPosition()`**: Scroll position and direction tracking
- **`useReducedMotion()`**: Detects `prefers-reduced-motion` preference
- **`use-toast()`**: Toast notification management

## Key Features to Maintain

### Bilingual Support

- Always add translations to BOTH `public/locales/en/*.json` and `public/locales/ar/*.json`
- Use `i18n.dir()` to get current text direction for RTL-aware styling
- Test UI in both LTR and RTL modes when making layout changes
- Font stacks automatically switch based on language direction

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- `useMediaQuery` hook for JavaScript-based responsive logic
- Desktop breakpoint at `lg:` (1024px)
- Touch-friendly Swiper carousel on mobile

### Accessibility

- Escape key closes modals/menus
- Body scroll lock when modals open
- Respects `prefers-reduced-motion` for all animations
- Radix UI components are fully accessible (ARIA labels, keyboard navigation)
- Custom scrollbar styling
- Semantic HTML structure

## File Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (19 Radix UI wrappers)
│   ├── layout/          # RootLayout component
│   ├── header/          # Header-specific components (mobile/desktop nav)
│   ├── home/            # Home page sections
│   ├── features-carousel/ # Feature carousel
│   └── *.tsx            # Shared components (Navbar, Footer, Logo, LoadingScreen, etc.)
├── pages/               # Route pages (Home, NotFound) - lazy loaded
├── hooks/               # Custom React hooks (6 hooks)
├── lib/                 # Utilities and configuration
│   ├── i18n.ts         # i18n setup and helpers
│   ├── api.ts          # API wrapper and auth
│   ├── analytics.ts    # Web Vitals tracking
│   ├── utils.ts        # cn() helper (clsx + tailwind-merge)
│   └── config.ts       # App configuration
├── services/            # Business logic and external integrations
│   └── contactService.ts # EmailJS integration for contact form
├── content/            # Static content data
├── assets/             # Images, videos, fonts
│   ├── fonts/          # Font files
│   └── images/         # Image assets
├── App.tsx             # Router setup with providers and lazy loading
├── main.tsx            # Entry point (PWA, analytics init)
└── index.css           # Tailwind, animations, design tokens
```

## Code Quality Tools

### ESLint

- Configured with TypeScript, React Hooks, and React Refresh rules
- Unused TypeScript variables linting is **disabled** (`@typescript-eslint/no-unused-vars: off`)
- Configuration in `eslint.config.js` using flat config format
- Run with: `npm run lint`

### Prettier

- Includes `prettier-plugin-tailwindcss` for automatic Tailwind class sorting
- Configuration in `.prettierrc` (JSON format)
- Run manually with: `npx prettier --write .`

### TypeScript

- Version 5.9.3 with relaxed mode for easier development
- Composite project configuration (references `tsconfig.app.json` and `tsconfig.node.json`)
- Key settings: `strict: false`, `noImplicitAny: false`, `strictNullChecks: false`, `skipLibCheck: true`
- Path aliases configured: `@/*` maps to `src/*`

## Important Notes

- Vite dev server runs on **port 8080** (not default 5173)
- PWA service worker **only registers in production** builds
- Component tagger (`lovable-tagger`) is enabled in **development mode only**
- No test suite currently configured
- API base URL configured via **`VITE_API_URL`** environment variable
- All console/debugger statements are **dropped in production** builds
- Chunk size warning limit set to **500KB**
- Routes are lazy loaded using `React.lazy()` and `Suspense` boundaries for code splitting

## Deployment

This project was created using the Lovable platform and can be deployed through:

1. **Lovable Platform**: Visit the project dashboard and click Share → Publish
2. **Custom Domain**: Can be connected via Project → Settings → Domains
3. **Standard Vite Deployment**: Use `npm run build` to generate the `dist` folder for deployment to any static hosting service

For more information, see the project README or visit the [Lovable documentation](https://docs.lovable.dev).
