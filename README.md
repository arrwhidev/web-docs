# web-docs
Real-time markdown document collaboration tool.

Early alpha, works but much to do!

```
npm install
npm start
nodemon server.js
http://localhost:8080/webpack-dev-server/
```

## TODO
 * Some kind of persistence to enable document switching. At the moment when the server stops the document is lost.
 * Each text change only sends the line that changed. New clients don't get the whole document, need to figure this out.
