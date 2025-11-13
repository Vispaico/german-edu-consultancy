# GEMINI.md

## Project Overview

This is a Next.js web application for an educational consultancy that helps Vietnamese students study in Australia. The application is built with a modern tech stack, including:

*   **Framework:** Next.js (React)
*   **Database:** Prisma with a SQLite database for development.
*   **Styling:** Tailwind CSS
*   **Authentication:** NextAuth.js
*   **Form Management:** React Hook Form with Zod for validation

The application features a comprehensive data model with entities for Users, Students, Consultants, Universities, Courses, and Applications. It includes functionality for user authentication, student and consultant profiles, university and course listings, and application management.

## Building and Running

### Prerequisites

*   Node.js and npm (or yarn) installed.
*   A running database instance (the project is configured to use SQLite by default).

### Installation

1.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Building for Production

1.  Build the application for production:
    ```bash
    npm run build
    ```
2.  Start the production server:
    ```bash
    npm run start
    ```

### Linting

Run the linter to check for code quality issues:

```bash
npm run lint
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** Reusable UI components are located in the `src/components` directory.
*   **Data:** Static data is stored in the `src/data` directory.
*   **Database:** The database schema is managed with Prisma. To make changes to the schema, edit the `prisma/schema.prisma` file and then run `npx prisma migrate dev`.
*   **Authentication:** Authentication is handled by NextAuth.js. The configuration can be found in `src/pages/api/auth/[...nextauth].ts`.
*   **API Routes:** API routes are located in the `src/pages/api` directory.
