This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
after cloning:
npm install or npm i

create seperate file for .env and .env.local in your working directory

for env:

note:I used MongoDB here because i'm not familiar yet in PostgreSQL

go to https://account.mongodb.com/account/login

create Database with a collection name "Task"

paste your created URL from mongoDB in your .env file example below:

DATABASE_URL= ************************************

for .env.local:

go to https://clerk.com/

note: Clerk is more than a "sign-in box." Integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.

create user authentication with google and github.

copy API Keys example below:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_*************************************
CLERK_SECRET_KEY=sk_test_**************************************

copy and paste it in .env.local

below API keys, paste also this one below:

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
