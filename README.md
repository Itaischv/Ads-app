# Advertisements-app

Tech stack: 
- Node.js & Express for running a server
- PostrgeSQL as a relational database for storing events
- ReactJS for creating the app, VanillaJS for some of the GPT events.
- Axios for communicating with the server

Running the app:
- install postgres using brew `brew services start postgresql`
- use `npm run pg:createdb` to create the advertisements db(using env variables in `.env` file).
- use `npm start` in `backend` dir in order to run server(using `nodemon`), will run on port 3030.
- use `npm start` in `frontend` dir to run react app on port 3000.

The app:

- Four different pages with 3 ad slots and random lorem ipsum content.
- One page with a table presenting the last 20 events from events table.
- When calculating page on time and reset when moving between pages.
- Routing done with react-router(content load once).
- When running node(server), an events table gets created, if not created before
- Refresh ads every 40 seconds.(GPT)
- Tracking the following events:
  - Page load
  - Ad clicked
  - Page exit intention
  - Scroll to ad(Which worked on "demo ads" but not when using only image divs, as agreed)
  - Time spent on page -> AS table column for each event.
