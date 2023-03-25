import {
    CacheInterceptor,
    CacheKey,
    CacheTTL,
    CACHE_MANAGER,
    Controller,
    Get,
    Inject,
    UseInterceptors,
  } from "@nestjs/common";

import { Cache } from "cache-manager";
import { getDogs, getCats } from "./utils";


// Note that you can apply caching at the controller level by moving
// the @UseInterceptors(CacheInterceptor) above the @Controller() decorator.
// However, caching should be used in specific parts of your application.
// So it's usually better to apply it sporadically, at the endpoint level.

@Controller()
export class AppController {

    // Note that the cache manager is injected in the constructor with the token
    // CACHE_MANAGER. The cache manager gives us more control over how we get and
    // return fetched data at the expense of a bit of code complexity.
    constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
      ) {}

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(10)
    @CacheKey("all-dogsdogs")
    @Get("dogs")
    getDogs() {
        return getDogs();
    }

    @Get("cats")
    async getCats() {
        // If the cached value exists, we immediately return it. Otherwise, we call
        // getCats (in production, that would be a call to your database) and save
        // the fetched data in the cache with a TTL of 10 seconds.
        const cachedCats = await this.cacheManager.get(
          "all-cats"
        );
        if (cachedCats) return cachedCats;
    
        const cats = await getCats();
        const ten_seconds = 1000 * 10;
        // set: (key: string, value: unknown, ttl?: Milliseconds) => Promise<void>;
        this.cacheManager.set(
            "all-cats",
            cats,
            ten_seconds
        );
    
        return cats;
    }
}