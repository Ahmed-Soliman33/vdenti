# VDenti Dental Clinic - Official Website

Enterprise-grade web application for VDenti Dental Clinic, providing comprehensive dental care services in Riyadh, Saudi Arabia.

## Production Environment

**Live Site**: https://vdenti.vercel.app/

**Status**: Production Ready

**Last Updated**: January 2026

## Project Overview

VDenti is a modern, high-performance web application built to showcase premium dental services and facilitate patient engagement. The platform features full bilingual support (Arabic/English), progressive web app capabilities, and advanced SEO optimization for maximum visibility in search engines.

### Key Features

- **Bilingual Interface**: Seamless Arabic and English language support with RTL layout handling
- **Progressive Web App**: Installable on mobile devices with offline capabilities
- **Performance Optimized**: Code splitting, lazy loading, and aggressive caching strategies
- **SEO Enhanced**: Comprehensive meta tags, structured data, and sitemap integration
- **Responsive Design**: Mobile-first approach supporting all device sizes
- **Accessibility Compliant**: WCAG standards with keyboard navigation and screen reader support

## Technology Stack

### Core Framework
- **React 19**: Latest stable release with concurrent features
- **TypeScript 5.9**: Strict type safety and enhanced developer experience
- **Vite 7.2**: Next-generation frontend tooling with HMR

### UI & Styling
- **Tailwind CSS v4**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: High-quality React components built on Radix UI primitives
- **Framer Motion 12**: Production-ready animation library

### State & Forms
- **React Hook Form v7**: Performant form validation with minimal re-renders
- **Zod v4**: TypeScript-first schema validation
- **Local State Management**: Component-based state without global store overhead

### Build & Optimization
- **Terser**: Advanced JavaScript minification
- **CSS Code Splitting**: Optimized stylesheet delivery
- **Manual Chunk Splitting**: Strategic vendor bundling for optimal caching
- **PWA Plugin**: Service worker generation with Workbox

### Internationalization
- **i18next v25**: Industry-standard i18n framework
- **react-i18next**: React integration with hooks-based API
- **HTTP Backend**: Dynamic translation loading

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui component primitives
│   ├── layout/             # Layout components (Navigation, Footer)
│   ├── header/             # Header-specific components
│   ├── sections/           # Page section components
│   └── shared/             # Reusable shared components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configuration
│   ├── i18n.ts            # Internationalization setup
│   ├── config.ts          # Application configuration
│   └── utils.ts           # Utility functions
├── services/              # Business logic and API integrations
├── assets/                # Static assets (images, fonts)
├── App.tsx                # Root application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and design tokens
```

### Design System

**Brand Colors**:
- Primary: #191A33 (Dark Blue)
- Accent: #C8B398 (Gold)
- Grayscale: Blue-tinted palette (50-900)

**Typography**:
- English: Inter (400, 500, 700, 800)
- Arabic: Cairo (200-1000 variable)

**Responsive Breakpoints**:
- Mobile: 0-639px
- Tablet: 640-1023px
- Desktop: 1024px+

## Development

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Environment Configuration

Create a `.env` file in the project root:

```bash
# EmailJS Configuration (Contact Form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# API Configuration (Future Implementation)
VITE_API_URL=https://api.vdenti.vercel.app

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Installation

```bash
# Clone the repository
git clone <repository_url>
cd VDenti

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start on `http://localhost:8080`

### Available Scripts

```bash
# Development
npm run dev              # Start development server with HMR

# Production Build
npm run build            # Build optimized production bundle
npm run build:dev        # Build with development features enabled

# Code Quality
npm run lint             # Run ESLint for code quality checks
npm run type-check       # Run TypeScript compiler checks

# Preview
npm run preview          # Preview production build locally
```

## Build Optimization

### Code Splitting Strategy

The application employs strategic code splitting for optimal performance:

- **react-vendor**: React core libraries (react, react-dom)
- **ui-vendor**: Radix UI component primitives
- **animation-vendor**: Framer Motion library
- **form-vendor**: Form handling libraries (react-hook-form, zod)

### Performance Metrics

Target Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s
- **TTFB** (Time to First Byte): < 600ms

### Caching Strategy

**Service Worker Caching**:
- API requests: NetworkFirst (1 hour TTL)
- Images: CacheFirst (30 days TTL)
- Google Fonts: CacheFirst (1 year TTL)

## SEO Configuration

### Structured Data

The site implements Schema.org markup for:
- Dentist organization details
- Aggregate ratings (4.8/5 with 250 reviews)
- Service offerings
- Contact information with emergency availability
- Geographic coordinates for local SEO

### Social Media Integration

**Open Graph Protocol**:
- Optimized titles and descriptions
- High-quality og-image (1200x630px)
- Locale-specific tags

**Twitter Cards**:
- Summary card with large image
- Verified handle integration

### Sitemap

Comprehensive XML sitemap including:
- Homepage (priority: 1.0)
- Service pages (priority: 0.9)
- About section (priority: 0.8)
- Portfolio section (priority: 0.8)
- Contact section (priority: 0.9)
- FAQ section (priority: 0.7)
- Testimonials section (priority: 0.7)
- Partners section (priority: 0.6)

## Internationalization

### Supported Languages

- **Arabic (ar)**: Primary language with RTL support
- **English (en)**: Secondary language with LTR support

### Translation Namespaces

Available namespaces in `public/locales/{lang}/`:
- `common.json`: Shared translations
- `contact.json`: Contact form and CTA
- `services.json`: Service descriptions
- `about.json`: About section content
- `faq.json`: FAQ section

### Language Switching

Language preference is persisted across:
1. HTTP cookies (primary)
2. localStorage (fallback)
3. Browser language detection
4. Default to Arabic

## Progressive Web App

### PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Service worker with precaching strategy
- **App Manifest**: Standalone display mode with custom icons
- **Auto-Update**: Automatic service worker updates on deployment

### App Manifest Details

- **Name**: V-Denti - Integrated Supply & Procurement Solutions
- **Theme Color**: #191A33 (brand primary)
- **Display**: Standalone
- **Orientation**: Portrait
- **Start URL**: /
- **Icons**: 192x192 and 512x512 (maskable)

## Testing

### Quality Assurance Checklist

- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Responsive design testing (mobile, tablet, desktop)
- RTL layout verification for Arabic content
- Form validation and submission testing
- Performance benchmarking with Lighthouse
- Accessibility audit with axe DevTools
- SEO validation with Google Search Console

## Deployment

### Production Deployment

The application is deployed on Vercel with automatic CI/CD:

1. Push changes to main branch
2. Vercel automatically builds and deploys
3. Preview deployments created for pull requests
4. Production URL: https://vdenti.vercel.app/

### Build Process

```bash
# Generate production build
npm run build

# Output directory: dist/
# Build artifacts are optimized and minified
# Service worker generated automatically
```

### Environment Variables

Ensure all required environment variables are configured in Vercel dashboard:
- Navigate to Project Settings > Environment Variables
- Add production values for VITE_* variables
- Redeploy to apply changes

## Monitoring & Analytics

### Performance Monitoring

- Web Vitals tracking integrated
- Real User Monitoring (RUM) via Google Analytics
- Error tracking and reporting

### Search Console Integration

Verify site ownership:
1. Add meta verification tag to index.html
2. Submit sitemap.xml to Google Search Console
3. Monitor indexing status and search performance

## Security

### Best Practices Implemented

- Content Security Policy headers
- HTTPS enforced on all connections
- Secure cookie attributes
- XSS protection via React escaping
- CSRF protection on form submissions
- Environment variable security (no secrets in client code)

## Browser Support

### Supported Browsers

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

### Fallbacks

- Progressive enhancement for older browsers
- Graceful degradation of advanced features
- Polyfills loaded conditionally

## Contributing

### Code Standards

- **TypeScript**: Strict typing enforced
- **ESLint**: Code quality rules
- **Prettier**: Code formatting with Tailwind plugin
- **Conventional Commits**: Commit message standards

### Development Workflow

1. Create feature branch from main
2. Implement changes with tests
3. Run linting and type checks
4. Submit pull request for review
5. Merge after approval and CI pass

## Documentation

### Additional Resources

- **CLAUDE.md**: Comprehensive codebase documentation for AI assistants
- **OG-IMAGE-SPECS.md**: Social media image specifications
- **public/locales/**: Translation files with bilingual content

### Component Documentation

All custom components include:
- TypeScript interface definitions
- Props documentation
- Usage examples
- Accessibility notes

## Support & Maintenance

### Issue Reporting

For bugs or feature requests:
1. Check existing issues for duplicates
2. Create detailed issue with reproduction steps
3. Include environment details (browser, OS, version)
4. Attach screenshots or screen recordings if applicable

### Maintenance Schedule

- **Dependencies**: Monthly security updates
- **Performance**: Quarterly optimization reviews
- **Content**: On-demand updates via CMS
- **SEO**: Bi-monthly audit and optimization

## License

Proprietary - All rights reserved by VDenti Dental Clinic

## Contact

**VDenti Dental Clinic**
- Website: https://vdenti.vercel.app/
- Location: King Fahd Road, Riyadh, Saudi Arabia
- Technical Support: Contact via website form

---

**Version**: 1.0.0
**Build Date**: January 2026
**Node Version**: 18.x
**npm Version**: 9.x