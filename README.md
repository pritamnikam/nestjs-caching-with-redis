# NestJs Caching With Redis

The ultimate guide to implementing caching in NestJs with Cache Interceptor, Cache Manager and Redis

### What is caching?
Caching is a fairly old technique designed to improve your application’s performance and reliability.
Caching involves saving frequently requested data in an intermediary store called the "cache store" to avoid unnecessary calls to the primary database.
An HTTP request asking for data cached by the server will receive it directly from the cache store instead of getting it from a database. Which is much faster!

! [Caching System] (images/nestjs-caching-graph.png)

### Why do you need caching?
Any web application that has some success will eventually run into bottlenecks. The most common bottleneck is usually related to how information is fetched from a primary database, like Postgres or MySQL.

Indeed, as the number of users grows, so does the number of HTTP requests made to the server. This results in the same data being fetched all over again and again. Optimizing your application for speed and efficiency is important by caching frequently requested data.
Since most relational databases involve structured data, they are optimised for reliability and not for speed. That means the data they store on a disk is many times slower than the RAM. Using a NoSQL database does not bring any tremendous performance gains either.
The solution is to use an in-memory cache-store.
In this tutorial, we will implement caching in NestJs and ultimately scale it with Redis, a fast in-memory database that is perfect for this use case.

### Prerequisites
- A NestJs starter project ready
- Node version 16 or greater
- Docker


The Cache Module handles a lot of cache configuration for us, and we will customize it. Let's just point out that we can use caching with two different approaches:
- The Interceptor approach
- The Cache Manager approach with dependency injection

### When to use Interceptor vs Cache Manager in NestJs?
The interceptor approach is cleaner, but the cache manager approach gives you more flexibility with some overhead.

As a rule of thumb, you will use the Cache Interceptor If you need an endpoint to return cached data from the primary database in a traditional CRUD app.
However, if you need more control or do not necessarily want to return cached data, you will use the cache manager service as dependency injection.
So to summarise...

You will use the Cache Manager if you need more control, like:
- Deleting from cache
- Updating cache
- Manually fetching data from the cache store
- A combination of the above 👆🏻
To give a practical example, if you need to get a list of posts and you have an endpoint that fetches that list from the database. You need to use a cache interceptor.

For anything more complex, the cache manager will be required.



### Run the API in development mode
```javascript
yarn // install
yarn start:dev // start api in dev mode
```

### Run the end-to-end tests
```javascript
yarn // install
yarn test:e2e // start api in dev mode
```
