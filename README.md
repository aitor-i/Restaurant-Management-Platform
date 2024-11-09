
# Restaurant Management Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app). It provides an intuitive platform for managing a restaurant's tables, menu items, and categories, along with real-time updates.

## Features

- **Table Management**: View and manage restaurant tables in real-time.
- **Menu Management**: Create, update, and delete menu items and categories.
- **GraphQL Integration**: Uses GraphQL for efficient data fetching with Apollo Client.
- **Custom Hooks**: Includes custom React hooks for managing GraphQL queries and mutations.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14 or later is recommended).
- **Docker** (optional): For running backend services and database locally.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aitor-i/Restaurant-Management-Platform.git
   cd restaurant-management-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables by creating a `.env.local` file in the root directory. Add your environment-specific variables, such as:

   ```plaintext
   NEXT_PUBLIC_GRAPHQL_API_URL=http://localhost:4000/graphql
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Running the Backend Services

1. **Start Docker**: Ensure Docker is running.
2. **Run the Docker Compose file**:

   ```bash
   docker-compose up
   ```

   This command will set up the backend services, including the database and API server on [http://localhost:4000](http://localhost:4000).

## GraphQL Setup

The application uses Apollo Client to handle GraphQL queries and mutations. Key queries and mutations include:

- **Queries**:
  - `GET_MENU_QUERY`: Fetches all menu categories and items.
  - `GET_CATEGORIES_QUERY`: Fetches all categories.
- **Mutations**:
  - `CREATE_CATEGORY_MUTATION`: Creates a new category.
  - `UPDATE_CATEGORY_MUTATION`: Updates an existing category.
  - `DELETE_CATEGORY_MUTATION`: Deletes a category.
  - `CREATE_MENU_ITEM_MUTATION`: Creates a new menu item.
  - `UPDATE_MENU_ITEM_MUTATION`: Updates an existing menu item.
  - `DELETE_MENU_ITEM_MUTATION`: Deletes a menu item.
- **Subscriptions**:
  - `TABLE_STATUS_SUBSCRIPTION`: Subscribes to real-time table status updates.

## Custom Hooks

Custom hooks abstract and simplify GraphQL queries and mutations:

- `useGetCategories`: Fetches categories data.
- `useGetMenu`: Fetches the full menu including categories and items.
- `useCreateCategory`: Executes the category creation mutation.
- `useUpdateCategory`: Updates an existing category.
- `useDeleteCategory`: Deletes a category.
- `useCreateMenuItem`: Creates a new menu item.
- `useUpdateMenuItem`: Updates an existing menu item.
- `useDeleteMenuItem`: Deletes a menu item.

## File Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   ├── domain/
│   │   ├── interfaces/   # TypeScript interfaces for GraphQL data types
│   │   └── schemas/      # GraphQL schemas for queries and mutations
│   ├── hooks/            # Custom hooks for handling GraphQL queries and mutations
│   ├── pages/            # Next.js pages
│   └── styles/           # Global and component-specific styles
└── public/               # Public assets
```

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the application in production mode.
- `lint`: Lints the codebase.
- `docker-compose up`: Starts backend services with Docker.

## API Routes

- **Table Management**: `/api/tables` – Provides table status and allows real-time updates.
- **Menu Management**: `/api/menu` – Provides and updates menu categories and items.

## Deployment

The application is ready for deployment with [Vercel](https://vercel.com) or any other Next.js-supported platform.

### Steps to Deploy on Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel's New Project page](https://vercel.com/new) and import your repository.
3. Set up environment variables in Vercel to match your `.env.local` file.
4. Click "Deploy" to build and deploy your application.

For more details on Next.js deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vercel Platform](https://vercel.com/docs)

## License

This project is licensed under the MIT License.

