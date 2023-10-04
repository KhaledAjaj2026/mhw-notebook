# Monster Hunter World - Hunter's Notes

An app that fetches data of monsters from the MHW API and presents it as three different categories.

## Motivation

Wanted to learn how to handle API calls and how to manage fetched JSON data. Also wanted to gain practical experience in building asynchronous functions for fetching data. Decided to build a vanillaJS website to learn more about handling event-listeners and DOM changes.

## Lessons Learned

Implemented basic API fetch using VanillaJS, the challenge was presenting this data in a formal fashion. Improved my understanding of accessing JSON data and learned about the CORS policy of data access.

Learned about using trie data-structure for implementing auto-complete in the search bar. Learned to refactor JS code by encasing distinguishable logic in a separate function for more readability. Used many and learned a lot about event listeners and how to use 'bind' to pass 'this' across event-listeners.

## Possible Future Updates

* Major style makeover, current style is ok but works to show funcitonality.
* Images are all stored on frontend; create an app to serve photos to frontend to reduce loading lag.
* Help update API source code, as some data is missing about some monsters (e.g. 'rewards' show up empty).

## Deployment

This site was deployed using [netlify](https://www.netlify.com/?attr=homepage-modal). Click [here](https://mhw-huntersnotes.netlify.app/) to see site.
