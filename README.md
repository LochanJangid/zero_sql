# zero-sql Landing Page & Public Releases

Official public website and release distribution hub for **zero-sql**, a fast, privacy-focused desktop database client for SQLite, PostgreSQL, MySQL, DuckDB, and SQL Server.

## Features

- **Next.js & React App Router**: Deployed instantly to Vercel.
- **Dynamic Release Resolution**: Automatically queries GitHub API (`https://api.github.com/repos/LochanJangid/zero_sql/releases/latest`) to link the latest Windows installer (.exe) directly to the download button.
- **Client-Side Caching**: Uses `sessionStorage` (15-minute TTL) to safeguard against GitHub unauthenticated API rate limits.
- **SmartScreen Guidance**: Provides friendly installation steps for users encountering Windows SmartScreen prompts on newly published binaries.
- **Public Release Distribution**: Hosts public GitHub Releases that allow the zero-sql desktop application to check and auto-update without bundling authentication tokens.

## Running Locally

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

## Deploying to Vercel

1. Push this repository to GitHub: `https://github.com/LochanJangid/zero_sql`.
2. Go to [vercel.com](https://vercel.com) and click **Add New... $\rightarrow$ Project**.
3. Import the `zero_sql` repository.
4. Click **Deploy**. Vercel will build and host the landing page automatically.
