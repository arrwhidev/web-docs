# web-docs
Real-time markdown document collaboration tool.

Early alpha, works but much to do!

```
npm install && npm start
```

## TODO
 * Some kind of persistence to enable document switching. At the moment when the server stops the document is lost.
 * Need a smart way to only write changes to server, at the moment sending whole document on every key change so this is super mega awful.
