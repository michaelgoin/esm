import newrelic from 'newrelic'

// this doesn't work because all these base-level imports happen asynchronously
// import instrumentTestDepencency from './instrument-esm-test-dependency.js'
// newrelic.instrument('esm-test-dependency', instrumentTestDepencency)

import express from 'express'
import makeCall, { makeDifferentCall } from 'esm-test-dependency'
import * as other from './some-other-file.js'

const app = express();

app.get("/", (req, res) => {
  newrelic.setTransactionName('Woo!')
  res.send("hello");
});

app.get("/something", function middlewareOne(req, res, next) {
  next()
}, function middlewareTwo(req, res) {
  res.send("something")
})

app.get("/makeCall", (req, res) => {
  makeCall('http://example.com').then(() => {
    res.send('made call')
  })
})

app.get("/makeDifferent", (req, res) => {
  makeDifferentCall('http://example.com').then(() => {
    res.send('made different call')
  })
})

app.listen(3000, () => {
  console.log('listning on port 3000')
});


// TODO:

//can't require newrelic.js because .js files are ESM when setting that at the package.json level.
// Is there some way for us to handle this better or are we going to have to force using .cjs for a bit?
