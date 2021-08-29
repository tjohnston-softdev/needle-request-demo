# Changelog

**2.8.0 --> 2.9.0**
* Replace let with var for backwards compat 
* Revised IF structure for pushing decoded text to pipeline.
* Replace all .pipe calls with stream module pipeline method
* Fixed unit tests
* Fix dangling parenthesis when calling 'needle' directly from a promise.
* Fixed readme typos.

---

**2.9.0 --> 3.0.0**
* Use pump module on nodes without 'stream.pipeline'
* Updated 'pump' module dependency.
* Released the kraken
* Revised socket cleanup specifications.
* Removed unnecessary whitespace.
* Alternative stream error handling for older Nodes, without stream.pipeline
* Fixed missing 'url.URL' in Node versions below 6.13.x
* Made sure that the 'done' event is triggered when piped outputs.
* Fixed testing for Node v10.x
* Skipped 'long_string' test in CI for Node v8 and v6.
* Remove 0.10.x from Actions matrix
* Lowercased verb when initializing needle to simplify a few checks