# Qu-Wars
A simple API REST (Star Wars one, of course) with Vue.js + Node.js + Express

The aim of this projects was to retrieve information from Swapi API and to show it in a way, that could be ordenable. 
I mainly have a frontend using Vue.js (2.6.10) and bootstrap-vue to model the cards, which represents the planets. I added a dropdown to 
add ordering behaviour (which uses lodash.js for that abstraction). And for interacting with the API, i use ES6 async/await (avoiding promises
to gain more declarativeness).
We also have a Node.js + Express server to interact with the Swapi API (i found swapi-node to do it faster).

¿Was it necessary the node.js server? That's arguable.. Probably for this domain, not, but if we need to integrate with a DB/to have some
sort of middleware, it could be useful

We have two branches:

* master

* development

We have development to disable CORS and execute both in the same enviroment

# Usage
In the front folder:

```
npm install
```

```
npm run serve
```

In the back folder:
```
npm install
```

```
node app.js
```

Enjoy! :)