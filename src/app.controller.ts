import {
    CacheInterceptor,
    Controller,
    Get,
    UseInterceptors,
    CacheTTL,
    CacheKey,
  } from "@nestjs/common";

import { getDogs } from "./utils";


// Note that you can apply caching at the controller level by moving
// the @UseInterceptors(CacheInterceptor) above the @Controller() decorator.
// However, caching should be used in specific parts of your application.
// So it's usually better to apply it sporadically, at the endpoint level.

@Controller()
export class AppController {

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(10)
    @CacheKey("all-dogs")
    @Get("dogs")
    getDogs() {
        return getDogs();
    }
}