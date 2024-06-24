# Lego Giftify Technical Assessment

# What is this?

The solution is divided in two parts: the backend and the frontend (lego-next).

The backend is using:

- expressjs for its core
- mysql for the database
- prisma for the orm
- docker to setup mysql and phpmyadmin (see docker-compose.yml)
- db seeding is done through nodejs via prisma and csv files (due to the size of the inventory_parts file, a custom solution has been developed to handle it through streams)

The frontend is based on:

- nextjs (react) set up with typescript, tailwind, scss
- reactquery and axios to handle api requests to the backend
- react-hook-form and react-select for forms
- jotai for managing states across components

# Setup

## backend

- set up environment variables inside backend/.env (ie. copy/paste .env.example and change variable)
- run docker via `docker-compose up` (inside other terminal)
- install node (>=v20)
- install packages `npm i`
- seed db `npm run seed` and wait for it to complete
- run backend `npm run dev`

## frontend

- install node (>=v20)
- install packages `npm i`
- run frontend `npm run dev`

You can now check it on `localhost:3000` and backend at `localhost:3001` (default settings).

# Disclaimer

The project is just a proof of concept of my technical skills. As this is not intended to require a fully developed solution, it doesn't include:

- input sanitization
- proper refactoring
- testing suite
- deployment instructions

However, it does include:

- responsiveness and design (I am not a pro designer though :p)
- linter and prettier (install all the extensions for vscode)
- a fully "full stack" solution
- the entire db of rebrickable for offline (not the images though)

We can discuss the solution and potential improvements together during the interview.
