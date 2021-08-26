# festify
Discover and explore upcoming music festivals

## initial thoughts
- probably using MongoDB with Mongoose
- festival and artist data isn't uniforn and may come in different shapes
- need for flexible schemas, dynamic queries, and good performance
- data from Spotify and Songkick APIs are not relational
- transactional consistency is less important than scalability and performance

- using Redux because app has multiple pages and components that will share state

- change URL in "/client/src/api/index.js"
- change ".env"