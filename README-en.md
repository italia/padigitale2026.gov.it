<div align="center">
   <img src="./padigitale.png" width="600" />
</div>

# PA Digitale 2026

This is the repository of the PA Digitale 2026 project, a web application developed with Next.js and a complete set of modern frontend tools.

## Core Technologies

- [Next.js](https://nextjs.org/) - Production-grade React framework
- [DatoCMS](https://www.datocms.com/) - Headless CMS for content management
- [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) - UI component library for Italian Public Administration
- [Design React Kit](https://italia.github.io/design-react-kit/) - React components from the Italian PA Design System
- [Bun](https://bun.sh/) - JavaScript runtime and package manager

## Prerequisites

- [Bun](https://bun.sh/) (recommended)
- Node.js 18+ (alternative)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd padigitale2026.gov.it
```

2. Install dependencies:

```bash
bun install
```

3. Configure environment variables:
   - Copy `.env.dist` to `.env`
   - Fill in the required environment variables in the `.env` file

## Local Development

To start the development server with Bun (recommended):

```bash
bun --bun run dev
```

To use Node.js instead of Bun:

```bash
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Build and Production

To build the application for production:

```bash
bun run build
```

To start the server in production mode:

```bash
bun run start
```

## Other Useful Commands

- `bun run lint` - Run code linting
- `bun run codegen` - Generate GraphQL types

## Configuration

The project requires several environment variables to function properly. A template of the necessary variables is available in the `.env.dist` file. You need to create a local `.env` file with appropriate values for:

- DatoCMS configuration
- Redis
- Vercel/Next.js
- Algolia
- Salesforce
- Other integrated services

## Contributing

To contribute to the project, make sure to:

1. Create a branch for your changes
2. Follow the project's code conventions
3. Test your changes locally
4. Submit a Pull Request with a detailed description of the changes