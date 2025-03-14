# AI Speaking Teacher - Development Guide

## Build Commands
- Start mobile app: `npm run app:start`
- Start iOS app: `npm run app:ios`
- Start Android app: `npm run app:android`
- Start web app: `npm run web:dev`
- Build web app: `npm run web:build`
- Run tests: `cd apps/app && npm run test`
- Run single test: `cd apps/app && npx jest path/to/test/file.test.tsx`
- Lint: `npm run lint`
- Format code: `npm run format`

## Code Style Guidelines
- **Formatting**: Use Prettier with default settings
- **TypeScript**: Use strict typing; avoid `any` types
- **Imports**: Group imports (React, libraries, local) with blank line between groups
- **Components**: Use functional components with React hooks
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Group related files in feature-specific directories
- **Error Handling**: Use try/catch for async operations
- **React Native**: Use cross-platform components when possible
- **Navigation**: Use Expo Router for navigation
- **State Management**: Use React Context for global state
- **Forms**: Use React Hook Form with Zod for validation

## Best Practices
- Keep components small and focused
- Prefer async/await over Promise chains
- Use TypeScript interfaces for component props
- Follow NativeWind/Tailwind classes for styling
- Test critical business logic